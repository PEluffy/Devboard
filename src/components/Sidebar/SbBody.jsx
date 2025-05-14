import styles from "../../css/SbBody.module.css";
import { LayoutDashboard, Bookmark, NotebookPen, Github } from "lucide-react";
import { NavLink } from "react-router-dom";
import navLinkStyles from "../../css/NavLink.module.css";
import { SidebarContext } from "../../context/SideBarcontext";
import { useContext } from "react";

const navItems = [
  { to: "/dashboard", label: "Dashboard", Icon: LayoutDashboard },
  { to: "/bookmark", label: "Bookmark", Icon: Bookmark },
  { to: "/note", label: "Note", Icon: NotebookPen },
  { to: "/github", label: "Github", Icon: Github },
];

function SbBody() {
  const { isOpen } = useContext(SidebarContext);
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
                {isOpen && label}
              </>
            )}
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default SbBody;
