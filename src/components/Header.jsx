import logo from "../assets/logo50years.jpg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <Link to="/">
        <header className={styles.headerContainer}>
          <img
            className={styles.logo50}
            src={logo}
            alt="Logo 50 years of hip hop"
            width={100}
            height={100}
          />

          <h1 className={styles.webTitle}>HIP HOP CULTURE CINEMA</h1>
        </header>
      </Link>
    </>
  );
}
