import { ThemeProvider } from '../components/ThemeProvider/ThemeProvider';

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