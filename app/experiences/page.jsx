import styles from "./page.module.css";
import experiencesData from "@/data/experiences.json";

export default function Experiences() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Expériences</h1>
            <p className={styles.description}>Mon parcours professionnel</p>

            <div className={styles.timeline}>
                {experiencesData.map((exp, index) => (
                    <div className={styles.item} key={index}>
                        <div className={styles.avatar}>{exp.initiale}</div>

                        <div className={styles.content}>
                            <span className={styles.entreprise}>{exp.entreprise}</span>
                            <span className={styles.poste}>{exp.poste}</span>
                            {exp.techs && (
                                <div className={styles.techs}>
                                    {exp.techs.map((tech, i) => (
                                        <span key={i} className={styles.tech}>{tech}</span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className={styles.periode}>
                            {exp.debut} – {exp.fin}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}