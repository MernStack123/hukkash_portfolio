import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Photos from "./(section)/photos";

export default function Home() {
	return (
		<main className="relative flex h-full w-full overflow-hidden">
			<div className="flex h-full w-full flex-col items-center justify-center bg-[#000000]">
				<Navbar />
				<Photos />
				<Footer />
			</div>
		</main>
	);
}
