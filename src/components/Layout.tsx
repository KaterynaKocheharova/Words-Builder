import { Suspense } from "react";
import NavBar from "./HeaderComponents/NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Suspense fallback={<p>Loading</p>}>
        <NavBar />
        {children}
      </Suspense>
    </div>
  );
};

export default Layout;
