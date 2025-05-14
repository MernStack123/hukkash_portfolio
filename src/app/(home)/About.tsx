"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const About: React.FC = () => {
	return (
		<section className="w-full h-full bg-[#0a0a0a] py-24 md:py-40 px-4 ">
			<div className="flex flex-col gap-10 md:gap-14 justify-center items-center">
				<motion.div
					className="flex flex-col gap-4 md:gap-6 justify-center items-center "
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					transition={{ duration: 1.5, ease: "easeOut" }}
				>
					<h1 className="font-bebas text-[#fff] font-[400] text-5xl md:text-7xl ">
						About me
					</h1>
					<p className="text-[#696969] font-manrope text-base md:text-xl font-[400] text-center max-w-[600px] ">
						Hi, I’m Hukkash, a passionate videographer and photographer with
						over 6 years of experience behind the lens. My love for storytelling
						through visuals has taken me on an incredible journey, capturing
						moments, emotions, and stories that leave lasting impressions.
					</p>
				</motion.div>
				<div className="px-0 md:px-64">
					<video
						className="min-h-full min-w-full object-cover rounded-xl  md:rounded-2xl"
						style={{ objectPosition: "center" }}
						src="/videos/1.mp4"
						autoPlay
						loop
						muted
						playsInline
					></video>
				</div>
				<Link
					href={"/about"}
					className="group inline-flex items-center gap-2 font-manrope text-white font-[400] text-base cursor-pointer relative"
				>
					<span
						className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full 
               after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:origin-left 
               after:transition-transform after:duration-300"
					>
						More About Me
					</span>
					<ArrowRight className="transform transition-transform duration-300 group-hover:rotate-0 -rotate-45" />
				</Link>
			</div>
		</section>
	);
};

export default About;
