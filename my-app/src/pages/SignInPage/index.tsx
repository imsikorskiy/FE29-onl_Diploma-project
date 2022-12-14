import React from "react";
import CustomText from "../../components/common-components/Text";
import SignIN from "../../components/SignInForm";
import { CustomLnk } from "../../components/common-components/CustomLink";
import ComponentsContainer from "../../components/common-components/Container/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { MainTitle } from "../../components/MainTitle";

const SignInPage = () => {
	return (
		<ComponentsContainer margin="60px auto 0">
			<ComponentsContainer maxWidth="1120px" margin="auto auto 70px">
				<ComponentsContainer width="186px">
					<CustomLnk to="/mainpage" textDecoration="none">
						<CustomText
							fontfamily="Inter"
							fontweight="400"
							fontsize="16"
							color="#313037"
							lineheight="24"
							cursor="pointer"
						>
							<FontAwesomeIcon icon={faArrowLeft} size="xs" /> Back to home
						</CustomText>
					</CustomLnk>
					<MainTitle>Sign In</MainTitle>
				</ComponentsContainer>
				<SignIN />
			</ComponentsContainer>
		</ComponentsContainer>
	);
};

export default SignInPage;
