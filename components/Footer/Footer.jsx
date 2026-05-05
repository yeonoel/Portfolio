import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footerWrap}>
            <footer className={styles.footer}>
                <p className={styles.copy}>© {new Date().getFullYear()} YPN Kernel.</p>
                <p className={styles.links}>
                    <a href="https://github.com/yeonoel" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/ypn-kernel-371157383/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </p>
            </footer>
        </div>
    );
}