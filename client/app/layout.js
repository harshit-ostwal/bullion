import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const jarkataSans = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--JarkataSans",
  preload: true,
  adjustFontFallback: true
});


export const metadata = {
  title: "Bullion Trading",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jarkataSans.variable} font-JarkataSans`}>
        <div className="flex flex-col w-full min-h-screen">
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <div className="flex-1 w-full h-full">
            {children}
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
