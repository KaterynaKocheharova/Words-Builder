import { useForm, SubmitHandler } from "react-hook-form";
import AuthFormContainer from "../AuthFormContainer/AuthFormContainer";
import AuthFormTitle from "../AuthFormTitle/AuthFormTitle";
import AuthFormDescription from "../AuthFormDescription/AuthFormDescription";
import Input from "../../CommonComponents/Input/Input";
import PasswordInput from "../PasswordInput/PasswordInput";
import Button from "../../CommonComponents/Button/Button";
import AuthLink from "../AuthLink/AuthLink";
import css from "./RegisterForm.module.css";

export type RegisterFormValues = {
  email: string;
  name: string;
  password: string;
};

const defaultValues: RegisterFormValues = {
  email: "",
  name: "",
  password: "",
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<RegisterFormValues> = (
    data: RegisterFormValues
  ) => {
    console.log(data);
  };

  return (
    <AuthFormContainer>
      <AuthFormTitle>Register</AuthFormTitle>
      <AuthFormDescription>
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </AuthFormDescription>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css["input-group"]}>
          <Input<RegisterFormValues>
            register={register}
            name="name"
            placeholder="Name"
            extraClass="auth-form-input"
          />
          <Input<RegisterFormValues>
            register={register}
            name="email"
            placeholder="Email"
            extraClass="auth-form-input"
          />
          <PasswordInput
            register={register}
            name="password"
            extraClass="auth-form-input"
          />
        </div>
        <Button extraClass="registration-button" type="submit">
          Register
        </Button>
        <AuthLink to="/login">Login</AuthLink>
      </form>
    </AuthFormContainer>
  );
};

export default RegisterForm;
