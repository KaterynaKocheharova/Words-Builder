import { useEffect, useState } from "react";
import Section from "../../components/CommonComponents/Section/Section";
import AuthPagesFlexContainer from "../../components/RegisterAndLoginPageComponents/AuthPagesFlexContainer/AuthPagesFlexContainer";
import BannerKeywordsContainer from "../../components/RegisterAndLoginPageComponents/BannerKeyWordsConatiner/BannerKeywordsContainer";
import Banner from "../../components/RegisterAndLoginPageComponents/Banner/Banner";
import LoginForm from "../../components/RegisterAndLoginPageComponents/LoginForm/LoginForm";
import KeyWords from "../../components/RegisterAndLoginPageComponents/KeyWords/KeyWords";

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
    <Section sectionClass="auth-section" extraClass="login">
      <AuthPagesFlexContainer extraClass="login-flex">
        <BannerKeywordsContainer>
          <Banner />
          {(isSmallScreen || isLargeScreen) && <KeyWords />}
        </BannerKeywordsContainer>
        <LoginForm />
      </AuthPagesFlexContainer>
      {isMediumScreen && !isLargeScreen && <KeyWords />}
    </Section>
  );
};

export default LoginPage;
