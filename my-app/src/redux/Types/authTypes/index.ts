export interface IAuthRequestLoginData {
	email: string;
	password: string;
}

export interface IAuthResponseLoginData {
	access: string;
	refresh: string;
}

export interface IAuthRequestRegistrationData {
	username: string;
	email: string;
	password: string;
}

export interface IAuthResponseRegistrationData {
	username: string;
	email: string;
	id: number;
}

export interface IAuthRequestActivation {
	uid: string;
	token: string;
}

export interface IAuthResponseActivation {
	uid: string;
	token: string;
}

export interface IAuthResponseActivatedUser {
	id: number;
	email: string;
	username: string;
}

export interface IAuthRequestRefreshToken {
	refresh: string;
}

export interface IAuthResponseRefreshToken {
	access: string;
}
