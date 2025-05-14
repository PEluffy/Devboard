import styles from "../css/MainContent.module.css";
function MainContent({ children }) {
  return <div className={styles.maincontent}>{children}</div>;
}

export default MainContent;
