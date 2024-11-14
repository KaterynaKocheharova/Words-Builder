import clsx from "clsx";
import css from "./BannerKeyWordsContainer.module.css";

type BannerKeywordsContainerProps = {
  children: React.ReactNode;
  extraClass?: string;
};
const BannerKeywordsContainer = ({
  children,
  extraClass,
}: BannerKeywordsContainerProps) => {
  return (
    <div className={clsx(css["banner-keywords-container"], extraClass && css[extraClass])}>
      {children}
    </div>
  );
};

export default BannerKeywordsContainer;
