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

createRoot(document.getElementById("root")).render(
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
        </Routes>
      </StrictMode>
    </BrowserRouter>
  </Provider>
);
