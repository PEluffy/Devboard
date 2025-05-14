import styles from "../../css/SbFooter.module.css";
import navLinkStyles from "../../css/NavLink.module.css";
import { CircleHelp, Bell } from "lucide-react";
import { NavLink } from "react-router-dom";
import { SidebarContext } from "../../context/SideBarcontext";
import { useContext } from "react";

function SbFooter() {
  const { isOpen } = useContext(SidebarContext);
  const footerItems = [
    { to: "help", label: "Help", Icon: CircleHelp },
    { to: "notification", label: "Notifications", Icon: Bell },
  ];
  return (
    <div className={styles.footer}>
      {footerItems.map(({ to, label, Icon }) => (
        <NavLink
          to={to}
          key={to}
          className={({ isActive }) =>
            `${navLinkStyles.itemscontainerEach} ${navLinkStyles.link} ${
              isActive ? navLinkStyles.active : ""
            }`
          }
        >
          <Icon />
          {isOpen && label}
        </NavLink>
      ))}
    </div>
  );
}

export default SbFooter;
