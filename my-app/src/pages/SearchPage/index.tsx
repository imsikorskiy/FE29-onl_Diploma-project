import React, { useCallback } from "react";
import ComponentsContainer from "../../components/common-components/Container";
import CustomText from "../../components/common-components/Text";
import {
	AppDispatch,
	useAppDispatch,
	useAppSelector,
} from "../../redux/hooks/index";
import {
	blogSelectors,
	currentPageSelector,
	filterBlogSelector,
	isLoadingSelector,
	sortBlogSelector,
	totalCountSelector,
} from "../../redux/selectors/blogsSelector/index";
import List from "../../components/common-components/UserList/List";
import Loader from "../../components/common-components/Loader/Loader";
import { CustomLnk } from "../../components/common-components/CustomLink";
import { MainTitle } from "../../components/MainTitle";
import { PAGE_SIZE, SIBLING_COUNT } from "../../constants";
import { usePagination } from "../../components/Pagination/createPagesFUnc";
import { getAsyncBlogs } from "../../redux/action/blogsActionCreators";
import { useDispatch } from "react-redux";
import Button from "../../components/common-components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Page, PaginationContainer } from "../../components/Pagination";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Searchpage = () => {
	const searchBlogsResult = useAppSelector(blogSelectors);
	const isLoading = useAppSelector(isLoadingSelector);
	const filter = useAppSelector(filterBlogSelector);
	const currentPage: number = useAppSelector(currentPageSelector);
	const totalCount = useAppSelector(totalCountSelector);
	const sort = useAppSelector(sortBlogSelector);
	const dispatch: AppDispatch = useDispatch;

	const pagination = usePagination({
		currentPage,
		PAGE_SIZE,
		SIBLING_COUNT,
		totalCount,
	});

	const onPageChange = useCallback(
		async (currentPage: number) => {
			dispatch(getAsyncBlogs(currentPage, filter, sort));
		},
		[dispatch, currentPage, filter],
	);

	return (
		<ComponentsContainer
			maxWidth="1120px"
			margin="60px auto 0"
			padding="0px 0px 10px "
		>
			<ComponentsContainer maxWidth="100%" margin="0px 0px 64px">
				<ComponentsContainer width="100px">
					<CustomLnk to="/mainpage" textDecoration="none">
						<CustomText
							fontfamily="Inter"
							fontweight="400"
							fontsize="16"
							color="#313037"
							lineheight="24"
							cursor="pointer"
						>
							← Back to home
						</CustomText>
					</CustomLnk>
				</ComponentsContainer>
				<MainTitle>Search results: "{filter}"</MainTitle>
			</ComponentsContainer>

			<ComponentsContainer>
				{isLoading ? <Loader /> : <List items={searchBlogsResult} />}
				<ComponentsContainer display="flex" justifyContent="center" gap="10px">
					<Button
						disabled={currentPage <= 1}
						onClick={() => onPageChange(currentPage - 1)}
						background="none"
						border="none"
						color="#313037"
						fontFamily="Inter"
						fontSize="16"
						fontWeight="600"
					>
						<FontAwesomeIcon icon={faArrowLeft} /> Prev
					</Button>
					<PaginationContainer>
						{pagination!.map((page) => {
							return (
								<Page
									key={page}
									isSelected={page === currentPage}
									onClick={() => onPageChange(page as number)}
								>
									{page}
								</Page>
							);
						})}
					</PaginationContainer>
					<Button
						disabled={currentPage >= totalCount}
						onClick={() => onPageChange(currentPage + 1)}
						background="none"
						color="#313037"
						fontFamily="Inter"
						border="none"
						fontSize="16"
						fontWeight="600"
					>
						Next <FontAwesomeIcon icon={faArrowRight} />
					</Button>
				</ComponentsContainer>
			</ComponentsContainer>
		</ComponentsContainer>
	);
};

export default Searchpage;
