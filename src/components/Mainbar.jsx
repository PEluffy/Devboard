import Breadcrumb from "./Breadcrumb";
import styles from "../css/Mainbar.module.css";
import { Outlet } from "react-router";
import MainContent from "./MainContent";

function Mainbar() {
  return (
    <div className={styles.mainbar}>
      <Breadcrumb />
      <MainContent children={<Outlet />} />
    </div>
  );
}

export default Mainbar;
