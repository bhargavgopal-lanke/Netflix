export const handleClick = (signIn, setSignUp) => {
  setSignUp(!signIn);
};

export const handleToggle = (setTogglePassword, togglePassword) => {
  setTogglePassword(!togglePassword);
};

export const handleButtonClick = (
  email,
  password,
  fullName,
  validateData,
  setErrorMessages
) => {
  const emailValue = email?.current?.value || "";
  const passwordValue = password?.current?.value || "";
  const fullNameValue = fullName?.current?.value || "";
  const errorMessages = validateData(emailValue, passwordValue, fullNameValue);
  setErrorMessages(errorMessages);
};
