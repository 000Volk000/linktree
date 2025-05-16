import darioAsl from "../assets/darioAsl.jpg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <a
        href="https://www.uco.es/aulasoftwarelibre/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.centralLogo}
      >
        <img src={darioAsl.src} alt="darioAslImage" />
      </a>
    </div>
  );
}
