import React, { useState } from "react";
import { CustomLnk } from "../../components/common-components/CustomLink";
import ComponentsContainer from "../../components/common-components/Container";
import {
	NavWrap,
	NavWrapItem,
} from "../../components/common-components/Navigation";
import NewsPost from "../../components/NewsPost";
import { MainTitle } from "../../components/MainTitle";

export const NewsPage = () => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<ComponentsContainer
			maxWidth="1120px"
			margin="60px auto 0"
			padding="0px 0px 10px "
		>
			<ComponentsContainer maxWidth="100%" margin="0px 0px 64px">
				<div>
					<MainTitle>News</MainTitle>
				</div>
				<NavWrap open={open}>
					<CustomLnk textDecoration="none" to="/MainPage">
						<NavWrapItem>Articles</NavWrapItem>
					</CustomLnk>
					<NavWrapItem>News</NavWrapItem>
				</NavWrap>
			</ComponentsContainer>
			<div>
				<NewsPost />
			</div>
		</ComponentsContainer>
	);
};

export default NewsPage;
