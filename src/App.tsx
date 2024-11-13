import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import RestrictedRoute from "./components/RestrictedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationPage = lazy(
  () => import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage"));

export default function App() {
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
        </Layout>
      </Suspense>
    </div>
  );
}
