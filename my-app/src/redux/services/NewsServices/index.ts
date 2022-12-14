import { IAsyncBlogsResponseData } from "../../Types/responseType";
import { axiosContent } from "../../../components/API";

export const getAsyncNewsFromApi = ({
	currentPage = 1,
	limit = 12,
	sort = "id",
}: {
	currentPage?: number | string;
	limit?: number;
	sort?: string;
}) => {
	return axiosContent.get<IAsyncBlogsResponseData[]>(
		`/v3/blogs?_limit=${limit}&_start=${
			limit * ((currentPage as number) - 1)
		}&_sort=${sort}`,
	);
};

export const getAsyncNewsCount = () => {
	return axiosContent.get<number>(`/v3/blogs/count`);
};
