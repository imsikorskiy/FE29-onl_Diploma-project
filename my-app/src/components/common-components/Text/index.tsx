import React from "react";
import styled from "styled-components";
import { DEVICE } from "../../../constants";

interface ICustomText {
	fontfamily?: string;
	fontstyle?: string;
	fontsize?: string;
	lineheight?: string;
	textAlignt?: string;
	verticalAlign?: string;
	letterspacing?: string;
	alignItems?: string;
	color?: string;
	fontweight?: string;
	width?: string;
	cursor?: string;
	margin?: string;
}

const Text = styled.p<ICustomText>`
	display: block;
	font-family: ${(props) => props.fontfamily || "Inter"};
	font-style: ${(props) => props.fontstyle || "normal"};
	font-size: ${(props) => props.fontsize || 16}px;
	line-height: ${(props) => props.lineheight || 18}px;
	text-align: ${(props) => props.textAlignt || "center"};
	letter-spacing: ${(props) => props.letterspacing};
	align-items: ${(props) => props.alignItems || "center"};
	color: ${(props) => props.color || "black"};
	font-weight: ${(props) => props.fontweight || "400"};
	max-width: ${(props) => props.width || "auto"};
	cursor: ${(props) => props.cursor || "default"};
	margin-block-start: 0px;
	margin-block-end: 0px;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
	margin: ${(props) => props.margin || "auto"};
`;

interface IText extends ICustomText {
	children?: React.ReactNode;
}

const CustomText = ({
	children,
	fontfamily,
	fontsize,
	fontstyle,
	lineheight,
	textAlignt,
	verticalAlign,
	letterspacing,
	color,
	alignItems,
	fontweight,
	width,
	cursor,
	margin,
}: IText) => {
	return (
		<Text
			fontfamily={fontfamily}
			fontsize={fontsize}
			fontstyle={fontstyle}
			lineheight={lineheight}
			textAlignt={textAlignt}
			verticalAlign={verticalAlign}
			letterspacing={letterspacing}
			color={color}
			alignItems={alignItems}
			fontweight={fontweight}
			width={width}
			cursor={cursor}
			margin={margin}
		>
			{children}
		</Text>
	);
};

export default CustomText;
