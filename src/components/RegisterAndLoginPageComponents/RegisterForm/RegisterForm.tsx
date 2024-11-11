import AuthFormContainer from "../AuthFormContainer/AuthFormContainer";
import AuthFormTitle from "../AuthFormTitle/AuthFormTitle";
import AuthFormDescription from "../AuthFormDescription/AuthFormDescription";

const RegisterForm = () => {
  return (
    <AuthFormContainer>
      <AuthFormTitle>Register</AuthFormTitle>
      <AuthFormDescription>
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </AuthFormDescription>
      <form></form>
    </AuthFormContainer>
  );
};

export default RegisterForm;
