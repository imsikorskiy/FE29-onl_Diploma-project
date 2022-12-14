import { getAuthorizedUserInfo } from "./../../services/authServices/index";
import {
	IAuthRequestLoginData,
	IAuthResponseActivatedUser,
} from "./../../Types/authTypes/index";
import {
	AUTH_LOADING,
	GET_LOGIN_DATA_SUCCESS,
	GET_LOGIN_DATA_FAILURE,
	LOGOUT,
} from "./../index";
import { TAuthLoginData } from "./../../Types/asyncAuthActionType/index";
import { ActionCreator } from "redux";
import { Dispatch } from "react";
import { login } from "../../services/authServices";

export const setAuthLoading: ActionCreator<TAuthLoginData> = (
	isLoading: boolean,
) => {
	return {
		type: AUTH_LOADING,
		payload: isLoading,
	};
};

export const getLoginDataSuccess: ActionCreator<TAuthLoginData> = (
	data: IAuthResponseActivatedUser,
) => {
	return {
		type: GET_LOGIN_DATA_SUCCESS,
		payload: data,
	};
};

export const getLoginDataFailure = (error: any) => {
	return {
		type: GET_LOGIN_DATA_FAILURE,
		payload: error,
	};
};

export const logout = () => {
	return {
		type: LOGOUT,
	};
};

export const setAsyncLoginData = ({
	email,
	password,
}: IAuthRequestLoginData) => {
	return (dispatch: Dispatch<TAuthLoginData>) => {
		dispatch(setAuthLoading(true));
		login({
			email,
			password,
		})
			.then((res) => {
				if (res.data && res.status === 200) {
					const accessToken = res.data.access;
					const refreshToken = res.data.refresh;

					localStorage.setItem("accessToken", accessToken);
					localStorage.setItem("refreshToken", refreshToken);

					getAuthorizedUserInfo()
						.then((res) => dispatch(getLoginDataSuccess({ ...res.data })))
						.catch((e: any) => {
							dispatch(getLoginDataFailure(e?.message));
						});
				}
			})
			.catch((e: any) => {
				dispatch(getLoginDataFailure(e?.response?.data?.detail));
			})
			.finally(() => {
				dispatch(setAuthLoading(false));
			});
	};
};
