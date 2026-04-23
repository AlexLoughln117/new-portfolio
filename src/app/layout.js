// src/app/layout.js

import './globals.css';
import Header from '../components/Header';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata = {
  title: {
    template: '%s | Alex Loughlin',
    default: 'Alex Loughlin | Web Development & Digital Delivery',
  },
  description: 'Full-stack web developer turned digital director with 10 years building and delivering web projects.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <Header />
        <main style={{ paddingTop: '64px' }}>{children}</main>
      </body>
    </html>
  );
}
