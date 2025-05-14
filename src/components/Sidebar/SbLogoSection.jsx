import styles from "../../css/SbLogoSection.module.css";
import { ArrowLeftFromLine } from "lucide-react";
import { useContext } from "react";
import { SidebarContext } from "../../context/SideBarcontext";

function SbLogoSection() {
  const { toggleSidebar, isOpen } = useContext(SidebarContext);
  return (
    <div
      className={`${styles.logoBar} ${
        isOpen ? styles.ifOpen : styles.ifClosed
      } `}
    >
      {isOpen && (
        <img src="./img/logo.png" alt="logo" className={styles.logo}></img>
      )}
      <ArrowLeftFromLine onClick={toggleSidebar} />
    </div>
  );
}

export default SbLogoSection;
