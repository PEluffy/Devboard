import styles from "../../css/SbBody.module.css";
import { LayoutDashboard, Bookmark, NotebookPen, Github } from "lucide-react";
import { NavLink } from "react-router-dom";
import navLinkStyles from "../../css/NavLink.module.css";

const navItems = [
  { to: "/Dashboard", label: "Dashboard", Icon: LayoutDashboard },
  { to: "/bookmark", label: "Bookmark", Icon: Bookmark },
  { to: "/Note", label: "Note", Icon: NotebookPen },
  { to: "/github", label: "Github", Icon: Github },
];

function SbBody() {
  return (
    <div className={styles.body}>
      {navItems.map(({ to, label, Icon }) => (
        <div key={to}>
          <NavLink
            to={to}
            className={({ isActive }) =>
              `${navLinkStyles.itemscontainerEach} ${navLinkStyles.link} ${
                isActive ? navLinkStyles.active : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon color={isActive ? "black" : "grey"} />
                {label}
              </>
            )}
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default SbBody;
