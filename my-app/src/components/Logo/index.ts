import { DEVICE } from "./../../constants/index";
import styled from "styled-components";

export const Logo = styled.img`
	@media ${DEVICE.tablet} {
		max-width: 150px;
	}

	@media ${DEVICE.mobile} {
		max-width: 133px;
	}
`;
