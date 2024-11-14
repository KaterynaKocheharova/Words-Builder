import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import { useAppSelector } from "../../../redux/hooks";
import { useScreenSizes } from "../../../hooks/useScreenSizes";
import Container from "../../CommonComponents/Container/Container";
import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import UserMenu from "../UserMenu/UserMenu";
import css from "./NavBar.module.css";

const NavBar = () => {
  const { isLargeScreen } = useScreenSizes();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Container>
        <div className={css.flex}>
          <Logo />
          {isLoggedIn && isLargeScreen && (
            <>
              <NavLinks />
              <UserMenu />
            </>
          )}
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
