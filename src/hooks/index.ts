import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

export * from "./UserHooks";
export * from "./WindowHooks";
export * from "./useRedux";
export * from "./queryHooks";
export * from "./useLocalStorage";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


