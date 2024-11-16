import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export type AddWordFormValues = {
  category: string;
  en: string;
  ua: string;
  verbType: "regular" | "irregular" | string;
};

const defaultValues: AddWordFormValues = {
  category: "",
  en: "",
  ua: "",
  verbType: "",
};

const addWordFormSchema = yup.object({
  category: yup.string().required("Category is required"),
  en: yup
    .string()
    .matches(/\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/, "Incorrect word")
    .required("English word is required"),
  ua: yup
    .string()
    .matches(/^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u, "Incorrect word")
    .required("Translation is required"),
  isIrregular: yup
    .string()
    .oneOf(["regular", "irregular"], "Invalid verb type")
    .required("Verb type is required"),
});

const AddWordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddWordFormValues>({
    defaultValues,
    resolver: yupResolver(registerFormSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<RegisterFormValues> = (
    credentials: RegisterFormValues
  ) => {
    dispatch(registerUser(credentials))
      .unwrap()
      .then(() => toast.success("Success"))
      .catch((error: string) => toast.error(error));
  };

  return (
    <AuthFormContainer>
      <AuthFormTitle>Register</AuthFormTitle>
      <AuthFormDescription>
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </AuthFormDescription>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroupContainer>
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
        </InputGroupContainer>
        <Button extraClass="auth-button" type="submit">
          Register
        </Button>
        <AuthLink to="/login">Login</AuthLink>
      </form>
    </AuthFormContainer>
  );
};

export default RegisterForm;
