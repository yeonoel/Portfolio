import Image from 'next/image'
import styles from './page.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>À propos de moi</h1>

            <div className={styles.content}>
                <div className={styles.bio}>
                    <div className={styles.bioHeader}>
                        <Image
                            src="/images/photo.png"
                            alt="Yeo Noel"
                            className={styles.avatar}
                            width={200}
                            height={200}
                        />
                        <div>
                            <p>
                                Je suis développeur Fullstack à dominance Backend, basé à Abidjan.
                                J&apos;ai 3 ans d&apos;expérience — en entreprise sur des projets
                                d&apos;envergure, et en solo où j&apos;ai conçu, construit et déployé
                                des produits complets de zéro à production.
                            </p>
                            <p>
                                <strong>Le problème est résolu avant d&apos;écrire la première
                                    ligne de code.</strong> J&apos;ai construit Kernel et TechCampus
                                seul — deux produits live qui résolvent de vrais problèmes pour
                                de vraies personnes en Côte d&apos;Ivoire.
                            </p>
                        </div>
                    </div>
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
                                <li>React, Angular</li>
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
