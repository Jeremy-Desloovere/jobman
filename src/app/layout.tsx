import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import Intro from "@/components/Intro";
import Help from "@/components/Help";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jobman",
  description: "Aide Jérémy à trouver un job !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Intro />
          {children}
          <Help />
        </main>

        <Footer />
      </body>
    </html>
  );
}
