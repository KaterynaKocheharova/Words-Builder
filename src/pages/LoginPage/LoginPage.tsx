import { useEffect, useState } from "react";
import Section from "../../components/CommonComponents/Section/Section";
import Banner from "../../components/RegisterAndLoginPageComponents/Banner/Banner";
import LoginForm from "../../components/RegisterAndLoginPageComponents/LoginForm/LoginForm";
import KeyWords from "../../components/RegisterAndLoginPageComponents/KeyWords/KeyWords";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1400);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 767);
  const [isMediumScreen, setIsMediumScreen] = useState(
    window.innerWidth >= 768 && window.innerWidth <= 1440
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1400);
      setIsSmallScreen(window.innerWidth <= 767);
      setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth <= 1439);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section sectionClass="auth-section">
      <div className={css["login-container"]}>
        <div className={css["banner-keywords-container"]}>
          <Banner />
          {(isSmallScreen || isLargeScreen) && <KeyWords />}
        </div>
        <LoginForm />
      </div>
      {isMediumScreen && !isLargeScreen && <KeyWords />}
    </Section>
  );
};

export default LoginPage;
