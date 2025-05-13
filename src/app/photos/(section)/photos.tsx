"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/cursor.css";
import { motion } from "framer-motion";

const items = [
	{
		img: "https://res.cloudinary.com/duoycuhvh/image/upload/v1746790681/BF1016_1_pm0lgf.jpg",
		title: "A nighttime journey",
		subtitle: "Art film",
		year: "2025",
	},
	{
		img: "https://res.cloudinary.com/duoycuhvh/image/upload/v1746790669/BF1018_1_jomtyv.jpg",
		title: "Dream in motion",
		subtitle: "Documentary",
		year: "2024",
	},
	{
		img: "https://res.cloudinary.com/duoycuhvh/image/upload/v1746790668/BF1017_1_ih1fkx.jpg",
		title: "Shadows & light",
		subtitle: "Short film",
		year: "2023",
	},
	{
		img: "https://res.cloudinary.com/duoycuhvh/image/upload/v1746790668/BF1089_1_fv7sxl.jpg",
		title: "Urban echoes",
		subtitle: "Street photography",
		year: "2022",
	},
	{
		title: "Still whispers",
		subtitle: "Fine art",
		year: "2021",
		img: "https://res.cloudinary.com/duoycuhvh/image/upload/v1746790664/BF1012_1_gmzsob.jpg",
	},
	{
		title: "Muted frames",
		subtitle: "Conceptual",
		year: "2020",
		img: "https://res.cloudinary.com/duoycuhvh/image/upload/v1746790661/BF1011_1_bjlrhm.jpg",
	},
	{
		title: "Muted frames",
		subtitle: "Conceptual",
		year: "2020",
		img: "https://res.cloudinary.com/duoycuhvh/image/upload/v1746790660/BF1010_1_bq73q0.jpg",
	},
	{
		title: "Muted frames",
		subtitle: "Conceptual",
		year: "2020",
		img: "https://res.cloudinary.com/duoycuhvh/image/upload/v1746790658/BF1015_1_eifrdc.jpg",
	},
	{
		title: "Muted frames",
		subtitle: "Conceptual",
		year: "2020",
		img: "https://res.cloudinary.com/duoycuhvh/image/upload/v1746790658/BF1013_1_gvsma5.jpg",
	},
	{
		title: "Muted frames",
		subtitle: "Conceptual",
		year: "2020",
		img: "https://res.cloudinary.com/duoycuhvh/image/upload/v1746790655/BF1014_1_se8c4k.jpg",
	},
];

const Photos = () => {
	const [layout, setLayout] = useState<"one" | "two">("two");

	useEffect(() => {
		AOS.init({ duration: 800, once: true });
	}, []);

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
					All Photos
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
								layout === "one" ? "h-screen snap-start" : ""
							}`}
							data-aos={layout === "one" ? "fade-up" : ""}
							data-aos-delay={layout === "one" ? index * 100 : 0}
						>
							<div
								className={`relative w-full ${
									layout === "one" ? "h-full" : "h-[220px] md:h-[300px]"
								} rounded-xl md:rounded-2xl overflow-hidden`}
							>
								<Image
									src={item.img}
									alt={item.title}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-110"
									quality={90}
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
								<div className="absolute inset-0 bg-black/40 z-[1]" />
							</div>

							{/* <div className="absolute left-3 bottom-3 md:left-6 md:bottom-6 z-10">
								<div className="flex flex-col">
									<span className="text-white font-manrope font-[400] text-base md:text-xl">
										{item.title}
									</span>
									<span className="text-white font-manrope font-[400] text-sm md:text-lg">
										{item.subtitle}
									</span>
								</div>
							</div> */}

							{/* <div className="absolute z-10 right-3 bottom-3 md:right-6 md:bottom-6">
								<span className="text-white font-manrope font-[400] text-sm md:text-lg">
									{item.year}
								</span>
							</div> */}

							<div className="absolute z-10 right-3 top-3 md:right-6 md:top-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<span className="text-white font-manrope font-[400] text-sm md:text-lg">
									View
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Photos;
