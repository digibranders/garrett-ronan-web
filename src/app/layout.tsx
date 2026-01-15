import type { Metadata } from 'next';
import "@/styles/index.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "GKR Hospitality",
  description: "Simply Practical Yet Creative Solutions for Hospitality",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#141414] text-white selection:bg-[#c5a059] selection:text-white overflow-x-hidden w-full">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
