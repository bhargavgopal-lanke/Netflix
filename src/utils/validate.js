export const validateData = (emailValue, passwordValue, fullNameValue) => {
  let errorMsg = {};

  if (!emailValue || !passwordValue) {
    errorMsg.email = "Email is required.";
    errorMsg.password = "Password is required.";
  }


  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailValue && !emailPattern.test(emailValue)) {
    errorMsg.email = "Please enter a valid email address.";
  }
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  if (passwordValue && !passwordPattern.test(passwordValue)) {
    errorMsg.password =
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long.";
  }

  const fullNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
  if (fullNameValue && !fullNameValid.test(fullNameValue)) {
    errorMsg.fullName =
      "Full name must be between 3 and 16 characters long and can only contain letters.";
  }
  return Object.keys(errorMsg).length === 0 ? null : errorMsg;
};
