import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RestrictedRoute from "./components/RestrictedRoute";

const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

export default function App() {
  return (
    <div id="App">
      <Suspense fallback={<p>Loading app</p>}>
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
      </Suspense>
    </div>
  );
}
