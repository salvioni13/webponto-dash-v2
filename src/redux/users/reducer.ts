// types
import { usersApiResponseError } from "./actions";
import { UserActionTypes, UserState } from "./types";

export const INIT_STATE: UserState = {
  loggedUser: null,
  selectedUser: null,
  users: null,
};

const User = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case UserActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case UserActionTypes.REFRESH_LOGGED_USER:
          return {
            ...state,
            loggedUser: action.payload.data,
          };
        case UserActionTypes.GET_USERS:
          return {
            ...state,
            users: action.payload.data,
            isUsersFetched: true,
            getUsersLoading: false,
          };
        case UserActionTypes.CHANGE_STATUS:
          return {
            ...state,
            loggedUser: {
              ...state.loggedUser,
              is_working: action?.payload?.data?.status,
            },
          };
        case UserActionTypes.UPDATE_USER_PHONE:
          return {
            ...state,
          };
        case UserActionTypes.GET_ME:
          return {
            ...state,
            loggedUser: action.payload.data,
          };
        default:
          return { ...state };
      }

    case UserActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case UserActionTypes.REFRESH_LOGGED_USER:
          return {
            ...state,
          };
        case UserActionTypes.GET_USERS:
          return {
            ...state,
            isUsersFetched: false,
            getUsersLoading: false,
          };
        case UserActionTypes.CHANGE_STATUS:
          return {
            ...state,
          };
        case UserActionTypes.UPDATE_USER_PHONE:
          return {
            ...state,
          };
        case UserActionTypes.GET_ME:
          return {
            ...state,
          };
        default:
          return { ...state };
      }

    case UserActionTypes.GET_USERS: {
      return {
        ...state,
        getUsersLoading: true,
        isUsersFetched: false,
      };
    }

    case UserActionTypes.CHANGE_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };

    case UserActionTypes.CHANGE_LOGGED_USER:
      return {
        ...state,
        loggedUser: action.payload,
      };

    case UserActionTypes.GET_SELECTED_USER:
      return {
        ...state,
        loggedUser: action.payload,
      };

    case UserActionTypes.CHANGE_STATUS:
      return {
        ...state,
      };
    case UserActionTypes.UPDATE_USER_PHONE:
      return {
        ...state,
      };
    case UserActionTypes.GET_ME:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default User;
