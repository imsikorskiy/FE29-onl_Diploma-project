import {
	GET_ASYNC_TOTAL_COUNT_NEWS_FAILURE,
	GET_BLOG_SORT_SUCCESS,
	SET_NEWS_SORT,
} from "./../index";
import { Dispatch, ActionCreator } from "redux";
import {
	getAsyncNewsFromApi,
	getAsyncNewsCount,
} from "../../services/NewsServices";
import {
	GET_ASYNC_NEWS_FAILURE,
	GET_ASYNC_NEWS_START,
	GET_ASYNC_NEWS_SUCCESS,
	GET_ASYNC_TOTAL_COUNT_NEWS,
} from "../index";
import { IAsyncBlogsResponseData } from "../../Types/responseType";
import { TNewsActionTypes } from "../../Types/asyncNewsActionType";
import { SET_CURRENT_NEWS_PAGE } from "../index";

export const getAsyncNewsStart: ActionCreator<TNewsActionTypes> = () => {
	return {
		type: GET_ASYNC_NEWS_START,
		payload: {},
	};
};

export const getAsyncNewsSuccess: ActionCreator<TNewsActionTypes> = (
	Blogs: IAsyncBlogsResponseData[],
) => {
	return {
		type: GET_ASYNC_NEWS_SUCCESS,
		payload: Blogs,
	};
};

export const getAsyncNewsFailure = (error: string) => {
	return {
		type: GET_ASYNC_NEWS_FAILURE,
		payload: error,
	};
};

export const setCurrentNewsPage: ActionCreator<TNewsActionTypes> = (
	page: number,
) => {
	return {
		type: SET_CURRENT_NEWS_PAGE,
		payload: page,
	};
};

export const getAsyncTotalCount: ActionCreator<TNewsActionTypes> = (
	count: number,
) => {
	return {
		type: GET_ASYNC_TOTAL_COUNT_NEWS,
		payload: count,
	};
};

export const getAsyncCountFailure = (error: string) => {
	return {
		type: GET_ASYNC_TOTAL_COUNT_NEWS_FAILURE,
		payload: error,
	};
};

export const setNewsSort: ActionCreator<TNewsActionTypes> = (sort: string) => {
	return {
		type: SET_NEWS_SORT,
		payload: sort,
	};
};

export const getAsyncNewsSortSuccess: ActionCreator<TNewsActionTypes> = (
	sort: string,
) => {
	return {
		type: GET_BLOG_SORT_SUCCESS,
		payload: sort,
	};
};

export const getAsyncNews = (currentPage: number | string, sort?: string) => {
	return (dispatch: Dispatch<TNewsActionTypes>) => {
		dispatch(getAsyncNewsStart());
		dispatch(setCurrentNewsPage(currentPage));
		dispatch(setNewsSort(sort));
		getAsyncNewsFromApi({ currentPage, sort })
			.then((res) => {
				dispatch(getAsyncNewsSortSuccess(res.data));
			})
			.catch((error) => {
				dispatch(getAsyncNewsFailure(error?.message));
			});
	};
};

export const getTotalAsyncNewsCount = () => {
	return (dispatch: Dispatch<TNewsActionTypes>) => {
		dispatch(getAsyncTotalCount());
		getAsyncNewsCount()
			.then((res) => {
				dispatch(getAsyncTotalCount(res.data));
			})
			.catch((error) => {
				dispatch(getAsyncCountFailure(error?.message));
			});
	};
};
