import { range } from "./../../../utils/index";
import { useMemo } from "react";

interface IPagination {
	totalCount: number;
	PAGE_SIZE: number;
	SIBLING_COUNT: number;
	currentPage: number;
}

const DOTS: string = "...";

export const usePagination = ({
	totalCount,
	PAGE_SIZE,
	SIBLING_COUNT,
	currentPage,
}: IPagination) => {
	const paginationRange = useMemo(() => {
		const totalPageCount = Math.ceil(totalCount / PAGE_SIZE);

		const totalPageNumbers = SIBLING_COUNT + 5;

		if (totalPageNumbers >= totalPageCount) {
			return range(1, totalPageCount);
		}

		const leftSiblingIndex = Math.max(currentPage - SIBLING_COUNT, 1);
		const rightSiblingIndex = Math.min(
			currentPage + SIBLING_COUNT,
			totalPageCount,
		);

		const shouldShowLeftDots = leftSiblingIndex > 2;
		const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

		const firstPageIndex = 1;
		const lastPageIndex = totalPageCount;

		if (!shouldShowLeftDots && shouldShowRightDots) {
			let leftItemCount = 3 + 2 * SIBLING_COUNT;
			let leftRange = range(1, leftItemCount);

			return [...leftRange, DOTS, totalPageCount];
		}

		if (shouldShowLeftDots && !shouldShowRightDots) {
			let rightItemCount = 3 + 2 * SIBLING_COUNT;
			let rightRange = range(
				totalPageCount - rightItemCount + 1,
				totalPageCount,
			);
			return [firstPageIndex, DOTS, ...rightRange];
		}

		if (shouldShowLeftDots && shouldShowRightDots) {
			let middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
		}
	}, [totalCount, PAGE_SIZE, SIBLING_COUNT, currentPage]);

	return paginationRange;
};
