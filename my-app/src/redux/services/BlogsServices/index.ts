import { IAsyncBlogsResponseData, ISinglePage } from "../../Types/responseType";
import { axiosContent } from "../../../components/API";

export const getAsyncBlogsFromApi = ({
	currentPage = 1,
	limit = 12,
	sort = "id",
	filter = "",
}: {
	currentPage?: number | string;
	limit?: number;
	sort?: string;
	filter?: string;
}) => {
	return axiosContent.get<IAsyncBlogsResponseData[]>(
		`/v3/articles?_limit=${limit}&_start=${
			limit * ((currentPage as number) - 1)
		}&_sort=${sort}&_title_contains=${filter}`,
	);
};

export const getAsyncBlogsCount = () => {
	return axiosContent.get<number>(`/v3/articles/count`);
};

export const getSignglePosts = async (id: string) => {
	return axiosContent.get<ISinglePage>(`/v3/articles/${id}`);
};
