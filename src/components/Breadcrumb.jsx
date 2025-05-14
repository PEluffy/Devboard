import { useLocation } from "react-router-dom";
import { Key, MoveLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import styles from "../css/Breadcrumb.module.css";
function Breadcrumb() {
  const location = useLocation();
  const currentPath = location.pathname.split("/");

  console.log(currentPath);
  return (
    <div className={styles.breadcrumb}>
      <MoveLeft />
      <span className={styles.line}>| </span>Home
      {currentPath.map((p) => (
        <p key={p} className={styles.breadcrumb}>
          {p}
          <ChevronRight color="grey" />
        </p>
      ))}
    </div>
  );
}

export default Breadcrumb;
