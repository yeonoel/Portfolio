import styles from "./page.module.css"
import Tag from "../components/Tag/Tag";
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

        <p className={styles.eyebrow}>Portfolio</p>

        <h1 className={styles.heroTitle}>
          Bonjour, je suis{" "}
          <span className={styles.highlight}>Yeo Pevrogui Noel</span>
        </h1>
        <p className={styles.heroSubtitle}>Développeur Web Full-Stack</p>
        <p className={styles.heroDescription}>
          Je crée des applications web modernes, performantes et accessibles
          avec React, Next.js et Node.js / NestJS, Angular et Spring Boot.
        </p>

        <div className={styles.heroButtons}>
          <a href="/projets" className={`${styles.btn} ${styles.btnPrimary}`}>
            Voir mes projets
          </a>
          <a href="/contact" className={`${styles.btn} ${styles.btnSecondary}`}>
            Me contacter
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
  )
}




