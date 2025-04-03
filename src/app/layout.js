// src/app/layout.js

import './globals.css';
import Header from '../components/Header'; 
import { Roboto } from 'next/font/google';

// Configure Roboto
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
    default: 'Alex Loughlin - Portfolio',
  },
  description: 'Portfolio website for Alex Loughlin, front-end developer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <Header />
        <main>{children}</main>
        {/* You could add a <Footer /> component here later */}
      </body>
    </html>
  );
}