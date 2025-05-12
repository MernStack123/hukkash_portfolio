"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
	const text = "Let's talk";

	const letterVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.1,
				type: "spring",
				stiffness: 300,
			},
		}),
	};
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry?.isIntersecting) {
					setInView(false);
					setTimeout(() => setInView(true), 50);
				}
			},
			{ threshold: 0.5 }
		);

		if (sectionRef.current) observer.observe(sectionRef.current);

		return () => {
			if (sectionRef.current) observer.unobserve(sectionRef.current);
		};
	}, []);

	return (
		<section ref={sectionRef} className="bg-[#0a0a0a] w-full h-full ">
			<div className="px-4 md:px-40 py-6 ">
				<div className="bg-[#141414] rounded-2xl py-16 md:py-40 px-4 md:px-20 ">
					<h3 className="text-[#fff] font-bebas text-center text-7xl tracking-[1px] md:text-[150px] font-[400] uppercase  ">
						{inView &&
							[...text].map((letter, i) => (
								<motion.span
									key={i}
									custom={i}
									initial="hidden"
									animate="visible"
									variants={letterVariants}
								>
									{letter}
								</motion.span>
							))}
					</h3>
					<div className="w-full h-1 border-b-[1px] border-b-[#3a3a3a]  " />
					<div className="flex flex-col gap-4 justify-center md:flex-row pt-4 items-center md:justify-between ">
						<Link
							href={"mailto:hukkashbinsalam@gmail.com"}
							className="group inline-flex items-center gap-2 font-manrope text-white font-[400] text-base cursor-pointer relative"
						>
							<span
								className="relative after:absolute font-[600] text-base md:text-lg after:left-0 after:bottom-0 after:h-[1px] after:w-full 
               after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:origin-left 
               after:transition-transform after:duration-300"
							>
								hukkashbinsalam@gmail.com
							</span>
							<ArrowRight className="transform transition-transform duration-300 group-hover:rotate-0 -rotate-45" />
						</Link>
						<div className="flex flex-col gap-4 md:flex-row justify-center items-center">
							<Link
								href="https://www.instagram.com/p/DIT9oUISYTr/?igsh=ejNmb2tpamJpa3Nz"
								target="_blank"
								className="relative font-manrope font-[400] text-base md:text-lg text-white 
								after:content-[''] after:absolute after:left-0 after:bottom-0 
								after:h-[1px] after:w-full after:bg-white 
								after:scale-x-0 hover:after:scale-x-100 after:origin-left 
								after:transition-transform after:duration-300"
							>
								Instagram
							</Link>
							<Link
								href="https://wa.me/971561174151?text=Hi%2C%20I'm%20interested%20in%20your%20videography%20and%20photography%20services.%20Could%20you%20share%20more%20details%3F"
								target="_blank"
								rel="noopener noreferrer"
								className="relative font-manrope font-[400] text-base md:text-lg text-white 
								after:content-[''] after:absolute after:left-0 after:bottom-0 
								after:h-[1px] after:w-full after:bg-white 
								after:scale-x-0 hover:after:scale-x-100 after:origin-left 
								after:transition-transform after:duration-300"
							>
								WhatsApp
							</Link>
						</div>
						<Link
							href={"tel:+971561175151"}
							className="group inline-flex items-center gap-2 font-manrope text-white font-[400] text-base cursor-pointer relative"
						>
							<span
								className="relative after:absolute font-[600] text-base md:text-lg after:left-0 after:bottom-0 after:h-[1px] after:w-full 
               after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:origin-left 
               after:transition-transform after:duration-300"
							>
								+971 561175151
							</span>
							<ArrowRight className="transform transition-transform duration-300 group-hover:rotate-0 -rotate-45" />
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-4 md:flex-row justify-center items-center md:justify-between py-4 ">
					<div className="flex flex-row gap-4">
						<Link
							href="/photos"
							className="relative font-manrope font-[400] text-base  text-white 
								after:content-[''] after:absolute after:left-0 after:bottom-0 
								after:h-[1px] after:w-full after:bg-white 
								after:scale-x-0 hover:after:scale-x-100 after:origin-left 
								after:transition-transform after:duration-300"
						>
							Photos
						</Link>
						<Link
							href="/videos"
							className="relative font-manrope font-[400] text-base  text-white 
								after:content-[''] after:absolute after:left-0 after:bottom-0 
								after:h-[1px] after:w-full after:bg-white 
								after:scale-x-0 hover:after:scale-x-100 after:origin-left 
								after:transition-transform after:duration-300"
						>
							Videos
						</Link>
						<Link
							href="/about"
							className="relative font-manrope font-[400] text-base  text-white 
								after:content-[''] after:absolute after:left-0 after:bottom-0 
								after:h-[1px] after:w-full after:bg-white 
								after:scale-x-0 hover:after:scale-x-100 after:origin-left 
								after:transition-transform after:duration-300"
						>
							About
						</Link>
						<Link
							href="https://wa.me/971561174151?text=Hi%2C%20I'm%20interested%20in%20your%20videography%20and%20photography%20services.%20Could%20you%20share%20more%20details%3F"
							target="_blank"
							rel="noopener noreferrer"
							className="relative font-manrope font-[400] text-base  text-white 
								after:content-[''] after:absolute after:left-0 after:bottom-0 
								after:h-[1px] after:w-full after:bg-white 
								after:scale-x-0 hover:after:scale-x-100 after:origin-left 
								after:transition-transform after:duration-300"
						>
							Contact
						</Link>
					</div>
					<span className="text-[#fff] font-manrope text-base font-[400] capitalize  ">
						© 2025 hukkash All Rights Reserved
					</span>
				</div>
			</div>
		</section>
	);
};

export default Footer;
