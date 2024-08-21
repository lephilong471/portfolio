import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./custom.css";
import StoreProvider from "@/app/StoreProvider";

//style swiper
import "swiper/css"; // Core Swiper styles
import "swiper/css/parallax";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";

//style splitting
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

//style aos
import "aos/dist/aos.css";

import Header from "@/Layouts/Header";
import Footer from "@/Layouts/Footer";
import MetaImage from "@/public/images/basic/meta.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Hải Sâm Logistics",
   description: "Công ty TNHH Logistics Hải Sâm",
   metadataBase: new URL('https://haisamlogistics.com/'),
   openGraph: {
      title: "Hải Sâm Logistics",
      description: "Công ty TNHH Logistics Hải Sâm",
      images: [
         {
            url: MetaImage.src,
            width: 800,
            height: 600,
            alt: "Hình nền",
         },
      ],
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <head>
            {/* Link tới Bootstrap CSS */}
            <link
               rel="stylesheet"
               href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
               integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
               crossOrigin="anonymous"
            />

            {/* Bootstrap và các dependencies JavaScript */}
            <script
               src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
               integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
               crossOrigin="anonymous"
               defer
            ></script>
            <script
               src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
               integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
               crossOrigin="anonymous"
               defer
            ></script>
            <script
               src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
               integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
               crossOrigin="anonymous"
               defer
            ></script>
         </head>
         <body className={inter.className}>
            <StoreProvider>
               <Header />
               {children}
               <Footer />
            </StoreProvider>
         </body>
      </html>
   );
}
