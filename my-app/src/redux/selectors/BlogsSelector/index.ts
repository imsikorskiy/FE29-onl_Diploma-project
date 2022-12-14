import { RootState } from "../../store";

export const blogSelectors = (state: RootState) => state.blogs.blogs;
export const isLoadingSelector = (state: RootState) => state.blogs.isLoading;
export const errorSelector = (state: RootState) => state.blogs.error;
export const currentPageSelector = (state: RootState) =>
	state.blogs.currentPage;
export const totalCountSelector = (state: RootState) => state.blogs.totalCount;
export const filterBlogSelector = (state: RootState) => state.blogs.filter;
export const sortBlogSelector = (state: RootState) => state.blogs.sort;
