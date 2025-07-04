import darioAsl from "../assets/darioAsl.jpg";
import darioAslWebp from "../assets/darioAsl.webp";
import styles from "./page.module.css";
import treeLogo from "../assets/treeLogoTrasparent.svg";
import Image from "next/image";
import LinkButton from "./LinkButton";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "calc(2vw + 5vh - 10vmin) 0",
      }}
    >
      <div className="flex justify-center items-center">
        <picture>
          <source srcSet={treeLogo.src} type="image/webp" />
          <Image
            src={treeLogo}
            alt="LinkTree Logo"
            className={styles.smallTree}
            priority
            quality={85}
            sizes="(max-width: 768px) 200px, 400px"
          />
        </picture>
        <p className={styles.firstText}>LinkTree</p>
      </div>
      <div className="flex justify-center items-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.centralImage}
        >
          <picture>
            <source srcSet={darioAslWebp.src} type="image/webp" />
            <Image
              src={darioAsl}
              alt="Darío Martínez Kostyuk"
              width={300}
              height={300}
              quality={90}
              placeholder="blur"
              sizes="(max-width: 768px) 200px, 300px"
              style={{
                objectFit: "cover",
              }}
            />
          </picture>
        </a>
      </div>
      <div className="flex justify-center items-center">
        <p className={styles.name}>Darío Martínez Kostyuk</p>
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
      <LinkButton
        text="LinkedIn"
        href="https://www.linkedin.com/in/dar%C3%ADo-mart%C3%ADnez-kostyuk-931994330/"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-linkedin"
            viewBox="0 0 24 24"
          >
            <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
          </svg>
        }
        variant="linkedin"
      />
      <LinkButton
        text="GitHub"
        href="https://github.com/000Volk000"
        icon={
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="28"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
          </svg>
        }
        variant="github"
      />
      <LinkButton
        text="Twitter / X"
        href="https://x.com/000Volk000"
        icon={
          <svg
            viewBox="0 0 16 16"
            className="bi bi-twitter"
            fill="currentColor"
            height="18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
          </svg>
        }
        variant="twitter"
      />
      {/* <LinkButton text="Prueba" href="http://localhost:3000/" /> */}
    </div>
  );
}
