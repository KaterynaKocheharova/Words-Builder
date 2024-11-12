import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <InfinitySpin color="var(--primary-color)" />
    </div>
  );
};

export default Loader;
