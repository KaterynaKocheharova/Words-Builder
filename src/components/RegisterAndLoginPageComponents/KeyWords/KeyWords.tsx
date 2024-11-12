import css from "./KeyWords.module.css";

const KeyWords = () => {
  return (
    <ul className={css["keywords-list"]}>
      <li className={css.keyword}>Word</li>
      <li className={css.keyword}>Translation</li>
      <li className={css.keyword}>Grammar</li>
      <li className={css.keyword}>Progress</li>
    </ul>
  );
};

export default KeyWords;
