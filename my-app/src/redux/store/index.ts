import rootReducer from "../reducers";
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";

const composeEnhancers =
	process.env.NODE_ENV !== "production" &&
	typeof window === "object" &&
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const configureStore = (preloadedState: any) =>
	createStore(rootReducer, preloadedState, enhancer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({});

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionTypes<
	T extends { [key: string]: (...args: any[]) => any },
> = ReturnType<PropertiesType<T>>;
