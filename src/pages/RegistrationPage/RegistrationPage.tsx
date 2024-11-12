import { useState, useEffect } from "react";
import Section from "../../components/CommonComponents/Section/Section";
import Banner from "../../components/RegisterAndLoginPageComponents/Banner/Banner";
import RegisterForm from "../../components/RegisterAndLoginPageComponents/RegisterForm/RegisterForm";
import KeyWords from "../../components/RegisterAndLoginPageComponents/KeyWords/KeyWords";
import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1400);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1400);
    };
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section sectionClass="auth-section">
      {isLargeScreen ? (
        <div className={css["registration-container"]}>
          <div className={css["banner-keywords-container"]}>
            <Banner />
            <KeyWords />
          </div>
          <RegisterForm />
        </div>
      ) : (
        <>
          <div className={css["registration-container"]}>
            <Banner />
            <RegisterForm />
          </div>
          <KeyWords />
        </>
      )}
    </Section>
  );
};

export default RegistrationPage;
