import { authService } from "@AppServices";
import actionTypes from "../actionTypes";
import { axiosConfig } from "@AppConfig";
import isObject from "isobject";
import moment from "moment";
import { all, call, takeLatest, put, fork, select } from "redux-saga/effects";
import { authActions } from "./actions";
import { navigationService } from "@AppServices";
import Toast from "react-native-simple-toast";
import publicIP from "react-native-public-ip";
import reactotron from "reactotron-react-native";

function extractErrorMessage(err) {
  const res = err.response;
  return isObject(res) && res.data ? res.data.message : "something went wrong";
}

export function* loginRequest() {
  yield takeLatest(actionTypes.loginRequest, function*({ email, password }) {
    try {
      yield put(authActions.authLoading(true));
      yield put(authActions.loginError(null));
      const { data } = yield call(
        authService.loginWithEmailAndPassword,
        email,
        password
      );
      const userData = { ...data.data, tokenTimestamp: moment() };
      if (userData.user.emailConfirmed) {
        axiosConfig({ authToken: userData.accessToken });
        yield put(authActions.loginSuccess(userData));
        navigationService.navigate("AuthLoading");
      } else {
        navigationService.navigate("RegisterEmailSent", {
          email: email
        });
      }
    } catch (err) {
      const message = extractErrorMessage(err);
      // yield put(authActions.loginError(message));
      navigationService.navigate("AuthLoading");

    } finally {
      yield put(authActions.authLoading(false));
    }
  });
}

function* resetPasswordLinkRequest() {
  yield takeLatest(actionTypes.resetPasswordLinkRequest, function*({ email }) {
    try {
      yield put(authActions.authLoading(true));
      yield put(authActions.sendResetPasswordLinkError(null));
      yield authService.sendResetPasswordLink(email);
      yield put(authActions.sendResetPasswordLinkSuccess());

      navigationService.navigate("PasswordResetEmailSent");
    } catch (err) {
      const message = extractErrorMessage(err);
      yield put(authActions.sendResetPasswordLinkError(message));
    } finally {
      yield put(authActions.authLoading(false));
    }
  });
}

function* refreshTokenRequest() {
  yield takeLatest(actionTypes.refreshTokenRequest, function*() {
    try {
      const user = yield select(state => state.auth.user);
      const isExpired = authService.isTokenExpired(user.tokenTimestamp);
      if (isExpired) {
        const { data } = yield authService.refreshToken(
          user.user.email,
          user.refreshToken
        );
        yield put(
          authActions.refreshTokenSuccess({
            ...data.data,
            tokenTimestamp: moment()
          })
        );
        axiosConfig({ authToken: data.data.accessToken });
      }
    } catch (err) {
      const message = extractErrorMessage(err);
      yield put(authActions.refreshTokenError(message));
    }
  });
}

function* sendNewPasswordRequest() {
  yield takeLatest(actionTypes.sendNewPasswordRequest, function*({
    password,
    resetPasswordToken
  }) {
    try {
      yield put(authActions.authLoading(true));
      yield put(authActions.sendNewPasswordError(null));
      const result = yield authService.sendNewPassword(
        password,
        resetPasswordToken
      );
      if (result.status === 200) {
        navigationService.navigate("Login");
      } else {
        const errorMessage = result.data.message;
        const errorMessage1 = result.response.data.message;
        yield put(authActions.sendNewPasswordError(errorMessage));
      }
    } catch (err) {
      const message = extractErrorMessage(err);
    } finally {
      yield put(authActions.authLoading(false));
    }
  });
}

function* resendEmailConfirmationRequest() {
  yield takeLatest(actionTypes.resendEmailConfirmation, function*({ email }) {
    try {
      yield authService.resendEmailConfirmation(email);
    } catch (err) {
      const message = extractErrorMessage(err);
      yield put(authActions.resendEmailConfirmationError(message));
    }
  });
}

function* registerRequest() {
  yield takeLatest(actionTypes.registerRequest, function*({ payload }) {
    try {
      yield put(authActions.authLoading(true));
      yield put(authActions.registerError(null));

      const { data } = yield authService.register(payload);
      const userData = { ...data.data, tokenTimestamp: moment() };

      yield put(authActions.registerSuccess(payload.email));
      // axiosConfig({ authToken: userData.accessToken });
      // if (userData.user.emailConfirmed) {
      //   yield put(authActions.loginSuccess(userData));
      // } else {
      yield put(authActions.loginSuccess(userData));

      axiosConfig({ authToken: userData.accessToken });
      navigationService.navigate("RegisterEmailSent", {
        email: payload.email
        // token: userData.accessToken,
      });
      // }
    } catch (err) {
      const message = extractErrorMessage(err);
      yield put(authActions.registerError(message));
    } finally {
      yield put(authActions.authLoading(false));
    }
  });
}

