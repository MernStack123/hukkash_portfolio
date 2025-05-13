// "use client";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { motion } from "framer-motion";

// const photoData = [
// 	{
// 		image:
// 			"https://res.cloudinary.com/duoycuhvh/image/upload/v1746790681/BF1016_1_pm0lgf.jpg",
// 		title: "A nighttime journey",
// 		subtitle: "Art film",
// 		year: "2025",
// 	},
// 	{
// 		image:
// 			"https://res.cloudinary.com/duoycuhvh/image/upload/v1746790669/BF1018_1_jomtyv.jpg",
// 		title: "Dream in motion",
// 		subtitle: "Documentary",
// 		year: "2024",
// 	},
// 	{
// 		image:
// 			"https://res.cloudinary.com/duoycuhvh/image/upload/v1746790668/BF1017_1_ih1fkx.jpg",
// 		title: "Shadows & light",
// 		subtitle: "Short film",
// 		year: "2023",
// 	},
// 	{
// 		image:
// 			"https://res.cloudinary.com/duoycuhvh/image/upload/v1746790668/BF1089_1_fv7sxl.jpg",
// 		title: "Urban echoes",
// 		subtitle: "Street photography",
// 		year: "2022",
// 	},
// ];

// const Photos = () => {
// 	return (
// 		<section className="w-full h-full bg-[#0a0a0a] py-24 md:py-40 px-4 md:px-40">
// 			<div className="flex flex-col gap-10 md:gap-14">
// 				<div>
// 					<h1 className="text-[#fff] text-center font-bebas tracking-[1px] text-5xl md:text-7xl">
// 						<motion.span
// 							className="inline-block"
// 							initial={{ y: 0 }}
// 							animate={{ y: [0, -15, 0, 15, 0] }}
// 							transition={{
// 								duration: 1,
// 								ease: "easeOut",
// 								repeat: Infinity,
// 								repeatType: "loop",
// 							}}
// 						>
// 							P
// 						</motion.span>
// 						{"H"}
// 						<motion.span
// 							className="inline-block"
// 							initial={{ y: 0 }}
// 							animate={{ y: [0, -15, 0, 15, 0] }}
// 							transition={{
// 								duration: 1,
// 								ease: "easeOut",
// 								repeat: Infinity,
// 								repeatType: "loop",
// 							}}
// 						>
// 							O
// 						</motion.span>
// 						{"T"}
// 						<motion.span
// 							className="inline-block"
// 							initial={{ y: 0 }}
// 							animate={{ y: [0, -15, 0, 15, 0] }}
// 							transition={{
// 								duration: 1,
// 								ease: "easeOut",
// 								repeat: Infinity,
// 								repeatType: "loop",
// 							}}
// 						>
// 							O
// 						</motion.span>
// 						{"S"}
// 					</h1>
// 				</div>

// 				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// 					{photoData.map((item, index) => (
// 						<div
// 							key={index}
// 							className="relative p-2 md:p-4 hover:cursor-pointer bg-[#141414] group overflow-hidden rounded-xl md:rounded-2xl"
// 						>
// 							{/* Image wrapper */}
// 							<div className="relative w-full h-[220px] md:h-[350px] rounded-xl md:rounded-2xl overflow-hidden">
// 								<Image
// 									src={item.image}
// 									alt={item.title}
// 									fill
// 									className="object-cover transition-transform duration-300 group-hover:scale-110"
// 									quality={90}
// 									priority={index === 0}
// 								/>
// 								<div className="absolute inset-0 bg-black/40 z-[1]" />
// 							</div>

// 							{/* Left bottom text */}
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

// 							{/* Right bottom year */}
// 							{/* <div className="absolute z-10 right-3 bottom-3 md:right-6 md:bottom-6">
// 								<span className="text-white font-manrope font-[400] text-sm md:text-lg">
// 									{item.year}
// 								</span>
// 							</div> */}

