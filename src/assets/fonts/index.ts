// ___Local Fonts____
import localFont from 'next/font/local';

export const fontNeue = localFont({
  src: './PP_Neue_Machina/neue-machina.ttf',
  variable: '--font-neue', 
  display: 'swap', 
});

// ___Google Fonts____
import { Space_Grotesk } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});
