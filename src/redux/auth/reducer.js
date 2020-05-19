import actionTypes from "../actionTypes";

const initialState = {
  user: null,
  loading: false,
  loginError: null,
  emailConfirm: false,
  registerEmail: null,
  registerError: null,
  resetPasswordLinkError: null,
  newPasswordError: null,
  refreshTokenError: null,
  updateProfileError: null,
  getUserProfileError: null,
  useTouchId: false,
  usePin: false,
  limitOrderDontShow: false,
  devices: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.loginSuccess:
      return { ...state, user: action.user };
    case actionTypes.loginError:
      return { ...state, loginError: action.message };
    case actionTypes.refreshTokenSuccess: {
      if (!state.user) return state;
      return { ...state, user: { ...state.user, ...action.payload } };
    }
    case actionTypes.refreshTokenError:
      return { ...state, refreshTokenError: action.message };
    case actionTypes.resetPasswordLinkError:
      return { ...state, resetPasswordLinkError: action.message };
    case actionTypes.registerSuccess: {
      return { ...state, registerEmail: action };
    }
    case actionTypes.registerError:
      return { ...state, registerError: action.message };
    case actionTypes.confirmEmailRequest:
      return { ...state, emailConfirm: action.status };
    case actionTypes.updateProfileError:
      return { ...state, updateProfileError: action.message };
    case actionTypes.updateProfileSuccess:
      return { ...state };
    case actionTypes.sendNewPasswordError:
      return {
        ...state,
        newPasswordError: action.message
      };
    case actionTypes.authLoading:
      return { ...state, loading: action.status };
    case actionTypes.setPin:
      return { ...state, usePin: true, useTouchId: false };
    case actionTypes.useTouchId:
      return { ...state, useTouchId: true, usePin: false };
    case actionTypes.setLimitOrderDontShow:
      return { ...state, limitOrderDontShow: true };
    case actionTypes.getUserProfileSuccess:
      return { ...state, user: { ...state.user, user: { ...action.payload } } };
    case actionTypes.getUserProfileError:
      return { ...state, getUserProfileError: action.message };
    case actionTypes.getDevicesSuccess:
      return { ...state, devices: action.payload };
    case actionTypes.revokeTokenSuccess: {
      const devices = state.devices;
      const newDevices = [];
      devices.forEach(device => {
        if (!action.tokenIds.includes(device.id)) {
          newDevices.push(device);
        }
      });
      return { ...state, devices: newDevices };
    }
    case actionTypes.logout:
      return {
        ...state,
        user: null,
        loginError: null,
        registerError: null,
        emailConfirm: false,
        resetPasswordLinkError: null,
        newPasswordError: null,
        refreshTokenError: null,
        updateProfileError: null,
        getUserProfileError: null
      };
    default:
      return state;
  }
}
