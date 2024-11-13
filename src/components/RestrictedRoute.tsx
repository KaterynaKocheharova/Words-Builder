import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectIsLoggedIn } from "../redux/auth/selectors";

type RestrictedRouteProps = {
  component: React.ReactNode;
  redirectTo: string;
};

const RestrictedRoute = ({
  component: Component,
  redirectTo,
}: RestrictedRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
