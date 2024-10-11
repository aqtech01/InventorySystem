import React from "react";
import MainPage from "./../components/Main";
import Sidebar from "../components/sideBar";
export const metadata = {
  title: "AQStore.Dashboard",
};
export default function DashboardPage() {
  return (
    <>
      <MainPage>
      <Sidebar/>
        <h1 class="">This is Dashboard</h1>
      </MainPage>
    </>
  );
}
