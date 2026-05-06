import { Inter, Poppins } from 'next/font/google'
import "./globals.css"
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import { ThemeProvider } from '@/components/ThemeProvider/ThemePriver'


// Configurer Inter pour le texte courant
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Configurer Poppins pour les titres
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  title: "Yeo pevrogui noel",
  description: "Software Engineer Fullstack. Curieux de nature.",
}


export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}