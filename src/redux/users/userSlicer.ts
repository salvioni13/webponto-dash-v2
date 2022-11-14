import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { callbackify } from "util";
import { getUser, postJwtLogin } from "../../api";
import { RootState } from "../store";
import { IUser } from "./types";

export interface UserState {
  readonly loggedUser: IUser | null;
  readonly selectedUser: IUser | null;
  readonly users: Array<IUser> | null;
}

export const initialState: UserState = {
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

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    loginAction: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loggedUser = action?.payload?.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state: any) => {
        state.loggedUser = null;
      })
      .addCase(login.fulfilled, (state: any, action: any) => {
        console.log(action)
        state.loggedUser = action.payload;
      })
      .addCase(login.rejected, (state: any) => {
        state.status = "failed";
      });
  },
});

export const { loginAction } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const user = (state: RootState) => state.Users.loggedUser;

export default counterSlice.reducer;
