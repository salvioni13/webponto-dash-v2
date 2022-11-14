import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

export * from "./UserHooks";
export * from "./WindowHooks";
export * from "./useRedux";
export * from "./queryHooks";
export * from "./useLocalStorage";

export const useAppDispatch = () => useDispatch<AppDispatch>();

