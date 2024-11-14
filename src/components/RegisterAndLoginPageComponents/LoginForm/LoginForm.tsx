import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch } from "../../../redux/hooks";
import { toast } from "react-toastify";
import AuthFormContainer from "../AuthFormContainer/AuthFormContainer";
import AuthFormTitle from "../AuthFormTitle/AuthFormTitle";
import AuthFormDescription from "../AuthFormDescription/AuthFormDescription";
import InputGroupContainer from "../InputGroupContainer/InputGroupContainer";
import Input from "../../CommonComponents/Input/Input";
import PasswordInput from "../PasswordInput/PasswordInput";
import Button from "../../CommonComponents/Button/Button";
import AuthLink from "../AuthLink/AuthLink";
import Relative from "../../CommonComponents/Relative/Relative";
import InputError from "../../CommonComponents/InputError/InputError";
import { type RegisterFormValues } from "../RegisterForm/RegisterForm";

export type LoginFormValues = Pick<RegisterFormValues, "email" | "password">;

const defaultValues: LoginFormValues = {
  email: "",
  password: "",
};

const loginFormSchema = yup.object({
  email: yup
    .string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Invalid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(/^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/, "Invalid password")
    .required("Psssword is required"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues,
    resolver: yupResolver(loginFormSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<RegisterFormValues> = (
    credentials: RegisterFormValues
  ) => {
    console.log(credentials);
    // dispatch(registerUser(credentials))
    //   .unwrap()
    //   .then(() => toast.success("Success"))
    //   .catch((error: string) => toast.error(error));
  };

  return (
    <AuthFormContainer>
      <AuthFormTitle>Login</AuthFormTitle>
      <AuthFormDescription>
        Please enter your login details to continue using our service:
      </AuthFormDescription>
      <form>
        <InputGroupContainer>
          <Relative>
            <Input<LoginFormValues>
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
        </InputGroupContainer>
        <Button extraClass="auth-button" type="submit">
          Login
        </Button>
        <AuthLink to="/register">Register</AuthLink>
      </form>
    </AuthFormContainer>
  );
};

export default LoginForm;
