import React from "react";
import styled from "styled-components";
import { DEVICE } from "../../../constants";

interface ICustomComponentsContainer {
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
	gap?: string;
}

export const ComponentsContainer = styled.div<ICustomComponentsContainer>`
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
	gap: ${(props) => props.gap};

	@media ${DEVICE.desktop} {
		max-width: 1120px;
	}

	@media ${DEVICE.tablet} {
		max-width: 686px;
	}
	@media ${DEVICE.mobile} {
		max-width: 272px;
	}
`;

export default ComponentsContainer;
