'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navigation.module.css'
import { useTheme } from '../ThemeProvider/ThemePriver'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const { theme, toggle } = useTheme();

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    YPN<span style={{ color: '#4A9EE8' }}>.</span>
                </Link>

                {/* Bouton thème */}
                <button
                    className={styles.themeToggle}
                    onClick={toggle}
                    aria-label="Changer le thème"
                >
                    {theme === 'dark' ? '☀️' : '🌙'}
                </button>

                {/* Burger */}
                <button
                    className={styles.burger}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span className={isOpen ? styles.burgerOpen : ''}></span>
                    <span className={isOpen ? styles.burgerOpen : ''}></span>
                    <span className={isOpen ? styles.burgerOpen : ''}></span>
                </button>

                {/* Menu */}
                <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
                    <li>
                        <Link href="/" className={pathname === '/' ? `${styles.link} ${styles.active}` : styles.link} onClick={closeMenu}>
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link href="/projets" className={pathname.startsWith('/projets') ? `${styles.link} ${styles.active}` : styles.link} onClick={closeMenu}>
                            Projets
                        </Link>
                    </li>
                    <li>
                        <Link href="/formation" className={pathname.startsWith('/formation') ? `${styles.link} ${styles.active}` : styles.link} onClick={closeMenu}>
                            Formations
                        </Link>
                    </li>
                    <li>
                        <Link href="/experiences" className={pathname.startsWith('/experiences') ? `${styles.link} ${styles.active}` : styles.link} onClick={closeMenu}>
                            Expériences
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className={pathname === '/contact' ? `${styles.link} ${styles.active}` : styles.link} onClick={closeMenu}>
                            Contact moi
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}