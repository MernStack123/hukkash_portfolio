import Navbar from "@/components/Navbar";
import Hero from "./(home)/Hero";
import About from "./(home)/About";
import Footer from "@/components/Footer";
import Videos from "./(home)/Videos";
import Photos from "./(home)/Photos";

export default function Home() {
	return (
		<main className="relative flex h-full w-full overflow-hidden">
			<div className="flex h-full w-full flex-col items-center justify-center bg-[#000000]">
				<Navbar />
				<Hero />
				<About />
				<Videos />
				<Photos />
				<Footer />
			</div>
		</main>
	);
}
