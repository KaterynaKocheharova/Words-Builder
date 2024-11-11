import AuthFormContainer from "../AuthFormContainer/AuthFormContainer";
import AuthFormTitle from "../AuthFormTitle/AuthFormTitle";
import AuthFormDescription from "../AuthFormDescription/AuthFormDescription";
import Input from "../../CommonComponents/Input/Input";
import css from "./RegisterForm.module.css";

const RegisterForm = () => {
  return (
    <AuthFormContainer>
      <AuthFormTitle>Register</AuthFormTitle>
      <AuthFormDescription>
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </AuthFormDescription>
      <form>
        <div className={css["input-group"]}>
          <Input name="name" placeholder="Name" extraClass="auth-form-input" />
          <Input
            name="email"
            placeholder="Email"
            extraClass="auth-form-input"
          />
          <Input
            name="password"
            placeholder="Password"
            extraClass="auth-form-input"
          />
        </div>
      </form>
    </AuthFormContainer>
  );
};

export default RegisterForm;
