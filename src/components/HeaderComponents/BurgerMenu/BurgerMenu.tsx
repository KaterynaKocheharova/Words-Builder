import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import UserBar from "../UserBar/UserBar";
import UserNav from "../UserNav/UserNav";
import LogoutButton from "../LogoutButton/LogoutButton";
import css from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  return (
    <Menu>
      {({ close }) => (
        <>
          <MenuButton className={css.button}>
            <svg
              viewBox="0 0 47 32"
              width="32"
              height="32"
              className={css.icon}
            >
              <path
                stroke="black"
                fill="none"
                strokeLinejoin="miter"
                strokeLinecap="round"
                strokeMiterlimit="4"
                strokeWidth="2.9091"
                d="M8.537 5.333h36.553"
              ></path>
              <path
                stroke="black"
                fill="none"
                strokeLinejoin="miter"
                strokeLinecap="round"
                strokeMiterlimit="4"
                strokeWidth="2.9091"
                d="M8.537 24.727h36.553"
              ></path>
              <path
                stroke="black"
                fill="none"
                strokeLinejoin="miter"
                strokeLinecap="round"
                strokeMiterlimit="4"
                strokeWidth="2.9091"
                d="M19.668 15.030h25.423"
              ></path>
            </svg>
          </MenuButton>
          <MenuItems className={css.container}>
            <div className={css["top-flex"]}>
              <UserBar inMenu />
              <button onClick={close} className={css["close-button"]}>
                <svg
                  width="32"
                  height="32"
                  aria-label="close button icon"
                  className={css["close-icon"]}
                >
                  <use href="/sprite.svg#icon-close"></use>
                </svg>
              </button>
            </div>
            <UserNav />
            <LogoutButton />
          </MenuItems>
        </>
      )}
    </Menu>
  );
};

export default BurgerMenu;
