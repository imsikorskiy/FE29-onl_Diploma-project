import styled from "styled-components";
import { Link } from "react-router-dom";

interface ILink {
	textDecoration?: string;
}

export const CustomLnk = styled(Link)<ILink>`
	text-decoration: ${(p) => p.textDecoration || "none"};
`;
