import { BASE_BLOG_URL } from "./../../redux/constants/urls/index";
import axios, { AxiosError, AxiosResponse } from "axios";
import { AxiosRequestConfig } from "axios";
import { refreshToken } from "../../redux/services/authServices";

export const BASE_LOGIN_API = "https://studapi.teachmeskills.by";

export const axiosPrivate = axios.create({
	baseURL: BASE_LOGIN_API,
	withCredentials: true,
});

axiosPrivate.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		const token = localStorage.getItem("accessToken");
		if (token) {
			config.headers!.authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	},
);

axiosPrivate.interceptors.response.use(
	(response: AxiosResponse) => response,
	async (error) => {
		const originalRequest = error.config;
		if (error.response) {
			if (error.response.status === 401 && !originalRequest.isRetry) {
				const token = localStorage.getItem("refreshToken");
				originalRequest.isRetry = true;
				if (token) {
					try {
						const newAccessToken = await refreshToken({ refresh: token });
						originalRequest.headers!.authorization = `Bearer ${newAccessToken.data.access}`;
						localStorage.setItem("accessToken", newAccessToken.data.access);
						return axiosPrivate(originalRequest);
					} catch (e) {
						return Promise.reject(e);
					}
				} else {
					return Promise.reject(error);
				}
			}
		} else {
			if (window.location.pathname !== "/signinpage")
				window.location.href = "/signinpage";
		}
	},
);

export const axiosContent = axios.create({
	baseURL: BASE_BLOG_URL,
});
