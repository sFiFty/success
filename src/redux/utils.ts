import { useSelector as reduxUseSelector } from "react-redux";
import { IState } from "./reduxType";

export function useSelector<T>(
  selector: (state: IState) => T,
  equalityFn?: ((left: T, right: T) => boolean) | undefined
) {
  return reduxUseSelector<IState, T>(selector, equalityFn);
}
