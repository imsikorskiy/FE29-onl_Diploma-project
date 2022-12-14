import { AnyAction, combineReducers } from "redux";
import { blogReducer } from "./blogsReducer";
import { newsReducer } from "./newsReducer/index";
import authReducer from "./authReducer";
import { LOGOUT } from "../action";

const appReducer = combineReducers({
	blogs: blogReducer,
	news: newsReducer,
	auth: authReducer,
});

const rootReducer = (
	state: ReturnType<typeof appReducer> | undefined,
	action: AnyAction,
) => {
	if (action.type === LOGOUT) {
		localStorage.clear();
		return appReducer({} as ReturnType<typeof appReducer>, action);
	}
	return appReducer(state, action);
};

export default rootReducer;
