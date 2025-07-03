import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import Home from "./page";

export const metadata = {
  title: "Zscrum",
  description: "Project managment App",
};

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme:shadesOfPurple
    }}>
      <html lang="en">
        <body className={`${inter.className} dotted-background`}>
          <ThemeProvider attribute={"class"} defaultTheme={"dark"}>
            <Header />

            <main className="min-h-screen"> {children}</main>
            <footer className="bg-gray-900 py-12">
              {" "}
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Random Creation</p>{" "}
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
