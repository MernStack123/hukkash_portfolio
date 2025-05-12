"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const Videos = () => {
	return (
		<section className="w-full h-full bg-[#0a0a0a] py-24 md:py-40 px-4 md:px-40 ">
			<div className="flex flex-col gap-10 md:gap-14 ">
				<div>
					<h1 className="text-[#fff] text-center font-bebas tracking-[1px] text-5xl md:text-7xl  ">
						<motion.span
							className="inline-block"
							initial={{ y: 0 }}
							animate={{ y: [0, -15, 0, 15, 0] }}
							transition={{
								duration: 1,
								ease: "easeOut",
								repeat: Infinity,
								repeatType: "loop",
							}}
						>
							V
						</motion.span>
						{"I "}
						<motion.span
							className="inline-block"
							initial={{ y: 0 }}
							animate={{ y: [0, -15, 0, 15, 0] }}
							transition={{
								duration: 1,
								ease: "easeOut",
								repeat: Infinity,
								repeatType: "loop",
							}}
						>
							D
						</motion.span>
						{"E"}
						<motion.span
							className="inline-block"
							initial={{ y: 0 }}
							animate={{ y: [0, -15, 0, 15, 0] }}
							transition={{
								duration: 1,
								ease: "easeOut",
								repeat: Infinity,
								repeatType: "loop",
							}}
						>
							O
						</motion.span>
						{"S"}
					</h1>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
					<div className="relative hover:cursor-pointer group overflow-hidden rounded-xl md:rounded-2xl">
						<div className="absolute left-2 bottom-2 md:left-4 md:bottom-4 z-10">
							<div className="flex flex-col">
								<span className="text-white font-manrope font-[400] text-base md:text-xl">
									A nighttime journey
								</span>
								<span className="text-white font-manrope font-[400] text-sm md:text-lg">
									Art film
								</span>
							</div>
						</div>
						<div className="absolute z-10 right-2 bottom-2 md:right-4 md:bottom-4">
							<span className="text-white font-manrope font-[400] text-sm md:text-lg">
								2025
							</span>
						</div>
						<div className="absolute z-10 right-2 top-2 md:right-4 md:top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<span className="text-white font-manrope font-[400] text-sm md:text-lg">
								View
							</span>
						</div>
						<div className="absolute inset-0 bg-black/40 z-[1]" />
						<video
							className="min-h-full min-w-full object-cover"
							style={{ objectPosition: "center" }}
							src="/videos/1.mp4"
							autoPlay
							loop
							muted
							playsInline
						/>
					</div>

					<div className="relative hover:cursor-pointer group overflow-hidden rounded-xl md:rounded-2xl">
						<div className="absolute left-2 bottom-2 md:left-4 md:bottom-4 z-10">
							<div className="flex flex-col">
								<span className="text-white font-manrope font-[400] text-base md:text-xl">
									A nighttime journey
								</span>
								<span className="text-white font-manrope font-[400] text-sm md:text-lg">
									Art film
								</span>
							</div>
						</div>
						<div className="absolute z-10 right-2 bottom-2 md:right-4 md:bottom-4">
							<span className="text-white font-manrope font-[400] text-sm md:text-lg">
								2025
							</span>
						</div>
						<div className="absolute z-10 right-2 top-2 md:right-4 md:top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<span className="text-white font-manrope font-[400] text-sm md:text-lg">
								View
							</span>
						</div>
						<div className="absolute inset-0 bg-black/40 z-[1]" />
						<video
							className="min-h-full min-w-full object-cover"
							style={{ objectPosition: "center" }}
							src="/videos/2.mp4"
							autoPlay
							loop
							muted
							playsInline
						/>
					</div>
					<div className="relative hover:cursor-pointer group overflow-hidden rounded-xl md:rounded-2xl">
						<div className="absolute left-2 bottom-2 md:left-4 md:bottom-4 z-10">
							<div className="flex flex-col">
								<span className="text-white font-manrope font-[400] text-base md:text-xl">
									A nighttime journey
								</span>
								<span className="text-white font-manrope font-[400] text-sm md:text-lg">
									Art film
								</span>
							</div>
						</div>
						<div className="absolute z-10 right-2 bottom-2 md:right-4 md:bottom-4">
							<span className="text-white font-manrope font-[400] text-sm md:text-lg">
								2025
							</span>
						</div>
						<div className="absolute z-10 right-2 top-2 md:right-4 md:top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<span className="text-white font-manrope font-[400] text-sm md:text-lg">
								View
							</span>
						</div>
						<div className="absolute inset-0 bg-black/40 z-[1]" />
						<video
							className="min-h-full min-w-full object-cover"
							style={{ objectPosition: "center" }}
							src="/videos/3.mp4"
							autoPlay
							loop
							muted
							playsInline
						/>
					</div>
					<div className="relative hover:cursor-pointer group overflow-hidden rounded-xl md:rounded-2xl">
						<div className="absolute left-2 bottom-2 md:left-4 md:bottom-4 z-10">
							<div className="flex flex-col">
								<span className="text-white font-manrope font-[400] text-base md:text-xl">
									A nighttime journey
								</span>
								<span className="text-white font-manrope font-[400] text-sm md:text-lg">
									Art film
								</span>
							</div>
						</div>
						<div className="absolute z-10 right-2 bottom-2 md:right-4 md:bottom-4">
							<span className="text-white font-manrope font-[400] text-sm md:text-lg">
								2025
							</span>
						</div>
						<div className="absolute z-10 right-2 top-2 md:right-4 md:top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<span className="text-white font-manrope font-[400] text-sm md:text-lg">
								View
							</span>
						</div>
						<div className="absolute inset-0 bg-black/40 z-[1]" />
						<video
							className="min-h-full min-w-full object-cover"
							style={{ objectPosition: "center" }}
							src="/videos/4.mp4"
							autoPlay
							loop
							muted
							playsInline
						/>
					</div>
				</div>
				<div className="flex justify-center items-center ">
					<Link
						href={"/videos"}
						className="group inline-flex items-center gap-2 font-manrope text-white font-[400] text-base cursor-pointer relative"
					>
						<span
							className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full 
               after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:origin-left 
               after:transition-transform after:duration-300"
						>
							All Videos
						</span>
						<ArrowRight className="transform transition-transform duration-300 group-hover:rotate-0 -rotate-45" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Videos;
