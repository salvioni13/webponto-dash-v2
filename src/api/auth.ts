import { IUser } from "../redux/users/types";
import { APIClient } from "./apiCore";
import * as url from "./urls";

const api = new APIClient();

// postForgetPwd
const forgetPwd = (data: any) => {
  api.create(`${url.GET_USERS}${url.POST_PASSWORD_FORGET}`, {
    email: data,
  });
};

const postLogout = () =>
  api.create(url.POST_LOGOUT, {}, { withCredentials: true });

const postAuthenticate = () => {
  return api.get(url.POST_AUTHENTICATE, { withCredentials: true });
};

const postJwtLogin = (data: any) => {
  return api.create("/authentication/login", data, { withCredentials: true });
};

// Register Method
const register = (data: any) => {
  return api.create(`${url.POST_AUTHENTICATE}${url.REGISTER}`, data);
};

const phoneOtp = (data: any) => {
  return api.create(`${url.PHONE_SMS}${url.PHONE_SEND_OTP}`);
};

const postJwtRegister = (data: any) => {
  return api.create(url.JWT_REGISTER, data);
};

const changePassword = (data: any) => {
  return api.update(`${url.GET_USERS}${url.USER_CHANGE_PASSWORD}`, {
    oldPassword: data.data.oldPassword,
    newPassword: data.data.password,
  });
};

const recoverPassword = (
  userId: IUser["id"],
  { password, verifyToken }: { password: string; verifyToken: string }
) => {
  return api.update(``, { password, verifyToken });
};

const sendEmailVerification = () => {
  return api.create(
    url.EMAIL_CONFIRMATION,
    {},
    {
      withCredentials: true,
    }
  );
};

const confirmEmail = (token: string) => {
  return api.create(
    url.CONFIRM_EMAIL,
    { token },
    {
      withCredentials: true,
    }
  );
};

const verifyPhoneOtp = (data: any) => {
  return api.create(`${url.PHONE_SMS}${url.CHECK_OTP}`, {
    code: data,
  });
};

export {
  forgetPwd,
  postJwtLogin,
  register,
  postJwtRegister,
  changePassword,
  postLogout,
  postAuthenticate,
  phoneOtp,
  verifyPhoneOtp,
  sendEmailVerification,
  confirmEmail,
  recoverPassword,
};
