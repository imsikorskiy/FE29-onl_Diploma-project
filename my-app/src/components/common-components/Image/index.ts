import styled from "styled-components";
import { DEVICE } from "../../../constants";

interface IImage {
	height?: string;
	width?: string;
	borderRadius?: string;
	objectFit?: string;
}

export const Image = styled.img<IImage>`
	height: ${(props) => props.height || "208"}px;
	width: ${(props) => props.width};
	border-radius: ${(props) => props.borderRadius || "0px"};
	object-fit: ${(props) => props.objectFit || "cover"};
	z-index: 1;

	@media ${DEVICE.desktop} {
		max-width: 1120px;
		max-height: 518px;
	}

	@media ${DEVICE.tablet} {
		max-width: 688px;
		max-height: 359px;
	}

	@media ${DEVICE.mobile} {
		max-width: 272px;
		max-height:224px;
	}
`;
