import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobMan | Game",
  description: "Aide Jérémy à trouver un petit job !",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://jobman.vercel.app/",
    title: "JobMan | Game",
    description: "Aide Jérémy à trouver un grand job !",
    images: [
      {
        url: "https://jobman.vercel.app/assets/jobman.png",
      },
    ],
  },
};
export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
