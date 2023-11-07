import styles from "./Header.module.css";
import NavLinkContainer from "../Navigation/NavLinkContainer/NavLinkContainer";
import CovidIcon from "../layout/icons/CovidIcon/CovidIcon";
const pages = [
  { label: "Home", path: "" },
  { label: "Cases", path: "cases" },
  { label: "Deaths", path: "deaths" },
];

function ResponsiveHeader() {
  return (
    <header className={styles.header}>
      <CovidIcon />
      <NavLinkContainer pages={pages} />
    </header>
  );
}
export default ResponsiveHeader;
