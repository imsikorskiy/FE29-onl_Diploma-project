import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { accountActivation } from "../../redux/services/authServices";
import ComponentsContainer from "../../components/common-components/Container";
import { CustomLnk } from "../../components/common-components/CustomLink";
import CustomText from "../../components/common-components/Text";
import Button from "../../components/common-components/Button";
import Loader from "../../components/common-components/Loader/Loader";
import WarningText from "../../components/common-components/warningText";

const ActivationPage = () => {
	const { uid, id } = useParams();
	const [isActivated, setIsActivated] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (uid && id) {
			const activateAccount = async () => {
				try {
					setIsLoading(true);
					const response = await accountActivation({ uid, token: id });
					if (response.data) {
						setIsActivated(true);
					}
				} catch (e: any) {
					setErrorMessage(e?.response?.data?.detail as string);
				} finally {
					setIsLoading(false);
				}
			};
			activateAccount();
		}
	}, [uid, id]);

	return (
		<ComponentsContainer width="100%">
			<CustomText width="500px" fontsize="36" margin="60px auto 60px">
				Activation Page
			</CustomText>

			<>
				{isActivated ? (
					<>
						{!isLoading ? (
							<>{errorMessage && <WarningText>{errorMessage}</WarningText>}</>
						) : (
							<Loader />
						)}
					</>
				) : (
					<>
						<ComponentsContainer
							display="flex"
							width="500px"
							margin="10px auto 100px"
						>
							<CustomText margin="40px auto 40px" width="624" fontsize="20" color="green">
								Your account is succesfully activated!
							</CustomText>
							<CustomLnk to="/signinpage">
								<Button background="lightblue">Go to the login page</Button>
							</CustomLnk>
						</ComponentsContainer>
					</>
				)}
			</>
		</ComponentsContainer>
	);
};

export default ActivationPage;
