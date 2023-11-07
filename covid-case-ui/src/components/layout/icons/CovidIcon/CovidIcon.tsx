import { Link } from "react-router-dom";
import covidIconImage from "./covid_icon.png";
import styles from "./CovidIcon.module.css";

const CovidIcon = () => {
  return (
    <Link to="/">
      <img
        className={styles.covidicon}
        src={covidIconImage}
        alt="covid-icon"
      ></img>
    </Link>
  );
};

export default CovidIcon;
