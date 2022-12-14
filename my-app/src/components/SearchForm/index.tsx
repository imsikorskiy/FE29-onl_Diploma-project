import React, { useCallback, useState } from "react";
import Button from "../common-components/Button";
import ComponentsContainer from "../common-components/Container";
import { CustomLnk } from "../common-components/CustomLink";
import { Form } from "../common-components/Form";
import Input from "../common-components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../../redux/hooks";
import { getAsyncBlogs } from "../../redux/action/blogsActionCreators";
import { currentPageSelector } from "../../redux/selectors/blogsSelector";

const initialSearchValue = {
	searchText: "",
};

const SearchForm = () => {
	const [searchForm, setSearchForm] = useState(initialSearchValue);
	const dispatch: AppDispatch = useDispatch();
	const currentPage: number = useAppSelector(currentPageSelector);
	const onBtnSearch = useCallback(async () => {
		dispatch(getAsyncBlogs(currentPage, searchForm.searchText));
	}, [dispatch, currentPage, searchForm.searchText]);

	const handleSearchChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) =>
			setSearchForm((prevState) => ({
				...prevState,
				[e.target.id]: e.target.value,
			})),
		[],
	);

	return (
		<Form
			width="100%"
			maxheigth="100"
			padding="0"
			margin="auto"
			flexDirection="row"
		>
			<Input
				fieldName="searchText"
				border="none"
				margin="auto"
				width="100%"
				value={searchForm.searchText}
				onChange={handleSearchChange}
				height="56px"
				type="text"
			/>
			<ComponentsContainer width="20px" alignItems="center" display="flex">
				<CustomLnk to="/searchpage" textDecoration="none">
					<Button
						width="100%"
						type="submit"
						onClick={onBtnSearch}
						background="none"
						border="none"
					>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</Button>
				</CustomLnk>
			</ComponentsContainer>
		</Form>
	);
};

export default React.memo(SearchForm);
