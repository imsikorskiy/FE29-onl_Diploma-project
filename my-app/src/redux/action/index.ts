// blogs async action
export const GET_ASYNC_BLOGS_START = "GET_ASYNC_BLOGS_START" as const;
export const GET_ASYNC_BLOGS_SUCCESS = "GET_ASYNC_BLOGS_SUCCESS" as const;
export const GET_ASYNC_BLOGS_FAILURE = "GET_ASYNC_BLOGS_FAILURE" as const;

//  search action
export const GET_ASYNC_SEARCH_BLOGS_START =
	"GET_ASYNC_SEARCH_BLOGS_START" as const;
export const GET_ASYNC_BLOGS_SEARCH_SUCCESS =
	"GET_ASYNC_BLOGS_SEARCH_SUCCESS" as const;
export const GET_ASYNC_BLOGS_SEARCH_FAILURE =
	"GET_ASYNC_BLOGS_SEARCH_FAILURE" as const;
export const SET_BLOG_FILTER = "SET_BLOG_FILTER" as const;
// sort
export const SET_SORT = "SET_SORT" as const;
export const GET_BLOG_SORT_SUCCESS = "GET_BLOG_SORT_SUCCESS" as const;
export const SET_NEWS_SORT = "SET_SORT" as const;
export const GET_NEWS_SORT_SUCCESS = "GET_BLOG_SORT_SUCCESS" as const;
// news async action
export const GET_ASYNC_NEWS_START = "GET_ASYNC_NEWS_START" as const;
export const GET_ASYNC_NEWS_SUCCESS = "GET_ASYNC_NEWS_SUCCESS" as const;
export const GET_ASYNC_NEWS_FAILURE = "GET_ASYNC_NEWS_FAILURE" as const;

// count blog
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE" as const;
export const GET_ASYNC_TOTAL_COUNT = "GET_ASYNC_TOTAL_COUNT" as const;
export const GET_ASYNC_TOTAL_COUNT_FAILURE =
	"GET_ASYNC_TOTAL_COUNT_FAILURE" as const;

// count news
export const SET_CURRENT_NEWS_PAGE = "SET_CURRENT_NEWS_PAGE" as const;
export const GET_ASYNC_TOTAL_COUNT_NEWS = "GET_ASYNC_TOTAL_COUNT_NEWS" as const;
export const GET_ASYNC_TOTAL_COUNT_NEWS_FAILURE =
	"GET_ASYNC_TOTAL_COUNT_NEWS_FAILURE" as const;

// auth
export const AUTH_LOADING = "AUTH_LOADING" as const;
export const SET_LOGIN_DATA_START = "SET_LOGIN_DATA_START" as const;
export const GET_LOGIN_DATA_SUCCESS = "GET_LOGIN_DATA_SUCCESS" as const;
export const GET_LOGIN_DATA_FAILURE = "GET_LOGIN_DATA_FAILURE" as const;
export const LOGOUT = "LOGOUT" as const;
