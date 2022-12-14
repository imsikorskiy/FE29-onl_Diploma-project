export const RE_EMAIL =
	/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
export const RE_NAME = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;

export const EMPTY_EMAIL = "Email cannot be empty";
export const INCORRECT_EMAIL = "Incorrect email";
export const EMPTY_PASSWORD = "Password cannot be empty";
export const INCORRECT_PASSWORD =
	"Password must not be shorter than 3 or more than 25 characters";
export const EMPTY_USERNAME = "Username cannot be empty";
export const INCORRECT_USERNAME = "Incorrect username";
