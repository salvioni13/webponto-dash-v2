import { createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { callbackify } from "util";
import { postAuthenticate, postJwtLogin, postLogout } from "../../api";
import { setLoggedInUser } from "../../helpers/authentication_helper";
import { RootState } from "../store";
import { IUser } from "./types";

export interface UserState {
  readonly loggedUser: IUser | null;
  readonly selectedUser: IUser | null;
  readonly users: Array<IUser> | null;
  readonly isRequesting: boolean;  
}

export const initialState: UserState = {
  isRequesting: false,
  loggedUser: null,
  selectedUser: null,
  users: null,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const login = createAsyncThunk(
  "users/loginAction",
  async (user: IUser) => {
    const response = await postJwtLogin(user);
    return response;
  }
);

export const logout = createAsyncThunk(
  "users/logoutAction",
  async () => {
    const response = await postLogout();
    return response;
  }
);

export const authentication = createAsyncThunk(
  "users/authentication",
  async () => {
    const response = await postAuthenticate();
    return response;
  }
);


export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setLoggedUser: (state, action: any) => {
      state.loggedUser = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state: any) => {
        state.loggedUser = null;
      })
      .addCase(login.rejected, (state: any) => {
        state.status = "failed";
      })
      .addCase(login.fulfilled, (state: any, action: any) => {
        setLoggedInUser(action.payload);
        state.loggedUser = action.payload;
      })
      .addCase(logout.pending, (state: any) => {
        state.loggedUser = null;
      })
      .addCase(logout.rejected, (state: any) => {
        state.status = "failed";
      })
      .addCase(logout.fulfilled, (state: any, action: any) => {
        setLoggedInUser(null);
        state.loggedUser = null;
      })
      .addCase(authentication.pending, (state: any) => {
        state.loggedUser = null;
      })
      .addCase(authentication.rejected, (state: any) => {
        state.status = "failed";
      })
      .addCase(authentication.fulfilled, (state: any, action: any) => {
        setLoggedInUser(action.payload);
        state.loggedUser = action.payload;
      })
  },
});

export const {setLoggedUser} = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const user = (state: RootState) => state.Users.loggedUser;

export default userSlice.reducer;
