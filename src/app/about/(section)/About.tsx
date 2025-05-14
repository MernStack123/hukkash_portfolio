"use client";
import ServicesGrid from "@/components/ServicesGrid";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
	return (
		<section className="w-full h-full bg-[#0a0a0a] pt-2 md:pt-4 pb-8 md:pb-12 px-2 ">
			<div className="flex flex-col ">
				<div className="relative rounded-xl md:rounded-2xl">
					<div className="absolute inset-0 z-0 bg-black/50 " />
					<div className="absolute inset-0 z-10 hidden md:flex justify-center items-center">
						<h1 className="font-bebas text-[#fff] font-[400] tracking-[10px] text-5xl md:text-[180px] ">
							Your Vision, My Lens
						</h1>
					</div>
					<div className="absolute md:hidden inset-0 z-10 flex justify-center items-center">
						<h1 className="font-bebas text-center text-[#fff] font-[400] text-7xl md:text-[550px]">
							Your Vision, <br /> My Lens
						</h1>
					</div>
					<video
						className="h-[450px] md:h-[550px] min-w-full rounded-xl md:rounded-2xl object-cover"
						style={{ objectPosition: "center" }}
						src="/videos/about.mp4"
						autoPlay
						loop
						muted
						playsInline
					/>
				</div>
				<motion.div
					className="flex flex-col gap-4 md:gap-6 justify-center items-center py-16 md:py-36 "
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: false }}
					transition={{ duration: 1.5, ease: "easeOut" }}
				>
					<h1 className="font-bebas text-[#fff] font-[400] text-5xl md:text-7xl ">
						About me
					</h1>
					<p className="text-[#696969] font-manrope text-base md:text-xl font-[400] text-center max-w-[600px] ">
						Hi, I’m Hukkash. I’m a videographer and photographer with over 6
						years of hands-on experience. I’ve always been drawn to visuals —
						the way a single frame can hold so much feeling. Over the years,
						that interest turned into a full-time passion, and I’ve been lucky
						to work on a variety of projects that let me do what I love. I enjoy
						both working independently and being part of a creative team. Even
						when I’ve had only a short time with a team, I’ve found that great
						results come from good collaboration and clear communication. I’m
						someone who brings consistency, attention to detail, and a calm,
						focused energy to every shoot. For me, it’s simple — I love
						capturing moments that matter and creating visuals people can
						connect with.
					</p>
				</motion.div>
				<div className="px-4 flex justify-center items-center">
					<motion.div
						className=" border bg-[#141414] border-[#141414] p-4 rounded-2xl md:rounded-3xl "
						initial={{ opacity: 0, x: -100, rotate: -5 }}
						whileInView={{ opacity: 1, x: 0, rotate: 0 }}
						viewport={{ once: false, amount: 0.5 }}
						transition={{ duration: 1.2, ease: "easeOut" }}
					>
						<Image
							src={"/images/hukkash1.jpg"}
							width={1024}
							height={574}
							alt="about image"
							className="w-full h-auto md:h-[900px] object-contain rounded-2xl md:rounded-3xl"
						/>
					</motion.div>
				</div>
				<ServicesGrid />
			</div>
		</section>
	);
};

export default About;
