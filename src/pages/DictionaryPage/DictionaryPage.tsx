import Container from "../../components/CommonComponents/Container/Container";
import Dashboard from "../../components/DictionaryPageComponents/Dashboard/Dashboard";
import css from "./DictionaryPage.module.css";

const DictionaryPage = () => {
  return (
    <section className={css.section}>
      <Container>
        <Dashboard />
      </Container>
    </section>
  );
};

export default DictionaryPage;
