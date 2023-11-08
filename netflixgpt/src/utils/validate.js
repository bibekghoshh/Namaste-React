const validate = (email, password) => {

  const isEmailValid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
  const isPasswordVaild =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    console.log(isPasswordVaild);
    console.log(isEmailValid);

  if (!isEmailValid) return "Enter valid email";
  if (!isPasswordVaild) return "Enter vaild password";

  return null;
};
export default validate;
