//redux
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

import type { RootState } from "../redux/store";
const useRedux = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  return {  useAppSelector };
};

export { useRedux };
