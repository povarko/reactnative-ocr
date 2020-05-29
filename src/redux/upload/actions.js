import actionTypes from "../actionTypes";

export function imageUploadAction(uri) {
  return { type: actionTypes.uploadImage, uri };
}
