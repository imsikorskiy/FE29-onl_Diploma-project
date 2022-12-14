export interface IAsyncBlogsResponseData {
	id?: number;
	featured?: boolean;
	title?: string;
	url?: string;
	imageUrl?: string;
	newsSite?: string;
	summary?: string;
	publishedAt?: string;
	launches?: [
		{
			id: string;
			provider: string;
		},
	];
	events?: [
		{
			id: string;
			provider: string;
		},
	];
}

export interface IGetAsyncTotalCount {
	count: number;
}

export interface ISinglePage {
	title: string;
	imageUrl: string;
	summary: string;
	url: string;
}
