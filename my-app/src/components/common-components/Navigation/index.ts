import styled from "styled-components";
import { DEVICE } from "../../../constants";

export const NavWrap = styled.nav<{ open: boolean }>`
	margin-top: 20px;
	max-width: 305px;
	display: flex;
	justify-content: space-evenly;
	border-bottom: 1px solid rgba(49, 48, 55, 0.1);

	@media ${DEVICE.mobile} {
		margin-top: 0;
		width: 100%;
		height: 15vh;
		padding: 10px 0px;
		background-color: #6c1bdb;
		top: 85px;
		left: 0;
		position: absolute;
		z-index: 10;
		flex-direction: column;
		transition: transform 0.3s ease-in-out;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
		border-bottom: none;
	}
`;

export const NavWrapItem = styled.nav`
	font-family: "Inter";
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	color: #313037;
	align-items: flex-start;
	padding: 0px 40px 24px;

	:hover {
		border-bottom: 2px solid #313037;
		transition: 0.1s;
		cursor: pointer;
		color: #6c1bdb;

		@media ${DEVICE.mobile} {
			border-bottom: none;
		}
	}

	@media ${DEVICE.desktop} {
		max-width: 141px;
	}
	@media ${DEVICE.tablet} {
		max-width: 141px;
	}

	@media ${DEVICE.mobile} {
		color: white;
		max-width: 124px;
		font-size: 14px;
		margin: start;
		:hover {
			color: black;
		}
	}
`;
