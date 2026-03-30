import { Inter, Science_Gothic } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const scienceGothic = Science_Gothic({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-science-gothic",
});

export const metadata = {
  title: {
    default: "Parabellum Med Tech LLC",
    template: "%s | Parabellum Med Tech",
  },
  description: "ASC-focused orthopedic solutions",
icons: {
  icon: [
    { url: "/icon.png", sizes: "32x32", type: "image/png" },
  ],
  shortcut: "/icon.png",
  apple: "/icon.png",
},
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${scienceGothic.variable} h-full antialiased`}
    >
      <body className={`${inter.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}