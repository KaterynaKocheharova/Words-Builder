import { lazy, Suspense, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { selectIsLoading } from "./redux/auth/selectors";
import { Routes, Route, Navigate } from "react-router-dom";
import { refreshUser } from "./redux/auth/operations";
import Layout from "./components/Layout";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import Loader from "./components/CommonComponents/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationPage = lazy(
  () => import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage"));
const DictionaryPage = lazy(() => import("./pages/DictionaryPage/DictionaryPage"));


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
                  redirectTo={"/dictionary"}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo={"/dictionary"}
                />
              }
            />
            <Route
              path="/dictionary"
              element={
                <PrivateRoute
                  component={<DictionaryPage />}
                  redirectTo={"/login"}
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
