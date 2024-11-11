import css from "./Container.module.css";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
