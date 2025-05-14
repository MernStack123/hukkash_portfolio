// "use client";
// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "../../../styles/cursor.css";
// import { motion } from "framer-motion";

// const items = [
// 	{
// 		title: "A nighttime journey",
// 		subtitle: "Art film",
// 		year: "2025",
// 		video: "/videos/1.mp4",
// 	},
// 	{
// 		title: "Dream in motion",
// 		subtitle: "Documentary",
// 		year: "2024",
// 		video: "/videos/2.mp4",
// 	},
// 	{
// 		title: "Shadows & light",
// 		subtitle: "Short film",
// 		year: "2023",
// 		video: "/videos/3.mp4",
// 	},
// 	{
// 		title: "Urban echoes",
// 		subtitle: "Street photography",
// 		year: "2022",
// 		video: "/videos/4.mp4",
// 	},
// 	{
// 		title: "Still whispers",
// 		subtitle: "Fine art",
// 		year: "2021",
// 		video: "/videos/5.mp4",
// 	},
// 	{
// 		title: "Muted frames",
// 		subtitle: "Conceptual",
// 		year: "2020",
// 		video: "/videos/6.mp4",
// 	},
// ];

// const Videos = () => {
// 	const [layout, setLayout] = useState<"one" | "two">("two");

// 	useEffect(() => {
// 		AOS.init({ duration: 800, once: true });
// 	}, []);

// 	return (
// 		<section
// 			className={`w-full bg-[#0a0a0a] pt-40 pb-10 md:pt-44 md:pb-14 px-4 md:px-36 ${
// 				layout === "one" ? "cursor-dot" : ""
// 			}`}
// 		>
// 			<div className="flex flex-col gap-8 md:gap-14">
// 				<motion.h1
// 					className="text-[#fff] text-center font-bebas font-[400] text-7xl tracking-[1px] md:text-[150px]"
// 					initial={{ opacity: 0, y: 50, scale: 0.8 }}
// 					whileInView={{ opacity: 1, y: 0, scale: 1 }}
// 					viewport={{ once: false, amount: 0.5 }}
// 					transition={{ duration: 1.5, ease: "easeOut" }}
// 				>
// 					All Videos
// 				</motion.h1>

// 				<div className="hidden md:flex justify-center gap-4">
// 					<button
// 						onClick={() => setLayout("one")}
// 						className={`px-12 py-4 rounded-md ${
// 							layout === "one" ? "bg-[#000]" : "bg-[#141414]"
// 						} text-white font-medium transition-colors duration-200`}
// 					>
// 						Full
// 					</button>
// 					<button
// 						onClick={() => setLayout("two")}
// 						className={`px-12 py-4 rounded-md ${
// 							layout === "two" ? "bg-[#000]" : "bg-[#141414]"
// 						} text-white font-medium transition-colors duration-200`}
// 					>
// 						Grid
// 					</button>
// 				</div>

// 				<div
// 					className={`grid gap-4 ${
// 						layout === "one"
// 							? "grid-cols-1 md:grid-cols-1"
// 							: "grid-cols-1 md:grid-cols-2"
// 					} ${
// 						layout === "one"
// 							? "snap-y snap-mandatory overflow-y-scroll h-screen md:h-[calc(100vh-240px)] scrollbar-none"
// 							: ""
// 					}`}
// 				>
// 					{items.map((item, index) => (
// 						<div
// 							key={index}
// 							className={`relative p-2 md:p-4 bg-[#141414] group overflow-hidden rounded-xl md:rounded-2xl cursor-pointer ${
// 								layout === "one" ? "h-[calc(100vh+80px)] snap-start" : ""
// 							}`}
// 							data-aos={layout === "one" ? "fade-up" : ""}
// 							data-aos-delay={layout === "one" ? index * 100 : 0}
// 						>
// 							{/* <div className="absolute left-3 bottom-3 md:left-6 md:bottom-6 z-10">
// 								<div className="flex flex-col">
// 									<span className="text-white font-manrope font-[400] text-base md:text-xl">
// 										{item.title}
// 									</span>
// 									<span className="text-white font-manrope font-[400] text-sm md:text-lg">
// 										{item.subtitle}
// 									</span>
// 								</div>
// 							</div> */}

// 							{/* <div className="absolute z-10 right-3 bottom-3 md:right-6 md:bottom-6">
// 								<span className="text-white font-manrope font-[400] text-sm md:text-lg">
// 									{item.year}
// 								</span>
// 							</div> */}

// 							<div className="absolute z-10 right-3 top-3 md:right-6 md:top-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// 								<span className="text-white font-manrope font-[400] text-sm md:text-lg">
// 									View
// 								</span>
// 							</div>

// 							<div className="absolute inset-0 bg-black/40 z-[1]" />

// 							<video
// 								src={item.video}
// 								autoPlay
// 								loop
// 								muted
// 								playsInline
// 								className={`w-full h-full object-cover rounded-xl md:rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
// 									layout === "one" ? "md:h-screen" : "md:h-[350px]"
// 								}`}
// 							/>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Videos;

