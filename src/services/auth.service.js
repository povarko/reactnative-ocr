import axios from "axios";
import moment from "moment";

export const authService = {
  loginWithEmailAndPassword,
  register,
  sendResetPasswordLink,
  sendNewPassword,
  refreshToken,
  confirmEmailRequest,
  resendEmailConfirmation,
  updateProfile,
  getUserProfile,
  getDevices,
  revokeToken,
  isTokenExpired,
  revokeAllTokens
};

function loginWithEmailAndPassword(email, password) {
  return axios.post("/auth/login", { email, password });
}

function register(payload) {
  return axios.post("/register.php", payload);
}

function confirmEmailRequest(token) {
  return axios.post("/auth/confirmemail", { token });
}

function sendResetPasswordLink(email) {
  return axios.post("/auth/forgot-password", { email });
}

function sendNewPassword(password, resetPasswordToken) {
  return axios.post("/auth/reset-password", { password, resetPasswordToken });
}

function refreshToken(email, refreshToken) {
  return axios.post("/auth/token/refresh", { email, refreshToken });
}

function resendEmailConfirmation(email) {
  return axios.post("/auth/resendconfirmation", { email });
}

function getUserProfile() {
  return axios.get("/users/me");
}

function updateProfile(payload) {
  return axios.put("/users/me", payload);
}

async function getDevices() {
  const res = await axios.get("/users/devices");
  const devices = res.data.data;
  return devices;
}

async function revokeToken(tokenId) {
  await axios.post("/auth/token/revoke", { tokenId });
}

async function revokeAllTokens(tokenIds) {
  await Promise.all(tokenIds.map(id => revokeToken(id)));
}

function isTokenExpired(tokenTimestamp, maxTokenAgeMinutes = 10) {
  const limit = maxTokenAgeMinutes - 0.5; // allow 5 seconds buffer for request transit time
  return moment().diff(tokenTimestamp, "seconds") >= limit;
}
