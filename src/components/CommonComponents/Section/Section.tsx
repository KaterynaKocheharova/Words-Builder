import css from "./Section.module.css";

type SectionProps = {
  children: React.ReactNode;
  sectionClass?: string;
};

const Section = ({ children, sectionClass }: SectionProps) => {
  return (
    <section className={sectionClass ? css[sectionClass] : css.section}>
      {children}
    </section>
  );
};

export default Section;
