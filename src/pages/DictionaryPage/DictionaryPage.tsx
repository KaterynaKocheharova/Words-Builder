import { useAppDispatch } from "../../redux/hooks";
import Container from "../../components/CommonComponents/Container/Container";
import Dashboard from "../../components/DictionaryPageComponents/Dashboard/Dashboard";
import css from "./DictionaryPage.module.css";
import { useEffect } from "react";
import { getWordsCategories } from "../../redux/categories/operations";

const DictionaryPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWordsCategories());
  }, []);
  
  return (
    <section className={css.section}>
      <Container>
        <Dashboard />
      </Container>
    </section>
  );
};

export default DictionaryPage;
