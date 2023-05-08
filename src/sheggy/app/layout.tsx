import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";
import NavBar from "./components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sheggy Token",
  description: "Sheggy Token",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
