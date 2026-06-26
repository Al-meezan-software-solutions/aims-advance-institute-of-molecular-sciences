import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AIMS-PAGE — Advanced Institute of Molecular Sciences',
  description:
    'AIMS-PAGE (Pharma-Agri & Environmental) is a multidisciplinary research and testing laboratory. For Quality Life — advancing food safety, pharmaceutical integrity, and environmental health.',
  keywords: [
    'molecular sciences', 'pharmaceutical testing', 'agri-biotechnology',
    'environmental testing', 'bioinformatics', 'cell culture', 'CRISPR',
    'PCR testing', 'contract laboratory', 'AIMS-PAGE',
  ],
  openGraph: {
    title: 'AIMS-PAGE — Advanced Institute of Molecular Sciences',
    description:
      'For Quality Life. Multidisciplinary research and testing across Pharma, Agri & Environmental domains.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <Nav />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
