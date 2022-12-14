import styled from "styled-components";
import { DEVICE } from "../../../constants";

interface IFormProps {
	maxwidth?: string;
	maxheigth: string;
	padding: string;
	margin: string;
	flexDirection?: string;
	width?: string;
}

export const Form = styled.form<IFormProps>`
	box-sizing: border-box;
	width: ${(props) => props.width};
	border-radius: 16px;
	display: flex;
	flex-direction: ${(props) => props.flexDirection || "column"};
	box-sizing: border-box;
	max-width: ${(props) => props.maxwidth};
	max-height: ${(props) => props.maxheigth}px;
	padding: ${(props) => props.padding}px;
	margin: ${(props) => props.margin};

	@media ${DEVICE.desktop} {
		max-width: 648px;
	}

	@media ${DEVICE.mobile} {
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	}
`;

export const FormLabel = styled.label`
	font-size: 16px;
	font-family: "Inter";
	font-weight: 600;
	line-height: 20px;
	color: #313037;
	display: flex;
	flex-direction: column;
	width: 100%;
	font-weight: 600;
	margin-bottom: 24px;
`;
