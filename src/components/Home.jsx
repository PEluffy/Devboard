import Sidebar from "./Sidebar";
import styles from "../css/Home.module.css";
import Mainbar from "./Mainbar";
function Home() {
  return (
    <div className={styles.home}>
      <Sidebar />
      <Mainbar />
    </div>
  );
}

export default Home;
