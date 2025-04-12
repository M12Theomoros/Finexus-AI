import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finexus AI",
  description:
    "Finexus AI revolutionizes your financial experience with cutting-edge AI tools, personalized insights, and seamless integration across platforms. Join us today to unlock smarter financial solutions.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/*header*/}
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          {/*footer*/}
          <footer className="bg-gray-200 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>&copy; 2025 Finexus AI. All rights reserved.</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
