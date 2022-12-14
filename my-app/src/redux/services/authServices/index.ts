import {
	IAuthRequestRefreshToken,
	IAuthResponseRefreshToken,
} from "../../Types/authTypes";
import axios from "axios";
import { axiosPrivate, BASE_LOGIN_API } from "../../../components/API";
import {
	IAuthResponseRegistrationData,
	IAuthRequestActivation,
	IAuthRequestLoginData,
	IAuthResponseLoginData,
	IAuthRequestRegistrationData,
	IAuthResponseActivation,
} from "../../Types/authTypes";
import { IAuthResponseActivatedUser } from "../../Types/authTypes";

export const login = async ({ email, password }: IAuthRequestLoginData) => {
	return await axiosPrivate.post<IAuthResponseLoginData>(`/auth/jwt/create`, {
		email,
		password,
	});
};

export const registration = async ({
	username,
	email,
	password,
}: IAuthRequestRegistrationData) => {
	return await axiosPrivate.post<IAuthResponseRegistrationData>(
		`/auth/users/`,
		{ username, email, password },
	);
};

export const accountActivation = async ({
	uid,
	token,
}: IAuthRequestActivation) => {
	return axiosPrivate.post<IAuthResponseActivation>(`/auth/users/activation/`, {
		uid,
		token,
	});
};

export const getAuthorizedUserInfo = async () => {
	return await axiosPrivate.get<IAuthResponseActivatedUser>(`/auth/users/me/`);
};

export const refreshToken = async ({ refresh }: IAuthRequestRefreshToken) => {
	return await axiosPrivate.post<IAuthResponseRefreshToken>(
		`/auth/jwt/refresh`,
		{ refresh },
	);
};
