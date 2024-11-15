import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import css from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  return (
    <Menu>
      <MenuButton className={css.button}>
        <svg viewBox="0 0 47 32" width="32" height="32" className={css.icon}>
          <path
            stroke="black"
            fill="none"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="2.9091"
            d="M8.537 5.333h36.553"
          ></path>
          <path
            stroke="black"
            fill="none"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="2.9091"
            d="M8.537 24.727h36.553"
          ></path>
          <path
            stroke="black"
            fill="none"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="2.9091"
            d="M19.668 15.030h25.423"
          ></path>
        </svg>
      </MenuButton>
      {/* <MenuItems className={css.container}></MenuItems> */}
      <div className={css.container}></div>

      {/* <MenuItems  anchor="bottom">



        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/settings">
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/license">
            License
          </a>
        </MenuItem> 


      </MenuItems> */}
    </Menu>
    // <button className={css.button}>
    //   <svg width="32" height="32" className={css.icon}>
    //     <use href="/sprite.svg#icon-burger"></use>
    //   </svg>
    // </button>
  );
};

export default BurgerMenu;
