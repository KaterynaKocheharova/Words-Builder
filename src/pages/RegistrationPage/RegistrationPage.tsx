import Section from "../../components/CommonComponents/Section/Section";
import AuthPagesFlexContainer from "../../components/RegisterAndLoginPageComponents/AuthPagesFlexContainer/AuthPagesFlexContainer";
import BannerKeywordsContainer from "../../components/RegisterAndLoginPageComponents/BannerKeyWordsConatiner/BannerKeywordsContainer";
import Banner from "../../components/RegisterAndLoginPageComponents/Banner/Banner";
import RegisterForm from "../../components/RegisterAndLoginPageComponents/RegisterForm/RegisterForm";
import KeyWords from "../../components/RegisterAndLoginPageComponents/KeyWords/KeyWords";
import { useScreenSizes } from "../../hooks/useScreenSizes";

const RegistrationPage = () => {
  const { isLargeScreen, isMediumScreen } = useScreenSizes();

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
