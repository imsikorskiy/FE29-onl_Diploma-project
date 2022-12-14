import React, { FocusEvent } from "react";
import styled from "styled-components";

export interface iInputprops extends IInputForm {
	type?: string;
	name?: string;
	placeholder?: string;
	className?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	field?: string;
	fieldName?: string;
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

interface IInputForm {
	width?: string;
	height?: string;
	margin?: string;
	border?: string;
}

export const InputForm = styled.input<iInputprops>`
	width: ${(props) => props.width || "auto"};
	height: ${(props) => props.height || "50px"};
	margin: ${(props) => props.margin || "start"};
	border: ${(props) => props.border || "none"};
	padding-left: 20px;
	font-size: 16px;
	line-height: 20px;
	font-weight: 400px;
	border-radius: 4px;
	outline: none;
	::placeholder {
		padding: 18px 20px;
		font-size: 16px;
		color: rgba(49, 48, 55, 0.5);
		line-height: 20px;
		font-weight: 400px;
	}
`;

const Input = ({
	fieldName,
	value,
	onChange,
	type,
	name,
	placeholder,
	className,
	margin,
	width,
	height,
	border,
	onBlur,
}: iInputprops) => {
	return (
		<InputForm
			value={value}
			type={type}
			name={name}
			placeholder={placeholder}
			onChange={onChange}
			className={className}
			id={fieldName}
			margin={margin}
			height={height}
			width={width}
			border={border}
			onBlur={onBlur}
		/>
	);
};

export default React.memo(Input);
