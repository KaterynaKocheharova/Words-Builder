import Container from "../../CommonComponents/Container/Container";
import Logo from "../Logo/Logo";
import css from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={css.header}>
      <Container>
        <Logo />
      </Container>
    </header>
  );
};

export default NavBar;
