import Sidebar from "./Sidebar";
import styles from "../css/Home.module.css";
import Mainbar from "./Mainbar";
import { SidebarContext } from "../context/SideBarcontext";
import { useContext } from "react";
function Home() {
  const { isOpen } = useContext(SidebarContext);
  return (
    <div className={isOpen ? styles.home : styles.homeClosed}>
      <Sidebar />
      <Mainbar />
    </div>
  );
}

export default Home;
