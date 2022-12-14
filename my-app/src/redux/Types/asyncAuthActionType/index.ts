import { IAuthRequestLoginData } from "./../authTypes/index";
import {
	SET_LOGIN_DATA_START,
	GET_LOGIN_DATA_SUCCESS,
	GET_LOGIN_DATA_FAILURE,
	AUTH_LOADING,
} from "./../../action/index";
import { IAuthResponseActivatedUser } from "./../authTypes/index";

export type TAuthLoginData =
	| ISetAsyncLoginDataRequest
	| IGetAsyncLoginDataSuccessResponse
	| IGetAsyncLoginDataFailureResponse
	| isAuthLoading;

interface isAuthLoading {
	type: typeof AUTH_LOADING;
	payload: boolean;
}

interface ISetAsyncLoginDataRequest {
	type: typeof SET_LOGIN_DATA_START;
	payload: IAuthRequestLoginData;
}

interface IGetAsyncLoginDataSuccessResponse {
	type: typeof GET_LOGIN_DATA_SUCCESS;
	payload: IAuthResponseActivatedUser;
}

interface IGetAsyncLoginDataFailureResponse {
	type: typeof GET_LOGIN_DATA_FAILURE;
	payload: string;
}
