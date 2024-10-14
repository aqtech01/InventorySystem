import Image from "next/image";
import MainPage from "./components/Main";
import Header from "./components/Header";
import SideBar from "./components/sideBar";
export default function Home() {
  return ( 
    <>
      <div className="">
        <div class="mb-0"></div>
        <div class="">
          <SideBar />
        </div>
      </div>
    </>
  );
}
