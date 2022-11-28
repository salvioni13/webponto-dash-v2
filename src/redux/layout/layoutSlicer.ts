import { createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { callbackify } from "util";
import { getUser, postAuthenticate, postJwtLogin } from "../../api";
import { RootState } from "../store";

export interface LayoutState {
  readonly viewMode: 'light' | 'dark' | null;
}

export const initialState: LayoutState = {
    viewMode: null
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const changeLayoutMode = createAsyncThunk(
  "users/loginAction",
  async (type: 'dark' | 'light') => {
    document.body.setAttribute('data-layout-mode', type);    
    return type;
  }
);




export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setViewMode: (state, action: any) => {
      state.viewMode = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changeLayoutMode.pending, (state: any) => {
        state.viewMode = null;
      })
      .addCase(changeLayoutMode.rejected, (state: any) => {
        state.status = "failed";
      })
      .addCase(changeLayoutMode.fulfilled, (state: any, action: any) => {
        state.viewMode = action.payload;
      })
     
  },
});

export const {setViewMode} = layoutSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const layoutReducer= (state: RootState) => state.Layout;

export default layoutSlice.reducer;
