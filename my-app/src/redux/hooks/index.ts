import { useState, useEffect, RefObject } from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;
export const useAppDispatch: () => AppDispatch = useDispatch;

interface IWindowSizeState {
	width: number;
	height: number;
}

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<IWindowSizeState>({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return windowSize;
};

export default useWindowSize;

export const useClickOutside = (
	ref: RefObject<HTMLButtonElement>,
	callBack: () => void,
) => {
	useEffect(() => {
		const listener = (event: MouseEvent) => {
			if (
				ref.current &&
				event.target &&
				ref.current.contains(event.target as Node)
			) {
				return;
			}
			callBack();
		};

		document.addEventListener("mousedown", listener);
		return () => {
			document.removeEventListener("mousedown", listener);
		};
	}, [ref, callBack]);
};
