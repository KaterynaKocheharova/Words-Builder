import Container from "../../components/CommonComponents/Container/Container";
import Section from "../../components/CommonComponents/Section/Section";
import Banner from "../../components/RegisterAndLoginPageComponents/Banner/Banner";
import RegisterForm from "../../components/RegisterAndLoginPageComponents/RegisterForm/RegisterForm";

const RegistrationPage = () => {
  return (
    <Section sectionClass="auth-section">
      <Container>
        <Banner />
      </Container>
      <RegisterForm />
    </Section>
  );
};

export default RegistrationPage;
