import React from "react";
import styled from "styled-components";
import { DEVICE, SELECT_BACKGROUND_URL } from "../../constants";

interface ISelectProps {
	option: { label: string; value: string }[];
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Options = styled.option`
	font-size: 16px;
	font-family: "Inter";
	color: #313037;
`;

const CustomSelect = styled.select`
	display: block;
	font-size: 16px;
	font-family: sans-serif;
	font-weight: 500;
	color: #444;
	line-height: 24px;
	padding: 16px;
	width: 100%;
	box-sizing: border-box;
	margin: 0;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px "rgba(49, 48, 55, 1)";
	border-radius: 8px;
	appearance: none;
	background-color: #fff;
	background-image: url(${SELECT_BACKGROUND_URL}),
		linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
	background-repeat: no-repeat, repeat;
	background-position: right 11px top 50%, 0 0;
	background-size: 10px auto, 100%;

	@media ${DEVICE.desktop} {
		max-width: 256px;
	}

	@media ${DEVICE.tablet} {
		max-width: 328px;
	}

	@media ${DEVICE.mobile} {
		max-width: 272px;
	}
`;

const Select = ({ option, onChange, value }: ISelectProps) => {
	return (
		<CustomSelect value={value} onChange={onChange}>
			{option.map((item) => {
				return (
					<Options key={item.value} value={item.value}>
						{item.label}
					</Options>
				);
			})}
		</CustomSelect>
	);
};

export default React.memo(Select);
