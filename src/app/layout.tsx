import type { Metadata } from "next";

import {
	Abel,
	Bebas_Neue,
	Epilogue,
	Geist,
	Geist_Mono,
	Inter,
	Manrope,
	Red_Hat_Display,
} from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const epilogue = Epilogue({
	subsets: ["latin"],
	variable: "--font-epilogue",
	weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const abel = Abel({
	subsets: ["latin"],
	variable: "--font-abel",
	weight: ["400"],
});

const red_hat_display = Red_Hat_Display({
	subsets: ["latin"],
	variable: "--font-red_hat_display",
	weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	weight: ["300", "400", "500", "600", "700", "800"],
});

const bebas = Bebas_Neue({
	subsets: ["latin"],
	variable: "--font-bebas",
	weight: ["400"],
});

const manrope = Manrope({
	subsets: ["latin"],
	variable: "--font-manrope",
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Hukkash Portfolio",
	description: "Hukkash Portfolio",
	icons: {
		icon: "/icons/MH.png",
		shortcut: "/icons/MH.png",
		apple: "/icons/MH.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${epilogue.variable} ${red_hat_display.variable} ${abel.variable} ${inter.variable} ${manrope.variable} ${bebas.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
