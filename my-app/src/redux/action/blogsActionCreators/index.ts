import { GET_BLOG_SORT_SUCCESS, SET_BLOG_FILTER, SET_SORT } from "./../index";
import {
	getAsyncBlogsFromApi,
	getAsyncBlogsCount,
} from "../../services/BlogsServices";
import { Dispatch, ActionCreator } from "redux";
import {
	GET_ASYNC_BLOGS_FAILURE,
	GET_ASYNC_BLOGS_START,
	GET_ASYNC_BLOGS_SUCCESS,
} from "../index";
import { IAsyncBlogsResponseData } from "../../Types/responseType";
import { TBlogsActionTypes } from "../../Types/asyncBlogActionType";
import {
	SET_CURRENT_PAGE,
	GET_ASYNC_TOTAL_COUNT,
	GET_ASYNC_SEARCH_BLOGS_START,
	GET_ASYNC_BLOGS_SEARCH_SUCCESS,
	GET_ASYNC_BLOGS_SEARCH_FAILURE,
} from "../index";

// get blogs
export const getAsyncBlogsStart: ActionCreator<TBlogsActionTypes> = () => {
	return {
		type: GET_ASYNC_BLOGS_START,
		payload: {},
	};
};

export const getAsyncBlogsSuccess: ActionCreator<TBlogsActionTypes> = (
	blogs: IAsyncBlogsResponseData[],
) => {
	return {
		type: GET_ASYNC_BLOGS_SUCCESS,
		payload: blogs,
	};
};

export const getAsyncBlogsFailure = (error: string) => {
	return {
		type: GET_ASYNC_BLOGS_FAILURE,
		payload: error,
	};
};

// search
export const setBlogsFilter: ActionCreator<TBlogsActionTypes> = (
	filter: string,
) => {
	return {
		type: SET_BLOG_FILTER,
		payload: filter,
	};
};

export const getAsyncBlogsSearchStart: ActionCreator<
	TBlogsActionTypes
> = () => {
	return {
		type: GET_ASYNC_SEARCH_BLOGS_START,
		payload: {},
	};
};

export const getAsyncBlogsSearchSuccess: ActionCreator<TBlogsActionTypes> = (
	filter: string,
) => {
	return {
		type: GET_ASYNC_BLOGS_SEARCH_SUCCESS,
		payload: filter,
	};
};

export const getAsyncBlogsSearchFailure = (error: string) => {
	return {
		type: GET_ASYNC_BLOGS_SEARCH_FAILURE,
		payload: error,
	};
};

export const setCurrentPage: ActionCreator<TBlogsActionTypes> = (
	page: number,
) => {
	return {
		type: SET_CURRENT_PAGE,
		payload: page,
	};
};

// count
export const getAsyncTotalCount: ActionCreator<TBlogsActionTypes> = (
	count: number,
) => {
	return {
		type: GET_ASYNC_TOTAL_COUNT,
		payload: count,
	};
};

export const getAsyncCountFailure = (error: string) => {
	return {
		type: GET_ASYNC_BLOGS_FAILURE,
		payload: error,
	};
};

// sort
export const setBlogsSort: ActionCreator<TBlogsActionTypes> = (
	sort: string,
) => {
	return {
		type: SET_SORT,
		payload: sort,
	};
};

export const getAsyncBlogsSortSuccess: ActionCreator<TBlogsActionTypes> = (
	sort: string,
) => {
	return {
		type: GET_BLOG_SORT_SUCCESS,
		payload: sort,
	};
};

export const getAsyncBlogs = (
	currentPage: number | string,
	filter: string,
	sort?: string,
) => {
	return (dispatch: Dispatch<TBlogsActionTypes>) => {
		dispatch(getAsyncBlogsStart());
		dispatch(setCurrentPage(currentPage));
		dispatch(setBlogsFilter(filter));
		dispatch(setBlogsSort(sort));
		getAsyncBlogsFromApi({ currentPage, sort, filter })
			.then((res) => {
				dispatch(getAsyncBlogsSortSuccess(res.data));
			})
			.catch((error) => {
				dispatch(getAsyncBlogsFailure(error?.message));
			});
	};
};

export const getTotalAsyncCount = () => {
	return (dispatch: Dispatch<TBlogsActionTypes>) => {
		getAsyncBlogsCount()
			.then((res) => {
				dispatch(getAsyncTotalCount(res.data));
			})
			.catch((error) => {
				dispatch(getAsyncCountFailure(error?.message));
			});
	};
};
