import { Link } from "react-router-dom";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div>
      <h2 className={styles.welcometext}>
        Welcome. Please visit either the <Link to={"/cases"}>Cases</Link> or{" "}
        <Link to={"/deaths"}>Deaths</Link> pages
      </h2>
    </div>
  );
};

export default Home;
