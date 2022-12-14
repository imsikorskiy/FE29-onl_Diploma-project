import React from "react";
import CustomText from "../../components/common-components/Text";
import SignUp from "../../components/SignUpForm";
import ComponentsContainer from "../../components/common-components/Container";
import { CustomLnk } from "../../components/common-components/CustomLink/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { MainTitle } from "../../components/MainTitle";

const SignUpPage = () => {
	return (
		<ComponentsContainer margin="30px auto 0px">
			<ComponentsContainer maxWidth="1120px" margin="60px auto 0">
				<ComponentsContainer width="212px" margin="20px 0 0">
					<CustomLnk to="/mainpage" textDecoration="none">
						<CustomText
							fontfamily="Inter"
							fontweight="400"
							fontsize="16"
							color="#313037"
							lineheight="24"
							cursor="pointer"
						>
							<FontAwesomeIcon icon={faArrowLeft} size="xs" /> Back to Login
							Page
						</CustomText>
					</CustomLnk>
					<MainTitle>Sign Up</MainTitle>
				</ComponentsContainer>
				<SignUp />
			</ComponentsContainer>
		</ComponentsContainer>
	);
};

export default SignUpPage;
