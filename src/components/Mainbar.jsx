import Breadcrumb from "./Breadcrumb";
import MainContent from "./MainContent";
import styles from "../css/Mainbar.module.css";
function Mainbar() {
  return (
    <div className={styles.mainbar}>
      <Breadcrumb />
      <MainContent />
    </div>
  );
}

export default Mainbar;
