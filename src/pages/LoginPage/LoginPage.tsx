import Section from "../../components/CommonComponents/Section/Section";
import Banner from "../../components/RegisterAndLoginPageComponents/Banner/Banner";
import LoginForm from "../../components/RegisterAndLoginPageComponents/LoginForm/LoginForm";
import KeyWords from "../../components/RegisterAndLoginPageComponents/KeyWords/KeyWords";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <Section sectionClass="auth-section">
      <div className={css["login-container"]}>
        <div className={css["banner-keywords-container"]}>
          <Banner />
          <KeyWords />
        </div>
        <LoginForm />
      </div>
    </Section>
  );
};

export default LoginPage;
