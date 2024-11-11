import css from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={css["image-container"]}>
      <picture>
        <source
          srcSet="
            /images/desktop/home-page-image-1x.png 1x,
            /images/desktop/home-page-image-2x.png 2x
          "
          media="(min-width: 1440px)"
        />
        <source
          srcSet="
         /images/mobile/home-page-image-1x.png 1x,
         /images/mobile/home-page-image-2x.png 2x
        "
          media="(min-width: 320px)"
        />
        <img
          src="/images/mobile/home-page-image-1x.png"
          alt="home page image a boy and a girl reading a book and studying together"
        />
      </picture>
    </div>
  );
};

export default Banner;
