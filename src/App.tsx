import { lazy, Suspense, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { selectIsLoading } from "./redux/auth/selectors";
import { Routes, Route, Navigate } from "react-router-dom";
import { refreshUser } from "./redux/auth/operations";
import Layout from "./components/Layout";
import RestrictedRoute from "./components/RestrictedRoute";
import Loader from "./components/CommonComponents/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationPage = lazy(
  () => import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage"));

export default function App() {
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, []);

  return (
    <div id="App">
      <Suspense fallback={<p>Loading app</p>}>
        <Layout>
          <Routes>
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegistrationPage />}
                  // redirectTo={"/"}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  // redirectTo={"/"}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <ToastContainer autoClose={3000} />
          {isLoading && <Loader>{isLoading}</Loader>}
        </Layout>
      </Suspense>
    </div>
  );
}
