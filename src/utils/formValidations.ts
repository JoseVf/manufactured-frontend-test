export const emailValidationPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const emailValidationMessage = 'Please enter a valid email address';

export const passwordValidationFn = (password: string, repeatedPassword: string) => password === repeatedPassword;
export const passwordValidationMessage = 'Passwords do not match';

