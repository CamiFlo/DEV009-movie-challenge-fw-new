//import logo from "../assets/logo50years.jpg";
import logo from "../assets/film.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Link to="/">
        <header className={styles.headerContainer}>
          <img
            className={styles.logofilm}
            src={logo}
            alt={"old film tape"}
            /*className={styles.logo50}
            src={logo}
            alt="Logo 50 years of hip hop"*/
            width={100}
            height={100}
          />

          <h1 className={styles.webTitle} style={{ fontFamily: "Harting" }}>
            Classic Cinema
          </h1>
        </header>
      </Link>
    </>
  );
}
