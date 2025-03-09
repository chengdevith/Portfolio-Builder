import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import RootLayout from "./Layout/RootLayout.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Template from "./pages/Template.jsx";
import Login from "./pages/auth/Login.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import { StrictMode } from "react";
import { OTPVerifyComponent } from "./pages/auth/OTPVerifyComponent.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import RequestResetPassword from "./pages/auth/RequestResetPassword.jsx";
import ResetPassword from "./pages/auth/ResetPassword.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import FolioHeaderComponents1 from "./components/portfolioCompoenets/FolioComponents1.jsx";

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <Provider store={store}>
      <BrowserRouter>
        <StrictMode>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<App />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/template" element={<Template />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/otp" element={<OTPVerifyComponent />} />
            <Route
              path="/request-reset-password"
              element={<RequestResetPassword />}
            />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/p1" element={<FolioHeaderComponents1/>} />
          </Routes>
        </StrictMode>
      </BrowserRouter>
    </Provider>
  </GoogleOAuthProvider>
);
