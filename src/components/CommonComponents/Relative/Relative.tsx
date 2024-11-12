import css from "./Relative.module.css";

type RelativeProps = {
  children: React.ReactNode;
};
const Relative = ({ children }: RelativeProps) => {
  return <div className={css.relative}>{children}</div>;
};

export default Relative;
