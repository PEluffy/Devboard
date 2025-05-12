import styles from "../../css/SbBody.module.css";
import { LayoutDashboard } from "lucide-react";
import { Bookmark } from "lucide-react";
import { NotebookPen } from "lucide-react";
import { Github } from "lucide-react";
import { Link, NavLink } from "react-router";

function SbBody() {
  return (
    <div className={styles.body}>
      <div>
        {" "}
        <NavLink
          to="/Dashboard"
          className={({ isActive }) =>
            `${styles.itemscontainerEach} ${styles.link} ${
              isActive ? styles.active : ""
            }`
          }
        >
          {" "}
          <LayoutDashboard color="grey" />
          Dashboard
        </NavLink>
      </div>
      <div>
        {" "}
        <NavLink
          to="/bookmark"
          className={({ isActive }) =>
            `${styles.itemscontainerEach} ${styles.link} ${
              isActive ? styles.active : ""
            }`
          }
        >
          {" "}
          <Bookmark color="grey" />
          Bookmark
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/Note"
          className={({ isActive }) =>
            `${styles.itemscontainerEach} ${styles.link} ${
              isActive ? styles.active : ""
            }`
          }
        >
          {" "}
          <NotebookPen color="grey" />
          Note
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/github"
          className={({ isActive }) =>
            `${styles.itemscontainerEach} ${styles.link} ${
              isActive ? styles.active : ""
            }`
          }
        >
          {" "}
          <Github color="grey" />
          Github
        </NavLink>
      </div>
    </div>
  );
}

export default SbBody;
