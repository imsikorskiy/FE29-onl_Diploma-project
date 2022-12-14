import {
	GET_ASYNC_TOTAL_COUNT_FAILURE,
	GET_BLOG_SORT_SUCCESS,
	SET_BLOG_FILTER,
	SET_SORT,
} from "./../../action/index";
import {
	GET_ASYNC_BLOGS_START,
	GET_ASYNC_BLOGS_SUCCESS,
	GET_ASYNC_BLOGS_FAILURE,
	SET_CURRENT_PAGE,
} from "../../action";
import { IAsyncBlogsResponseData } from "../responseType";
import {
	GET_ASYNC_TOTAL_COUNT,
	GET_ASYNC_SEARCH_BLOGS_START,
	GET_ASYNC_BLOGS_SEARCH_SUCCESS,
	GET_ASYNC_BLOGS_SEARCH_FAILURE,
} from "../../action/index";

export type TBlogsActionTypes =
	| IGetAsyncBlogsStartAction
	| IGetAsyncBlogsSuccessAction
	| IGetAsyncBlogsFailureAction
	| ISetCurrentPageAction
	| IGetAsyncTotalCount
	| IGetAsyncBlogsSearchStartAction
	| IGetAsyncBlogsSearchSuccessAction
	| IGetAsyncBlogsSearchFailureAction
	| IGetAsyncBlogsCountFailureAction
	| IGetBLogWithFilter
	| ISetBLogFIlter
	| ISetBlogSort
	| IGetBlogWithSort;

interface IGetAsyncBlogsStartAction {
	type: typeof GET_ASYNC_BLOGS_START;
	payload: IAsyncBlogsResponseData;
}

interface IGetAsyncBlogsSearchStartAction {
	type: typeof GET_ASYNC_SEARCH_BLOGS_START;
	payload: IAsyncBlogsResponseData;
}

interface IGetAsyncBlogsSuccessAction {
	type: typeof GET_ASYNC_BLOGS_SUCCESS;
	payload: IAsyncBlogsResponseData[];
}

interface IGetAsyncBlogsSearchSuccessAction {
	type: typeof GET_ASYNC_BLOGS_SEARCH_SUCCESS;
	payload: IAsyncBlogsResponseData[];
}

interface IGetAsyncBlogsFailureAction {
	type: typeof GET_ASYNC_BLOGS_FAILURE;
	payload: string;
}

interface IGetAsyncBlogsSearchFailureAction {
	type: typeof GET_ASYNC_BLOGS_SEARCH_FAILURE;
	payload: string;
}

export interface ISetCurrentPageAction {
	type: typeof SET_CURRENT_PAGE;
	payload: number;
}

interface IGetAsyncTotalCount {
	type: typeof GET_ASYNC_TOTAL_COUNT;
	payload: number;
}

interface IGetAsyncBlogsCountFailureAction {
	type: typeof GET_ASYNC_TOTAL_COUNT_FAILURE;
	payload: string;
}

interface IGetBLogWithFilter {
	type: typeof GET_ASYNC_BLOGS_SEARCH_SUCCESS;
	payload: string;
}

interface ISetBLogFIlter {
	type: typeof SET_BLOG_FILTER;
	payload: string;
}

interface ISetBlogSort {
	type: typeof SET_SORT;
	payload: string;
}

interface IGetBlogWithSort {
	type: typeof GET_BLOG_SORT_SUCCESS;
	payload: string;
}
