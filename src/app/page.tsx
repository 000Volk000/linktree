import darioAsl from "../assets/darioAsl.jpg";
import styles from "./page.module.css";
import treeLogo from "../assets/treeLogo.png";

export default function Home() {
  return (
    <div
      style={{
        background: "white",
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
    </div>
  );
}
