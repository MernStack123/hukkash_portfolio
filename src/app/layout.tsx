import type { Metadata } from "next";

import { Bebas_Neue, Manrope } from "next/font/google";
import "../styles/globals.css";

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
			<body className={`${manrope.variable} ${bebas.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