// 							{/* Top right "View" */}
// 							<div className="absolute z-10 right-3 top-3 md:right-6 md:top-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// 								<span className="text-white font-manrope font-[400] text-sm md:text-lg">
// 									View
// 								</span>
// 							</div>
// 						</div>
// 					))}
// 				</div>

// 				{/* All Photos Link */}
// 				<div className="flex justify-center items-center">
// 					<Link
// 						href={"/photos"}
// 						className="group inline-flex items-center gap-2 font-manrope text-white font-[400] text-base cursor-pointer relative"
// 					>
// 						<span
// 							className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full
// 							after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:origin-left
// 							after:transition-transform after:duration-300"
// 						>
// 							All Photos
// 						</span>
// 						<ArrowRight className="transform transition-transform duration-300 group-hover:rotate-0 -rotate-45" />
// 					</Link>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Photos;

"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const photoData = [
	{
		image:
			"https://res.cloudinary.com/duoycuhvh/image/upload/v1746790681/BF1016_1_pm0lgf.jpg",
		title: "A nighttime journey",
		subtitle: "Art film",
		year: "2025",
	},
	{
		image:
			"https://res.cloudinary.com/duoycuhvh/image/upload/v1746790669/BF1018_1_jomtyv.jpg",
		title: "Dream in motion",
		subtitle: "Documentary",
		year: "2024",
	},
	{
		image:
			"https://res.cloudinary.com/duoycuhvh/image/upload/v1746790668/BF1017_1_ih1fkx.jpg",
		title: "Shadows & light",
		subtitle: "Short film",
		year: "2023",
	},
	{
		image:
			"https://res.cloudinary.com/duoycuhvh/image/upload/v1746790668/BF1089_1_fv7sxl.jpg",
		title: "Urban echoes",
		subtitle: "Street photography",
		year: "2022",
	},
];

const Photos = () => {
	return (
		<section className="w-full h-full bg-[#0a0a0a] py-24 md:py-40 px-4 md:px-40">
			<div className="flex flex-col gap-10 md:gap-14">
				{/* Header */}
				<div>
					<h1 className="text-[#fff] text-center font-bebas tracking-[1px] text-5xl md:text-7xl">
						{/* {["P", "H", "O", "T", "O", "S"].map((letter, i) =>
							i % 2 === 0 ? (
								<motion.div
									key={i}
									className="inline-block will-change-transform"
									initial={{ y: 0 }}
									animate={{ y: [0, -15, 0, 15, 0] }}
									transition={{
										duration: 1,
										ease: "easeOut",
										repeat: Infinity,
										repeatType: "loop",
									}}
								>
									{letter}
								</motion.div>
							) : (
								<span key={i}>{letter}</span>
							)
						)} */}
						Photos
					</h1>
				</div>

				{/* Grid of Photos */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{photoData.map((item, index) => (
						<div
							key={index}
							className="relative p-2 md:p-4 bg-[#141414] group overflow-hidden rounded-xl md:rounded-2xl hover:cursor-pointer"
						>
							{/* Image wrapper */}
							<div className="relative w-full h-[220px] min-h-[220px] md:h-[350px] rounded-xl md:rounded-2xl overflow-hidden">
								<Image
									src={item.image}
									alt={item.title}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-110"
									quality={90}
									priority={index === 0}
									loading={index === 0 ? "eager" : "lazy"}
								/>
								<div className="absolute inset-0 bg-black/40 z-[1]" />
							</div>

							{/* Top Right "View" Label */}
							<div className="absolute z-10 right-3 top-3 md:right-6 md:top-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<span className="text-white font-manrope font-[400] text-sm md:text-lg">
									View
								</span>
							</div>
						</div>
					))}
				</div>

				{/* CTA: All Photos */}
				<div className="flex justify-center items-center">
					<Link
						href="/photos"
						className="group inline-flex items-center gap-2 font-manrope text-white font-[400] text-base cursor-pointer relative"
					>
						<span
							className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full 
                after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:origin-left 
                after:transition-transform after:duration-300"
						>
							All Photos
						</span>
						<ArrowRight className="transform transition-transform duration-300 group-hover:rotate-0 -rotate-45" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Photos;
