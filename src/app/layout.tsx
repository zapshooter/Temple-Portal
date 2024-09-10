import type { Metadata } from 'next';
import { Volkhov } from 'next/font/google';
import './globals.css';
import { AOSInit } from './components/AOS';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component

const raleway = Volkhov({
  subsets: ['latin'],
  weight: '700',
});

export const metadata: Metadata = {
  title: 'Dbcpl Temple Template',
  description: 'A Travel Agency Landing Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={raleway.className}>
        <Header /> {/* Add Header here */}
        <main>{children}</main>
        <Footer /> {/* Add Footer here */}
      </body>
    </html>
  );
}

