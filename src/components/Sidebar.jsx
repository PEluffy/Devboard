import styles from "../css/Sidebar.module.css";

import SbBody from "./Sidebar/SbBody";
import SbFooter from "./Sidebar/SbFooter";
import SbLogoSection from "./Sidebar/SbLogoSection";
import SbSearchBox from "./Sidebar/SbSearchBox";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <SbLogoSection />
      <SbSearchBox />
      <SbBody />
      <SbFooter />
    </div>
  );
}

export default Sidebar;
