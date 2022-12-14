import { IAuthResponseActivatedUser } from "./../../Types/authTypes/index";
import {
	GET_LOGIN_DATA_SUCCESS,
	GET_LOGIN_DATA_FAILURE,
	AUTH_LOADING,
} from "./../../action/index";
import { Reducer } from "redux";

interface IInitialAuthState {
	data: IAuthResponseActivatedUser | {};
	isLoading: boolean;
	error: null | string;
	isAuth: boolean;
}

const initialState: IInitialAuthState = {
	data: {} as IAuthResponseActivatedUser,
	isLoading: false,
	error: null,
	isAuth: false,
};

const authReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case GET_LOGIN_DATA_SUCCESS:
			return {
				...state,
				data: { ...action.payload },
				error: null,
				isAuth: true,
			};
		case GET_LOGIN_DATA_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		case AUTH_LOADING:
			return {
				...state,
				isLoading: action.payload,
			};
		default:
			return state;
	}
};

export default authReducer;
