
export enum UserActionTypes {
  API_RESPONSE_SUCCESS = "@@users/API_RESPONSE_SUCCESS",
  API_RESPONSE_ERROR = "@@users/API_RESPONSE_ERROR",

  GET_USERS = "@@users/GET_USERS",
  GET_SELECTED_USER = "@@users/GET_SELECTED_USER",
  CHANGE_SELECTED_USER = "@@users/CHANGE_SELECTED_USER",
  GET_LOGGED_USER = "@@users/GET_LOGGED_USER",
  CHANGE_LOGGED_USER = "@@users/CHANGE_LOGGED_USER",
  CHANGE_STATUS = "@@users/CHANGE_STATUS",
  UPDATE_USER_PHONE="@@users/UPDATE_USER_PHONE",
  GET_ME="@@users/GET_ME",
  REFRESH_LOGGED_USER = "@@users/REFRESH_LOGGED_USER",
}

export interface IUser {
  id: number;
  name: string;
  cpf: string;
  email: string;
  phoneNumber: string;
  pis: string;
  born: Date;
  hired: Date;
  videoAccept: boolean;
  termsAccept: boolean;
}

export interface UserState {
  readonly loggedUser: IUser | null;
  readonly selectedUser: IUser | null;
  readonly users: Array<IUser> | null;
}
