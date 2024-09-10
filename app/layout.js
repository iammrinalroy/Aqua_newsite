import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import FixedButtons from "@/components/FixedButtons";
import { Toaster } from "react-hot-toast";
import Script from 'next/script';
const inter=Inter({ subsets: ["latin"] });

export const metadata={
  title: "Aqua Global Systems",
  description: "Driving Business Growth with Professional Guidance at Aqua Global Systems",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
    
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RSGMJ3PZZG">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());
  gtag('config', 'G-RSGMJ3PZZG');
</script>  
    </head>
      <body className={inter.className}>
        <MantineProvider>
          <div id="root" className="flex flex-col">
            <Navbar />
            {children}
            <FixedButtons />
            <Footer />
            <Toaster position="top-center" />
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
