import React from "react";
import NavComponent from "../components/NavComponent";
import NavNotLogInComponent from "../components/NavNotLogInComponent";
import { Outlet } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";
import { useGetUserProfileQuery } from "../redux/services/authSlice";
import { useState, useEffect } from "react";

const RootLayout = () => {
  const {
    data: userProfile,
    isLoading: myLoading,
    error: myError,
  } = useGetUserProfileQuery();
  const [dataOfUser, setUserData] = useState();
  useEffect(() => {
    async function Verify() {
      const userData = await userProfile;
      console.log(userData);
      setUserData(userData);
    }
    Verify();
  });
  if (dataOfUser) {
    return (
      <>
        <NavComponent />
        <main>
          <Outlet />
        </main>
        <footer>
          <FooterComponent />
        </footer>
      </>
    );
  }
  return (
    <>
      <NavNotLogInComponent />
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
};

export default RootLayout;
