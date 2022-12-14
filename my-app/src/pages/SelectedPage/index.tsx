import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ComponentsContainer from "../../components/common-components/Container";
import CustomText from "../../components/common-components/Text";
import { getSignglePosts } from "../../redux/services/BlogsServices";
import { Image } from "../../components/common-components/Image";
import { CustomLnk } from "../../components/common-components/CustomLink/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { ISinglePage } from "../../redux/Types/responseType";
import { MainTitle } from "../../components/MainTitle";

const SelectedPage = () => {
	const [singlePosts, setSiglePosts] = useState<ISinglePage>();
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			const posts = async () => {
				try {
					const response = await getSignglePosts(id);
					setSiglePosts(response.data);
				} catch (e) {
					console.error(e);
				}
			};
			posts();
		}
	}, [id]);

	return (
		<ComponentsContainer
			maxWidth="1120px"
			margin="60px auto 0"
			padding="0px 0px 10px "
		>
			<ComponentsContainer
				color="rgba(49, 48, 55, 0.5)"
				display="flex"
				justifyContent="start"
				maxWidth="100%"
				margin="0px 0px 32px"
			>
				<CustomLnk to="/mainpage" textDecoration="none">
					<CustomText
						fontsize="16px"
						lineheight="24"
						fontweight="400"
						color="#313037"
						width="153px"
						margin="start"
						cursor="pointer"
					>
						Home
					</CustomText>
				</CustomLnk>
				/{id}
			</ComponentsContainer>
			<ComponentsContainer margin="0px 0px 48px">
				<MainTitle>{singlePosts?.title}</MainTitle>
			</ComponentsContainer>
			<div>
				<Image
					height="518"
					width="100%"
					borderRadius="16px"
					src={singlePosts?.imageUrl}
					alt="image"
				/>
			</div>
			<ComponentsContainer maxWidth="920px" margin="48px auto 40px">
				<CustomText
					width="100%"
					fontsize="18"
					fontweight="400"
					lineheight="32"
					color="#313037"
					textAlignt="start"
				>
					{singlePosts?.summary}
				</CustomText>
				<ComponentsContainer
					width="276px"
					display="flex"
					justifyContent="space-between"
					margin="48px 0px 0px"
				>
					{
						<FontAwesomeIcon
							icon={faFacebook}
							size="2x"
							color="rgba(49, 48, 55, 1)"
						/>
					}
					{
						<FontAwesomeIcon
							icon={faTwitter}
							size="2x"
							color="rgba(49, 48, 55, 1)"
						/>
					}
					<a href={singlePosts?.url}>
						{
							<FontAwesomeIcon
								icon={faEllipsis}
								size="2x"
								color="rgba(49, 48, 55, 1)"
							/>
						}
					</a>
				</ComponentsContainer>
			</ComponentsContainer>
		</ComponentsContainer>
	);
};

export default SelectedPage;