"use client";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/cursor.css";
import { motion } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";

const items = [
	{
		title: "A nighttime journey",
		subtitle: "Art film",
		year: "2025",
		video: "/videos/1.mp4",
	},
	{
		title: "Dream in motion",
		subtitle: "Documentary",
		year: "2024",
		video: "/videos/2.mp4",
	},
	{
		title: "Shadows & light",
		subtitle: "Short film",
		year: "2023",
		video: "/videos/3.mp4",
	},
	{
		title: "Urban echoes",
		subtitle: "Street photography",
		year: "2022",
		video: "/videos/4.mp4",
	},
	{
		title: "Still whispers",
		subtitle: "Fine art",
		year: "2021",
		video: "/videos/5.mp4",
	},
	{
		title: "Muted frames",
		subtitle: "Conceptual",
		year: "2020",
		video: "/videos/6.mp4",
	},
];

const Videos = () => {
	const [layout, setLayout] = useState<"one" | "two">("two");
	const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
	const [playingIndex, setPlayingIndex] = useState<number | null>(null);

	useEffect(() => {
		AOS.init({ duration: 800, once: true });
	}, []);

	const handlePlayPause = (index: number) => {
		const currentVideo = videoRefs.current[index];

		if (!currentVideo) return;

		if (playingIndex !== null && playingIndex !== index) {
			const previousVideo = videoRefs.current[playingIndex];
			if (previousVideo) {
				previousVideo.pause();
			}
		}

		if (currentVideo.paused) {
			currentVideo.play();
			setPlayingIndex(index);
		} else {
			currentVideo.pause();
			setPlayingIndex(null);
		}
	};

	return (
		<section
			className={`w-full bg-[#0a0a0a] pt-40 pb-10 md:pt-44 md:pb-14 px-4 md:px-36 ${
				layout === "one" ? "cursor-dot" : ""
			}`}
		>
			<div className="flex flex-col gap-8 md:gap-14">
				<motion.h1
					className="text-[#fff] text-center font-bebas font-[400] text-7xl tracking-[1px] md:text-[150px]"
					initial={{ opacity: 0, y: 50, scale: 0.8 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={{ once: false, amount: 0.5 }}
					transition={{ duration: 1.5, ease: "easeOut" }}
				>
					All Videos
				</motion.h1>

				<div className="hidden md:flex justify-center gap-4">
					<button
						onClick={() => setLayout("one")}
						className={`px-12 py-4 rounded-md ${
							layout === "one" ? "bg-[#000]" : "bg-[#141414]"
						} text-white font-medium transition-colors duration-200`}
					>
						Full
					</button>
					<button
						onClick={() => setLayout("two")}
						className={`px-12 py-4 rounded-md ${
							layout === "two" ? "bg-[#000]" : "bg-[#141414]"
						} text-white font-medium transition-colors duration-200`}
					>
						Grid
					</button>
				</div>

				<div
					className={`grid gap-4 ${
						layout === "one" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
					} ${
						layout === "one"
							? "snap-y snap-mandatory overflow-y-scroll h-screen md:h-[calc(100vh-240px)] scrollbar-none"
							: ""
					}`}
				>
					{items.map((item, index) => (
						<div
							key={index}
							className={`relative p-2 md:p-4 bg-[#141414] group overflow-hidden rounded-xl md:rounded-2xl cursor-pointer ${
								layout === "one" ? "h-[calc(100vh+80px)] snap-start" : ""
							}`}
							data-aos={layout === "one" ? "fade-up" : ""}
							data-aos-delay={layout === "one" ? index * 100 : 0}
						>
							{/* Overlay content */}
							{/* <div className="absolute left-3 bottom-3 md:left-6 md:bottom-6 z-10">
								<div className="flex flex-col">
									<span className="text-white font-manrope font-[400] text-base md:text-xl">
										{item.title}
									</span>
									<span className="text-white font-manrope font-[400] text-sm md:text-lg">
										{item.subtitle}
									</span>
								</div>
							</div>

							<div className="absolute z-10 right-3 bottom-3 md:right-6 md:bottom-6">
								<span className="text-white font-manrope font-[400] text-sm md:text-lg">
									{item.year}
								</span>
							</div> */}
							<button
								onClick={(e) => {
									e.stopPropagation();
									handlePlayPause(index);
								}}
								className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-black/60 rounded-full p-4 opacity-0 group-hover:opacity-100 transition duration-300"
							>
								{playingIndex === index ? <FaPause /> : <FaPlay />}
							</button>

							<div className="absolute inset-0 bg-black/40 z-[1]" />

							<video
								ref={(el) => {
									videoRefs.current[index] = el;
								}}
								src={item.video}
								loop
								playsInline
								className={`w-full h-full object-cover rounded-xl md:rounded-2xl transition-transform duration-300 group-hover:scale-105 ${
									layout === "one" ? "md:h-screen" : "md:h-[350px]"
								}`}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Videos;
