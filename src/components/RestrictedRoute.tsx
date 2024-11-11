import { Navigate } from "react-router-dom";

type RestrictedRouteProps = {
  component: React.ReactNode;
  // redirectTo: string;
};

const RestrictedRoute = ({
  component: Component,
  // redirectTo,
}: RestrictedRouteProps) => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);

  //   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
  return Component;
};

export default RestrictedRoute;
