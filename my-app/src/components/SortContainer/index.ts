import styled from "styled-components";
import { DEVICE } from "../../constants";

export const SortItem = styled.div`
	text-align: center;
	list-style-type: none;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	background: rgba(49, 48, 55, 0.1);
	border-radius: 4px;
	padding: 16px 40px;
	gap: 4px;
	color: #313037;
	:hover {
		background: rgba(108, 27, 219, 1);
		color: #ffffff;
	}
`;

export const SortContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	gap: 5px;

	@media ${DEVICE.desktop} {
		max-width: 535px;
	}
`;

export const SortWrapper = styled.div`
	gap: 5px;
	width: 100%;
	display: flex;
	justify-content: space-between;

	@media ${DEVICE.desktop} {
		max-width: 1120px;
	}

	@media ${DEVICE.tablet} {
		max-width: 688px;
	}

	@media ${DEVICE.mobile} {
		flex-direction: column;
		max-width: 272px;
	}
`;
