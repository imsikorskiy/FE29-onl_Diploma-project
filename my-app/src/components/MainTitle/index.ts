import styled from "styled-components";
import { DEVICE } from "../../constants";

export const MainTitle = styled.p`
	font-weight: 700;
	font-size: 56px;
	line-height: 80px;
	color: #313037;
	align-items: center;
	width: 100%;
	margin-block-start: 0px;
	margin-block-end: 0px;

	@media ${DEVICE.mobile} {
		font-size: 32px;
		line-height: 48px;
	}
`;
