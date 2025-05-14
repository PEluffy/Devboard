import styles from "../../css/SbSearchBox.module.css";
import { Search } from "lucide-react";
import { Command } from "lucide-react";
function SbSearchBox() {
  return (
    <div className={styles.container}>
      <Search size={16} strokeWidth={1} color="#333" />
      <input
        name="Input"
        placeholder="Search..."
        className={styles.input}
        size="10"
        type="text"
      />
      <div className={styles.command}>
        <Command size={16} strokeWidth={1} />F
      </div>
    </div>
  );
}

export default SbSearchBox;
