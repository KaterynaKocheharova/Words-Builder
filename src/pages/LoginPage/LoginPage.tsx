import Section from "../../components/CommonComponents/Section/Section";
import Banner from "../../components/RegisterAndLoginPageComponents/Banner/Banner";
import RegisterForm from "../../components/RegisterAndLoginPageComponents/RegisterForm/RegisterForm";
import KeyWords from "../../components/RegisterAndLoginPageComponents/KeyWords/KeyWords";
import css from "./LoginPage.module.css";

const RegistrationPage = () => {
  return (
    <Section sectionClass="auth-section">
      <div className={css["registration-container"]}>
        <div className={css["banner-keywords-container"]}>
          <Banner />
          <KeyWords />
        </div>
        <RegisterForm />
      </div>
      <KeyWords />
    </Section>
  );
};

export default RegistrationPage;
