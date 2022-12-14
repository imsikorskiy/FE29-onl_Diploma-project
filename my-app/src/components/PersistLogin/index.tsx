import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { getLoginDataSuccess } from "../../redux/action/authActionCreators";
import { AppDispatch, useAppSelector } from "../../redux/hooks";
import { isAuthSelector } from "../../redux/selectors/authSelectrors";
import { getAuthorizedUserInfo } from "../../redux/services/authServices";
import { IAuthResponseActivatedUser } from "../../redux/Types/authTypes";

const PersistLogin = () => {
	const token = localStorage.getItem("accessToken");
	const isAuth = useAppSelector(isAuthSelector);
	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		if (token) {
			const getAuthUserData = async () => {
				try {
					const userData: AxiosResponse<IAuthResponseActivatedUser> =
						await getAuthorizedUserInfo();
					dispatch(getLoginDataSuccess({ ...userData.data }));
				} catch (e) {
					console.error(e);
				}
			};
			getAuthUserData();
		}
	}, [dispatch, token]);

	return isAuth || token ? <Outlet /> : <Navigate to="/signinpage" replace />;
};

export default PersistLogin;
