import React from "react";
import styled from "styled-components";

interface ICustomBurgerProps {
	open: boolean;
}

export const StyledBurger = styled.button<ICustomBurgerProps>`
	width: 70px;
	height: 20px;
	background: transparent;
	box-shadow: none;
	padding: 0;
	border-style: solid;
	border-color: gray transparent;
	border-width: ${({ open }) => (open ? "0px" : "2px 0")} 2px 0;
	position: relative;
	&::after,
	&::before {
		content: "";
		display: block;
		position: absolute;
		left: 0;
		right: 0;
		top: 50%;
		margin-top: -1px;
		height: 2px;
		background: gray;
		transition: all 0.2s ease-in-out;
	}

	&::after {
		transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		transition: all 0.2s ease-in-out;
	}
	&::before {
		transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		transition: all 0.2s ease-in-out;
	}
`;

interface TBurgerProps {
	open: boolean;
	changeOpen: () => void;
}

const Burger = ({ open, changeOpen }: TBurgerProps) => {
	return <StyledBurger open={open} onClick={changeOpen} />;
};

export default Burger;
