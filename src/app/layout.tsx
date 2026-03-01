import type { Metadata } from 'next';
import { Playfair_Display, Raleway } from 'next/font/google';
import '@/shared/styles/globals.scss';

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Національний художній музей України',
  description: 'Мистецтво ХІХ - ХХ ст. Внесок українських митців у світову культуру 19-20ст',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${playfair.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
