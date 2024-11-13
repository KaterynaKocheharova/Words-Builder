import { useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

type LoaderProps = {
  children?: React.ReactNode;
};

const Loader = ({ children }: LoaderProps) => {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

  return (
    <div className={css.backdrop}>
      <p className={css["loading-text"]}>{children && children}</p>
      <InfinitySpin color="var(--primary-color)" />
    </div>
  );
};

export default Loader;
