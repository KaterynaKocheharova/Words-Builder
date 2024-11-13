import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch } from "../../../redux/hooks";
import { registerUser } from "../../../redux/auth/operations";
import AuthFormContainer from "../AuthFormContainer/AuthFormContainer";
import AuthFormTitle from "../AuthFormTitle/AuthFormTitle";
import AuthFormDescription from "../AuthFormDescription/AuthFormDescription";
import Input from "../../CommonComponents/Input/Input";
import PasswordInput from "../PasswordInput/PasswordInput";
import Button from "../../CommonComponents/Button/Button";
import AuthLink from "../AuthLink/AuthLink";
import Relative from "../../CommonComponents/Relative/Relative";
import InputError from "../../CommonComponents/InputError/InputError";
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

const registerFormSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Invalid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
      "The password must consist of 6 English letters and 1 number."
    )
    .required("Psssword is required"),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    defaultValues,
    resolver: yupResolver(registerFormSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<RegisterFormValues> = (
    credentials: RegisterFormValues
  ) => {
    dispatch(registerUser(credentials));
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
          <Relative>
            <Input<RegisterFormValues>
              isWrong={Boolean(errors.name?.message)}
              register={register}
              name="name"
              placeholder="Name"
              extraClass="auth-form-input"
            />
            <InputError errorMessage={errors.name?.message} />
          </Relative>
          <Relative>
            <Input<RegisterFormValues>
              isWrong={Boolean(errors.email?.message)}
              register={register}
              name="email"
              placeholder="Email"
              extraClass="auth-form-input"
            />
            <InputError errorMessage={errors.email?.message} />
          </Relative>
          <PasswordInput
            isWrong={Boolean(errors.password?.message)}
            register={register}
            name="password"
            extraClass="auth-form-input"
            errorMessage={errors.password?.message}
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
