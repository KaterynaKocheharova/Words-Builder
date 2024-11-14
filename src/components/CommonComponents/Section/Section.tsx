import clsx from "clsx";
import css from "./Section.module.css";

type SectionProps = {
  children: React.ReactNode;
  sectionClass?: string;
  extraClass?: string;
};

const Section = ({ children, sectionClass, extraClass }: SectionProps) => {
  return (
    <section
      className={clsx(
        sectionClass && css[sectionClass],
        css.section,
        extraClass && css[extraClass]
      )}
    >
      {children}
    </section>
  );
};

export default Section;
