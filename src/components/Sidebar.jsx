import styles from "../css/Sidebar.module.css";

import SbBody from "./Sidebar/SbBody";
import SbFooter from "./Sidebar/SbFooter";
import SbLogoSection from "./Sidebar/SbLogoSection";
import SbSearchBox from "./Sidebar/SbSearchBox";
import { useContext } from "react";
import { SidebarContext } from "../context/SideBarcontext";
function Sidebar() {
  const { isOpen } = useContext(SidebarContext);
  return (
    <div className={styles.sidebar}>
      <SbLogoSection />
      {isOpen && <SbSearchBox />}
      <SbBody />
      <SbFooter />
    </div>
  );
}

export default Sidebar;
