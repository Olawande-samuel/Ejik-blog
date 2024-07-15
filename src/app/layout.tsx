import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ReactQueryProvider from "@/Providers";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ejik News and Stories",
	description: "Stories and happenings from around the world",
	openGraph: {
		title: "Ejik News and Stories",
		description: "Stories and happenings from around the world",
		type: "website",
		url: process.env.NEXT_PUBLIC_WEBSITE_URL,
		siteName: "Ejik News and Stories",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={outfit.className}>
				<ReactQueryProvider>
					<Navbar />
					{children}
					<Footer />
				</ReactQueryProvider>
			</body>
		</html>
	);
}
