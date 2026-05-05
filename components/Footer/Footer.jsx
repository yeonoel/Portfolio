import styles from "./Footer.module.css";

export default function Footer({ children }) {
    return (
        <footer className={styles.footer}>
            <p>© {new Date().getFullYear()} YPN kernel.</p>
            <p className={styles.links}>
                <a href="https://github.com/yeonoel" target="_blank">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/ypn-kernel-371157383/" target="_blank">
                    LinkedIn
                </a>
            </p>
        </footer>
    );
}