import React from "react";
import styled from "styled-components";

interface IWarningTextProps extends IWarningText {
	children:React.ReactNode;
}

interface IWarningText {
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

const CustomWarningText = styled.p<IWarningText>`
	display: block;
	font-family: ${(props) => props.fontfamily || "Inter"};
	font-style: ${(props) => props.fontstyle || "normal"};
	font-size: ${(props) => props.fontsize || 16}px;
	line-height: ${(props) => props.lineheight || 18}px;
	text-align: ${(props) => props.textAlignt || "center"};
	letter-spacing: ${(props) => props.letterspacing};
	align-items: ${(props) => props.alignItems || "center"};
	color: ${(props) => props.color || "red"};
	font-weight: ${(props) => props.fontweight || "400"};
	max-width: ${(props) => props.width || "auto"};
	cursor: ${(props) => props.cursor || "default"};
	margin-block-start: 0px;
	margin-block-end: 0px;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
	margin: ${(props) => props.margin || "auto"};
`;

const WarningText = ({
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
}: IWarningTextProps) => {
	return (
		<CustomWarningText
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
		</CustomWarningText>
	);
};

export default WarningText;
