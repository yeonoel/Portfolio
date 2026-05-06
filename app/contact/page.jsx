import ContactForm from "./ContactForm/ContactForm";
import styles from "./page.module.css";

export default function Contact() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Me Contacter</h1>
            <p className={styles.description}>
                Une question ? Un projet ? N&apos;hésitez pas à me contacter !
            </p>

            <div className={styles.contactWrapper}>
                <div className={styles.contactInfo}>
                    <h2>Coordonnées</h2>
                    <div className={styles.infoItem}>
                        <strong>Email :</strong>
                        <a href="mailto:yeopevroguinoel@gmail.com">yeopevroguinoel@gmail.com</a>
                    </div>
                    <div className={styles.infoItem}>
                        <strong>LinkedIn :</strong>
                        <a
                            href="https://www.linkedin.com/in/ypn-kernel-371157383/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Mon profil LinkedIn
                        </a>
                    </div>
                    <div className={styles.infoItem}>
                        <strong>GitHub :</strong>
                        <a
                            href="https://github.com/yeonoel"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Mon profil GitHub
                        </a>
                    </div>
                    <div className={styles.infoItem}>
                        <strong>WhatsApp :</strong>

                        <a href="https://wa.me/2250565676413?text=Bonjour%20j%27ai%20vu%20votre%20portfolio%20et%20je%20..."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Me contacter sur WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
}