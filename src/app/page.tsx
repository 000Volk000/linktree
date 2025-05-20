import darioAsl from "../assets/darioAsl.jpg";
import styles from "./page.module.css";
import treeLogo from "../assets/treeLogo.png";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "calc(2vw + 5vh - 10vmin) 0",
      }}
    >
      <div className="flex justify-center items-center">
        <img
          src={treeLogo.src}
          alt="treeLogoImage"
          className={styles.smallTree}
        />
        <p className={styles.firstText}>LinkTree</p>
      </div>
      <div className="flex justify-center items-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.centralImage}
        >
          <img src={darioAsl.src} alt="darioAslImage" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full justify-items-center">
        <div
          className={`flex justify-center items-center ${styles.cage}`}
          style={{ width: "100%", maxWidth: "calc(100% - 20px)" }}
        >
          <p className={styles.cageTitle}>About Me</p>
          <p className={styles.defaultFont}>- Full-Stack Explorer</p>
          <p className={styles.defaultFont}>- Quick to learn, hard to bore</p>
        </div>
        <div
          className={`flex justify-center items-center ${styles.cage}`}
          style={{ width: "100%", maxWidth: "calc(100% - 20px)" }}
        >
          <p className={styles.cageTitle}>Formation</p>
          <p className={styles.defaultFont}>- Computer engineering student</p>
          <p className={styles.defaultFont}>
            - Coordinator of SalmorejoTech VII
          </p>
        </div>
      </div>
    </div>
  );
}