function* confirmEmailRequest() {
  yield takeLatest(actionTypes.confirmEmailRequest, function*(request) {
    try {
      yield put(authActions.authLoading(true));
      // const user = yield select(state => state.auth.user);
      let token = request.token;
      const result = yield authService.confirmEmailRequest(token);
      // const { data } = yield authService.confirmEmailRequest(token);
      if (result.status === 200) {
        axiosConfig({ emailVerified: true });
        navigationService.navigate("RegistrationSuccess");
      } else {
        const errorMessage = result.data.message;
        const errorMessage1 = result.response.data.message;
      }
    } catch (err) {
      const res = err.response;
      const message = isObject(res) && res.data ? res.data.message : "error";
      console.log("error===", res);
    } finally {
      yield put(authActions.authLoading(false));
    }
  });
}

function* getUserProfileRequest() {
  yield takeLatest(actionTypes.getUserProfileRequest, function*() {
    try {
      yield put(authActions.authLoading(true));
      const { data } = yield authService.getUserProfile();
      const userData = { ...data.data, tokenTimestamp: moment() };
      yield put(authActions.getUserProfileSuccess(userData));
    } catch (err) {
      const message = extractErrorMessage(err);
      yield put(authActions.getUserProfileError(message));
    } finally {
      yield put(authActions.authLoading(false));
    }
  });
}

function* updateProfileRequest() {
  yield takeLatest(actionTypes.updateProfileRequest, function*({ payload }) {
    try {
      yield put(authActions.authLoading(true));
      yield put(authActions.updateProfileError(null));

      const { status } = yield authService.updateProfile(payload);
      console.log("request done =====   ", status);
      // yield put(authActions.authLoading(false));
    } catch (err) {
      const message = extractErrorMessage(err);
      yield put(authActions.updateProfileError(message));
    } finally {
      yield put(authActions.authLoading(false));
    }
  });
}

function* getDevicesRequest() {
  yield takeLatest(actionTypes.getDevicesRequest, function*() {
    try {
      const devices = yield call(authService.getDevices);
      reactotron.log(devices);
      yield put(authActions.getDevicesSuccess(devices));
    } catch (err) {
      const message = extractErrorMessage(err);
      reactotron.log(err);
      yield put(authActions.getDevicesError(message));
    }
  });
}

function* revokeTokenRequest() {
  yield takeLatest(actionTypes.revokeTokenRequest, function*({ tokenId }) {
    try {
      const ip = yield call(publicIP);
      yield call(authService.revokeToken, tokenId);
      yield put(authActions.revokeTokenSuccess([tokenId]));
      const { devices } = yield select(state => state.auth);
      Toast.show("Successfully revoked device token.");
      const hasCurrentDevice = devices.find(
        ({ ipv4, ipv6 }) => ipv4 == ip || ipv6 == ip
      );
      if (hasCurrentDevice) {
        yield put(authActions.logout());
      }
    } catch (err) {
      const message = extractErrorMessage(err);
      reactotron.log(message);
      Toast.show("Failed to revoke token.");
    }
  });
}

function* revokeAllTokensRequest() {
  yield takeLatest(actionTypes.revokeAllTokensRequest, function*() {
    try {
      const { devices } = yield select(state => state.auth);
      const tokens = devices.map(device => device.id);
      yield call(authService.revokeAllTokens, tokens);
      yield put(authActions.revokeTokenSuccess(tokens));
      yield put(authActions.logout());
    } catch (err) {
      const message = extractErrorMessage(err);
      reactotron.log(message);
      Toast.show("Failed to revoke tokens.");
    }
  });
}

function* logoutRequest() {
  yield takeLatest(actionTypes.logout, function*() {
    navigationService.navigate("Auth");
  });
}

export default function* authSagas() {
  yield all([
    fork(loginRequest),
    fork(resetPasswordLinkRequest),
    fork(refreshTokenRequest),
    fork(registerRequest),
    fork(sendNewPasswordRequest),
    fork(confirmEmailRequest),
    fork(getUserProfileRequest),
    fork(updateProfileRequest),
    fork(resendEmailConfirmationRequest),
    fork(getDevicesRequest),
    fork(revokeTokenRequest),
    fork(revokeAllTokensRequest),
    fork(logoutRequest)
  ]);
}
