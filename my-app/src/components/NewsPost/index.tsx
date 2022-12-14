import React, { useEffect, useCallback } from "react";
import Loader from "../common-components/Loader/Loader";
import List from "../common-components/UserList/List";
import { useDispatch } from "react-redux";
import useWindowSize, { useAppSelector } from "../../redux/hooks/index";
import {
	newsSelectors,
	isLoadingNewsSelector,
	errorNewsSelector,
	currentPageSelector,
	totalCountSelector,
	sortNewsSelector,
} from "../../redux/selectors/newsSelector";
import {
	getAsyncNews,
	getTotalAsyncNewsCount,
} from "../../redux/action/newsActionCreators/index";
import WarningText from "../common-components/warningText";
import ComponentsContainer from "../common-components/Container";
import Button from "../common-components/Button";
import { Page, PaginationContainer } from "../Pagination";
import { AppDispatch } from "../../redux/hooks/index";
import { usePagination } from "../Pagination/createPagesFUnc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
	OPTION,
	PAGE_SIZE,
	SIBLING_COUNT,
	SORT_ITEM_ARR,
	SORT_OPTION,
} from "../../constants";
import { SortContainer, SortWrapper, SortItem } from "../SortContainer";
import Select from "../Select";

const NewsPosts = () => {
	const dispatch: AppDispatch = useDispatch();
	const news = useAppSelector(newsSelectors);
	const isLoading = useAppSelector(isLoadingNewsSelector);
	const errorMessage = useAppSelector(errorNewsSelector);
	const currentPage: number = useAppSelector(currentPageSelector);
	const totalCount = useAppSelector(totalCountSelector);
	const sort = useAppSelector(sortNewsSelector);
	const size = useWindowSize();

	const totalPageCount = Math.ceil(totalCount / PAGE_SIZE);

	const pagination = usePagination({
		currentPage,
		PAGE_SIZE,
		SIBLING_COUNT,
		totalCount,
	});

	useEffect(() => {
		dispatch(getTotalAsyncNewsCount());
		dispatch(getAsyncNews(currentPage, sort));
	}, []);

	const onPageChange = useCallback(
		async (currentPage: number) => {
			dispatch(getAsyncNews(currentPage, sort));
		},
		[currentPage, dispatch, sort],
	);

	const onSortItemChange = useCallback(
		async (e: React.ChangeEvent<HTMLSelectElement>) => {
			dispatch(getAsyncNews(currentPage, e.target.value));
		},
		[dispatch, currentPage],
	);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<SortWrapper>
						{size.width > 768 ? (
							<SortContainer>
								{SORT_ITEM_ARR.map((item) => {
									return <SortItem key={item}>{item}</SortItem>;
								})}
							</SortContainer>
						) : (
							<Select option={SORT_OPTION} />
						)}
						<Select option={OPTION} value={sort} onChange={onSortItemChange} />
					</SortWrapper>
					{errorMessage && <WarningText>{errorMessage}</WarningText>}
					<List items={news} />
					<ComponentsContainer
						width="100%"
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
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
							disabled={currentPage >= totalPageCount}
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
				</>
			)}
		</>
	);
};

export default React.memo(NewsPosts);
