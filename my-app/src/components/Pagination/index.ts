import styled from "styled-components";
import { DEVICE } from "../../constants";

interface IPageProps {
	isSelected: boolean;
}

export const Page = styled.span<IPageProps>`
	width: 100%;
	font-family: "Inter";
	font-style: normal;
	font-weight: ${(props) => (props.isSelected ? "700" : "400")};
	line-height: 24px;
	text-transform: uppercase;
	cursor: pointer;
	border: ${(props) =>
		props.isSelected ? "3px solid black" : "1px solid grey"};
	border-radius: 50%;
	text-align: center;
	color: ${(props) => (props.isSelected ? "black" : "rgba(49, 48, 55, 1)")};

	@media ${DEVICE.desktop} {
		font-size: 16px;
		max-width: 40px;
	}
	@media ${DEVICE.tablet} {
		max-width: 25px;
		font-size: 14px;
		border: none;
	}
	@media ${DEVICE.mobile} {
		max-width: 20px;
		font-size: 14px;
		border: none;
	}
`;

export const PaginationContainer = styled.div`
	box-sizing: border-box;
	width: 100%;
	display: flex;
	justify-content: space-between;

	@media ${DEVICE.desktop} {
		max-width: 600px;
	}
	@media ${DEVICE.tablet} {
		max-width: 350px;
	}
	@media ${DEVICE.mobile} {
		max-width: 150px;
	}
`;
