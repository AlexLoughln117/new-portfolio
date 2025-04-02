// src/app/layout.js

import './globals.css';
import Header from '../components/Header'; // <-- Import the Header
import { Roboto } from 'next/font/google'; // <-- Import Roboto

// Configure Roboto
const roboto = Roboto({
  weight: ['400', '700'], // Specify weights you need (e.g., regular 400, bold 700)
  style: ['normal', 'italic'], // Specify styles you need (optional)
  subsets: ['latin'],        // Specify character subsets (usually 'latin')
  display: 'swap',           // Optimal font display strategy
  variable: '--font-roboto', // Define CSS variable name (optional but recommended)
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
        <Header /> {/* <-- Add the Header component here */}
        <main>{children}</main> {/* Optional: wrap children in <main> */}
        {/* You could add a <Footer /> component here later */}
      </body>
    </html>
  );
}