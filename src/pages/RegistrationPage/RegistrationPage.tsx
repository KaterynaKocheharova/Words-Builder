import Container from "../../components/CommonComponents/Container/Container";
import Section from "../../components/CommonComponents/Section/Section";
import Banner from "../../components/RegisterAndLoginPageComponents/Banner/Banner";
import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <Section sectionClass="auth-section">
      <Container>
        <div className={css["registration-container"]}>
          <Banner />
          <p>FORM</p>
        </div>
      </Container>
    </Section>
  );
};

export default RegistrationPage;
