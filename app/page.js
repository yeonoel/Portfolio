import styles from "./page.module.css"
import Tag from "../components/Tag/Tag";
import Image from "next/image";
const technologies = [
  "React",
  "Angular",
  "Node.js",
  "TypeScript",
  "NestJS",
  "Spring Boot",
  "Tailwind CSS",
]

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>

        {/* Bloc nom + photo côte à côte */}
        <div className={styles.heroTop}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Hi, je suis{" "}
              <span className={styles.highlight}>
                Yeo <br /> Pevrogui Noel
              </span>
            </h1>
            <p className={styles.heroSubtitle}>Développeur Fullstack. Curieux de nature.</p>
          </div>

          <div className={styles.heroImageWrapper}>
            <Image
              src="/images/photo.png"
              alt="Yeo Pevrogui Noel"
              width={160}
              height={160}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>

        <p className={styles.heroDescription}>
          Software Engineer Fullstack | 3 ans d'XP. Compétent en TypeScript, React, Nest.js et Java.
          Orienté principes logiciels, OOP et structures de données.
        </p>

        <div className={styles.heroButtons}>
          <a href="/experiences" className={`${styles.btn} ${styles.btnPrimary}`}>
            Voir mes expériences
          </a>
          <a href="/contact" className={`${styles.btn} ${styles.btnSecondary}`}>
            Voir mes projets
          </a>
        </div>

        <div className={styles.divider} />

        <div className={styles.tagsContainer}>
          {technologies.map((tech, index) => (
            <Tag key={index}>{tech}</Tag>
          ))}
        </div>

      </div>
    </div>
  );
}



