import {
	GET_ASYNC_TOTAL_COUNT_NEWS_FAILURE,
	GET_NEWS_SORT_SUCCESS,
	SET_NEWS_SORT,
} from "./../../action/index";
import {
	GET_ASYNC_NEWS_START,
	GET_ASYNC_NEWS_SUCCESS,
	GET_ASYNC_NEWS_FAILURE,
} from "../../action";
import { IAsyncBlogsResponseData } from "../responseType";
import {
	SET_CURRENT_NEWS_PAGE,
	GET_ASYNC_TOTAL_COUNT_NEWS,
} from "../../action/index";

export type TNewsActionTypes =
	| IGetAsyncBlogsStartAction
	| IGetAsyncBlogsSuccessAction
	| IGetAsyncBlogsFailureAction
	| ISetCurrentNewsPageAction
	| IGetAsyncTotalCountNews
	| IGetAsyncNewsCountFailureAction
	| ISetBlogSort
	| IGetBlogWithSort;

interface IGetAsyncBlogsStartAction {
	type: typeof GET_ASYNC_NEWS_START;
	payload: IAsyncBlogsResponseData;
}

interface IGetAsyncBlogsSuccessAction {
	type: typeof GET_ASYNC_NEWS_SUCCESS;
	payload: IAsyncBlogsResponseData[];
}

interface IGetAsyncBlogsFailureAction {
	type: typeof GET_ASYNC_NEWS_FAILURE;
	payload: string;
}

interface IGetAsyncNewsCountFailureAction {
	type: typeof GET_ASYNC_TOTAL_COUNT_NEWS_FAILURE;
	payload: string;
}

export interface ISetCurrentNewsPageAction {
	type: typeof SET_CURRENT_NEWS_PAGE;
	payload: number;
}

interface IGetAsyncTotalCountNews {
	type: typeof GET_ASYNC_TOTAL_COUNT_NEWS;
	payload: number;
}

interface ISetBlogSort {
	type: typeof SET_NEWS_SORT;
	payload: string;
}

interface IGetBlogWithSort {
	type: typeof GET_NEWS_SORT_SUCCESS;
	payload: string;
}
