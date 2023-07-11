import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store";
import { useSelector } from "react-redux";

//типизируем hook useSelector
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
