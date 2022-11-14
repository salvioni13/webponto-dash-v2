import { IUser, UserActionTypes } from "./types";

// common success
export const usersApiResponseSuccess = (actionType: string, data: any) => ({
  type: UserActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});

// common error
export const usersApiResponseError = (actionType: string, error: string) => ({
  type: UserActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

// List of users
export const getUsers = (project: number, ) => ({
  type: UserActionTypes.GET_USERS,
  payload: {project}
});

// Get selected User
export const getSelectedUser = () => ({
  type: UserActionTypes.GET_SELECTED_USER,
});

// Change selected User
export const changeSelectedUser = (selectedUser: IUser | null) => ({
  type: UserActionTypes.CHANGE_SELECTED_USER,
  payload: selectedUser,
});

//change user status
export const changeStatus = (project: number, status: boolean) => ({
  type: UserActionTypes.CHANGE_STATUS,
  payload: { project, status },
});

// Get logged User
export const getLoggeddUser = () => ({
  type: UserActionTypes.GET_LOGGED_USER,
});

// Change logged User
export const changeLoggedUser = (loggedUser: IUser | null) => ({
  type: UserActionTypes.CHANGE_LOGGED_USER,
  payload: loggedUser,
});

export const updateUserPhone = (data:{}) => ({
  type: UserActionTypes.UPDATE_USER_PHONE,
  payload: {data}
})

export const getMe = () => ({
  type: UserActionTypes.GET_ME
})

export const refreshLoggedUser = () => ({
  type: UserActionTypes.REFRESH_LOGGED_USER
})


