import styles from "../../css/SbFooter.module.css";
import navLinkStyles from "../../css/NavLink.module.css";
import { CircleHelp, Bell } from "lucide-react";
import { NavLink } from "react-router-dom";
function SbFooter() {
  const footerItems = [
    { to: "/Help", label: "Help", Icon: CircleHelp },
    { to: "/Notification", label: "Notifications", Icon: Bell },
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
          {label}
        </NavLink>
      ))}
    </div>
  );
}

export default SbFooter;
