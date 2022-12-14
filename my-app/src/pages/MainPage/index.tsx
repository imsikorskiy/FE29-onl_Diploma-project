import React, { useState } from "react";
import BlogPosts from "../../components/BlogPosts/index";
import { CustomLnk } from "../../components/common-components/CustomLink";
import ComponentsContainer from "../../components/common-components/Container";
import {
	NavWrap,
	NavWrapItem,
} from "../../components/common-components/Navigation";
import { MainTitle } from "../../components/MainTitle";
import useWindowSize from "../../redux/hooks";

const MainPage = () => {
	const [open, setOpen] = useState<boolean>(false);
	const size = useWindowSize();

	return (
		<ComponentsContainer
			width="100%"
			margin="72px auto 0"
			padding="0px 0px 10px "
		>
			<ComponentsContainer width="100%" margin="0px 0px 64px">
				<div>
					<MainTitle>Articles</MainTitle>
				</div>
				{size.width > 321 && (
					<NavWrap open={open}>
						<CustomLnk textDecoration="none" to="/MainPage">
							<NavWrapItem>Articles</NavWrapItem>
						</CustomLnk>
						<CustomLnk textDecoration="none" to="/newspage">
							<NavWrapItem>News</NavWrapItem>
						</CustomLnk>
					</NavWrap>
				)}
			</ComponentsContainer>
			<div>
				<BlogPosts />
			</div>
		</ComponentsContainer>
	);
};
export default MainPage;
