import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import { useAppSelector } from "../../../redux/hooks";
import Container from "../../CommonComponents/Container/Container";
import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import css from "./NavBar.module.css";

const NavBar = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <Container>
        <Logo />
        {isLoggedIn && <NavLinks />}
      </Container>
    </header>
  );
};

export default NavBar;
