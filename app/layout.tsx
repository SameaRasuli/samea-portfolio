import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
variable: "--font-inter",
subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
variable: "--font-space-grotesk",
subsets: ["latin"],
});

const siteUrl = "https://samea-portfolio.vercel.app";

export const metadata: Metadata = {
metadataBase: new URL(siteUrl),

title: {
default: "Samea Rasuli | Front-End Developer",
template: "%s | Samea Rasuli",
},

description:
"I'm Samea Rasuli, a Front-End Developer and Computer Science student passionate about building modern, responsive, and user-friendly web experiences.",

alternates: {
canonical: "/",
},

icons: {
icon: "/icon.png",
shortcut: "/icon.png",
apple: "/icon.png",
},

authors: [{ name: "Samea Rasuli" }],
creator: "Samea Rasuli",
publisher: "Samea Rasuli",

openGraph: {
title: "Samea Rasuli | Front-End Developer",
description:
"Explore my portfolio, projects, technical skills, and experience in front-end development.",
url: siteUrl,
siteName: "Samea Rasuli Portfolio",
images: [
{
url: "/opengraph-image.png",
width: 1200,
height: 630,
alt: "Samea Rasuli - Front-End Developer Portfolio",
},
],
locale: "en_US",
type: "website",
},

twitter: {
card: "summary_large_image",
title: "Samea Rasuli | Front-End Developer",
description:
"Explore my portfolio, projects, technical skills, and experience in front-end development.",
images: ["/opengraph-image.png"],
},

robots: {
index: true,
follow: true,
googleBot: {
index: true,
follow: true,
},
},
};

export default function RootLayout({
children,
}: LayoutProps<"/">) {
return (
<html
lang="en"
className={`dark ${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
> <body className="min-h-full flex flex-col"> <ThemeProvider>{children}</ThemeProvider> </body> </html>
);
}

