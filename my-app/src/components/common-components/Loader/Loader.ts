import React from "react";
import styled from "styled-components";

const Loader = styled.div`
	margin: auto;
	border: 10px solid #f3f3f3;
	border-top: 10px solid #3498db;
	border-radius: 50%;
	width: 80px;
	height: 80px;
	animation: spin 1s linear infinite;
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export default React.memo(Loader);
