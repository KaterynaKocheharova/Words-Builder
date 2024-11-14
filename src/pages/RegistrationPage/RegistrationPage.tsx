import { useState, useEffect } from "react";
import Section from "../../components/CommonComponents/Section/Section";
import AuthPagesFlexContainer from "../../components/RegisterAndLoginPageComponents/AuthPagesFlexContainer/AuthPagesFlexContainer";
import BannerKeywordsContainer from "../../components/RegisterAndLoginPageComponents/BannerKeyWordsConatiner/BannerKeywordsContainer";
import Banner from "../../components/RegisterAndLoginPageComponents/Banner/Banner";
import RegisterForm from "../../components/RegisterAndLoginPageComponents/RegisterForm/RegisterForm";
import KeyWords from "../../components/RegisterAndLoginPageComponents/KeyWords/KeyWords";
import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
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
      <AuthPagesFlexContainer>
        <BannerKeywordsContainer>
          <Banner />
          {isLargeScreen && <KeyWords />}
        </BannerKeywordsContainer>
        <RegisterForm />
      </AuthPagesFlexContainer>
      {isMediumScreen && !isLargeScreen && <KeyWords />}
    </Section>
  );
};

export default RegistrationPage;
