import React from "react";
import ListItem from "./ListItem/index";
import styled from "styled-components";
import CustomText from "../../Text";
import { CustomLnk } from "../../CustomLink/index";
import { IAsyncBlogsResponseData } from "../../../../redux/Types/responseType";
import { DEVICE } from "../../../../constants";

interface IListProps {
	items: IAsyncBlogsResponseData[];
}

export const UlList = styled.ul`
	justify-content: space-between;
	width: 100%;
	flex-direction: row;
	display: flex;
	flex-wrap: wrap;
	padding-inline-start: 0px;
`;

export const CardImageContainer = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	::before {
		content: "";
		width: 100%;
		height: 100%;
		background: linear-gradient(
			133.87deg,
			rgba(77, 10, 199, 0.6) -10.18%,
			rgba(145, 46, 242, 0.6) 108.59%
		);
		display: block;
		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 2;
		opacity: 1;
	}
	:hover {
		::before {
			opacity: 0;
		}
	}

	@media ${DEVICE.desktop} {
		width: 352px;
	}

	@media ${DEVICE.tablet} {
		max-width: 328px;
	}

	@media ${DEVICE.mobile} {
		max-width: 272px;
	}
`;

const CardImage = styled.img`
	width: 100%;
	height: 208px;
	object-fit: cover;
	z-index: 1;
`;

interface ICardTextContainer {
	maxWidth?: string;
	display?: string;
	margin?: string;
	padding?: string;
	justifyContent?: string;
	alignItems?: string;
	width?: string;
	fontSize?: string;
	color?: string;
	background?: string;
	borderRadius?: string;
}

export const CardTextContainer = styled.div<ICardTextContainer>`
	border-radius: ${(props) => props.borderRadius || "0px"};
	background: ${(props) => props.background || "none"};
	font-size: ${(props) => props.fontSize || "16px"};
	color: ${(props) => props.color || "black"};
	width: ${(props) => props.width || "100%"};
	max-width: ${(props) => props.maxWidth || "100%"};
	display: ${(props) => props.display || "block"};
	margin: ${(props) => props.margin || "0"};
	padding: ${(props) => props.padding || 0};
	justify-content: ${(props) => props.justifyContent || "space-between"};
	align-items: ${(props) => props.alignItems || "center"};
	box-sizing: border-box;

	@media ${DEVICE.desktop} {
		max-width: 287px;
		padding: 32px;
	}

	@media ${DEVICE.tablet} {
		max-width: 261px;
		padding: 33px;
	}
	@media ${DEVICE.mobile} {
		max-width: 224px;
		padding: 24px;
	}
`;

const List = ({ items }: IListProps) => {
	return (
		<UlList>
			{items.map((item) => {
				return (
					<ListItem key={item.id}>
						<CardImageContainer>
							<CardImage src={item.imageUrl} alt="" />
						</CardImageContainer>
						<CardTextContainer margin="auto">
							<CustomText
								fontfamily="Inter"
								fontstyle="normal"
								fontweight="500"
								fontsize="16"
								lineheight="24"
								alignItems="center"
								color="rgba(49, 48, 55, 0.5)"
								width="123"
								textAlignt="start"
								margin="0px 0px 8px"
							>
								{item.publishedAt}
							</CustomText>
							<CustomLnk to={`/selectedpage/${item.id}`}>
								<CustomText
									fontfamily="Inter"
									fontstyle="normal"
									fontweight="600"
									fontsize="18"
									lineheight="28"
									alignItems="center"
									color="#313037"
									textAlignt="start"
								>
									{item.title}
								</CustomText>
							</CustomLnk>
						</CardTextContainer>
					</ListItem>
				);
			})}
		</UlList>
	);
};

export default React.memo(List);
