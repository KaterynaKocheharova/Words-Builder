import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

type LoaderProps = {
  children?: React.ReactNode;
};

const Loader = ({ children }: LoaderProps) => {
  return (
    <div className={css.backdrop}>
      <p className={css["loading-text"]}>{children && children}</p>
      <InfinitySpin color="var(--primary-color)" />
    </div>
  );
};

export default Loader;
