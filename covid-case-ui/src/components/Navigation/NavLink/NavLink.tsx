import { Link } from "react-router-dom";
import styles from "./NavLink.module.css";

const NavLink = ({ to, label }: { to: string; label: string }) => {
  return (
    <Link to={to} className={styles.navlink}>
      {label}
    </Link>
  );
};

export default NavLink;
