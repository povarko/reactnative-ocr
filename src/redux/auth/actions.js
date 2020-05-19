import actionTypes from "../actionTypes";

export const authActions = {
  authLoading,
  login,
  loginSuccess,
  loginError,
  logout,
  register,
  registerSuccess,
  registerError,
  confirmEmailRequest,
  refreshToken,
  refreshTokenSuccess,
  refreshTokenError,
  sendResetPasswordLink,
  sendResetPasswordLinkSuccess,
  sendResetPasswordLinkError,
  sendNewPassword,
  sendNewPasswordError,
  resendEmailConfirmation,
  resendEmailConfirmationError,
  setPin,
  setTouchId,
  setLimitOrderDontShow,
  updateProfile,
  updateProfileSuccess,
  updateProfileError,
  getUserProfile,
  getUserProfileSuccess,
  getUserProfileError,
  getDevices,
  getDevicesSuccess,
  getDevicesError,
  revokeToken,
  revokeAllTokens,
  revokeTokenSuccess
};

function revokeToken(tokenId) {
  return { type: actionTypes.revokeTokenRequest, tokenId };
}

function revokeAllTokens() {
  return { type: actionTypes.revokeAllTokensRequest };
}

function revokeTokenSuccess(tokenIds) {
  return { type: actionTypes.revokeTokenSuccess, tokenIds };
}

function getDevices() {
  return { type: actionTypes.getDevicesRequest };
}

function getDevicesSuccess(payload) {
  return { type: actionTypes.getDevicesSuccess, payload };
}

function getDevicesError(error) {
  return { type: actionTypes.getDevicesError, error };
}

function setPin() {
  return { type: actionTypes.setPin };
}

function setTouchId() {
  return { type: actionTypes.setTouchId };
}

function setLimitOrderDontShow() {
  return { type: actionTypes.setLimitOrderDontShow };
}

function authLoading(status) {
  return { type: actionTypes.authLoading, status };
}

function login(email, password) {
  return { type: actionTypes.loginRequest, email, password };
}

function loginSuccess(user) {
  return { type: actionTypes.loginSuccess, user };
}

function loginError(message) {
  return { type: actionTypes.loginError, message };
}

function register(payload) {
  return { type: actionTypes.registerRequest, payload };
}

function registerSuccess(payload) {
  return { type: actionTypes.registerSuccess, payload };
}

function registerError(message) {
  return { type: actionTypes.registerError, message };
}

function confirmEmailRequest(token) {
  return { type: actionTypes.confirmEmailRequest, token };
}

function refreshToken() {
  return { type: actionTypes.refreshTokenRequest };
}

function refreshTokenSuccess(payload) {
  return { type: actionTypes.refreshTokenSuccess, payload };
}

function refreshTokenError(message) {
  return { type: actionTypes.refreshTokenError, message };
}

function sendResetPasswordLink(email) {
  return { type: actionTypes.resetPasswordLinkRequest, email };
}

function sendResetPasswordLinkSuccess() {
  return { type: actionTypes.resetPasswordLinkSuccess };
}

function sendResetPasswordLinkError(message) {
  return { type: actionTypes.resetPasswordLinkError, message };
}

function sendNewPassword(password, resetPasswordToken) {
  return {
    type: actionTypes.sendNewPasswordRequest,
    password,
    resetPasswordToken
  };
}
function sendNewPasswordError(message) {
  return { type: actionTypes.sendNewPasswordError, message };
}

function resendEmailConfirmation(email) {
  return { type: actionTypes.resendEmailConfirmation, email };
}

function resendEmailConfirmationError(message) {
  return { type: actionTypes.resendEmailConfirmationError, message };
}

function getUserProfile() {
  return { type: actionTypes.getUserProfileRequest };
}

function getUserProfileSuccess(payload) {
  return { type: actionTypes.getUserProfileSuccess, payload };
}

function getUserProfileError(message) {
  return { type: actionTypes.getUserProfileError, message };
}

function updateProfile(payload) {
  return { type: actionTypes.updateProfileRequest, payload };
}

function updateProfileSuccess() {
  return { type: actionTypes.updateProfileSuccess };
}

function updateProfileError(message) {
  return { type: actionTypes.updateProfileError, message };
}

function logout() {
  return { type: actionTypes.logout };
}
