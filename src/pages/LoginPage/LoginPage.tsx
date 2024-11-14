import Section from "../../components/CommonComponents/Section/Section";
import AuthPagesFlexContainer from "../../components/RegisterAndLoginPageComponents/AuthPagesFlexContainer/AuthPagesFlexContainer";
import BannerKeywordsContainer from "../../components/RegisterAndLoginPageComponents/BannerKeyWordsConatiner/BannerKeywordsContainer";
import Banner from "../../components/RegisterAndLoginPageComponents/Banner/Banner";
import LoginForm from "../../components/RegisterAndLoginPageComponents/LoginForm/LoginForm";
import KeyWords from "../../components/RegisterAndLoginPageComponents/KeyWords/KeyWords";
import { useScreenSizes } from "../../hooks/useScreenSizes";

const LoginPage = () => {
  const {isLargeScreen, isMediumScreen, isSmallScreen} = useScreenSizes()

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
