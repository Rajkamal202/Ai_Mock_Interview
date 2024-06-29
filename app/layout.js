import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider  } from "@clerk/nextjs";
import PropTypes from "prop-types";
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({children}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <Toaster />
      {children}</body>
    </html>
    </ClerkProvider>
  );
}

// Add prop type validation
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};