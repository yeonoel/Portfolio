import styles from './page.module.css'
export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>À propos de moi</h1>

      <div className={styles.content}>
        <div className={styles.bio}>
          <h2>Qui suis-je ?</h2>
          <p>
            Je suis développeur Fullstack à dominance Backend, basé à Abidjan.
            J&apos;ai 3 ans d&apos;expérience — en entreprise sur des projets
            d&apos;envergure, et en solo où j&apos;ai conçu, construit et déployé
            des produits complets de zéro à production.
          </p>
          <p>
            Ce qui me différencie ? Je ne commence pas à coder avant de comprendre
            le problème. <strong>Le problème est résolu avant d&apos;écrire
              la première ligne de code.</strong> C&apos;est ma philosophie,
            et c&apos;est ce qui rend mes produits utiles — pas juste fonctionnels.
          </p>
        </div>

        <div className={styles.skills}>
          <h2>Compétences</h2>
          <div className={styles.skillGrid}>
            <div className={styles.skillCategory}>
              <h3>Backend</h3>
              <ul>
                <li>NestJS & Spring Boot</li>
                <li>Node.js & TypeScript</li>
                <li>TypeORM & Prisma</li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h3>Frontend</h3>
              <ul>
                <li>React & Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h3>DevOps & BDD</h3>
              <ul>
                <li>PostgreSQL & MongoDB</li>
                <li>Docker & CI/CD</li>
                <li>Vercel & Render</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}