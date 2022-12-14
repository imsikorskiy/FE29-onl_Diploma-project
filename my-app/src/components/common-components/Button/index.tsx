import React from "react";
import styled from "styled-components";
import { DEVICE } from "../../../constants";

interface IButtonProps extends IButtonVisualProps {
	children: React.ReactNode;
	disabled?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	active?: boolean;
	className?: string;
	type?: "submit" | "button" | "reset";
}

interface IButtonVisualProps {
	width?: string;
	height?: string;
	margin?: string;
	background?: string;
	color?: string;
	fontSize?: string;
	fontWeight?: string;
	lineheight?: string;
	fontFamily?: string;
	padding?: string;
	border?: string;
	borderRadius?: string;
}

export const Btn = styled.button<IButtonVisualProps>`
	display: block;
	width: ${(p) => p.width || "150px"};
	margin: ${(p) => p.margin || "start"};
	padding: ${(p) => p.padding || "0"};
	height: ${(p) => p.height || "50"}px;
	background: ${(p) => p.background || "none"};
	font-size: ${(p) => p.fontSize || "16"}px;
	font-weight: ${(p) => p.fontWeight || "400"};
	color: ${(p) => p.color || "#313037"};
	line-height: ${(p) => p.lineheight || "18"}px;
	font-family: ${(p) => p.fontFamily || "Inter"};
	border: ${(props) => props.border || "none"};
	border-radius: ${(props) => props.borderRadius || "4"}px;
	cursor: pointer;

	:disabled {
		:hover {
			color: red;
			background-color: lightgray;
		}
	}

	@media ${DEVICE.desktop} {
		:hover {
			color: black;
		}
	}

	@media ${DEVICE.tablet} {
		font-size: 14px;
	}

	@media ${DEVICE.mobile} {
		font-size: 14px;

		margin: left;
		:hover {
			color: black;
		}
	}
`;

const Button = ({
	children,
	disabled,
	onClick = () => {},
	className,
	type,
	height,
	width,
	background,
	margin,
	color,
	fontSize,
	fontWeight,
	lineheight,
	fontFamily,
	padding,
	border,
	borderRadius,
}: IButtonProps) => {
	return (
		<Btn
			disabled={disabled}
			onClick={onClick}
			className={className}
			type={type}
			width={width}
			height={height}
			background={background}
			margin={margin}
			color={color}
			fontSize={fontSize}
			fontWeight={fontWeight}
			fontFamily={fontFamily}
			lineheight={lineheight}
			padding={padding}
			border={border}
			borderRadius={borderRadius}
		>
			{children}
		</Btn>
	);
};

export default React.memo(Button);
