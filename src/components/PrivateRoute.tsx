import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  component: React.ReactNode;
  // redirectTo: string
};

const PrivateRoute = ({ component: Component }: PrivateRouteProps) => {
  return Component;

  //   return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
