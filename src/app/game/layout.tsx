import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jobman",
  description: "Aide Jérémy à trouver un job !",
};

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className}>
      <div className=" border-red-200 border-2 ">{children}</div>
    </div>
  );
}
