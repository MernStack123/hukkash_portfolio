"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Hero = ({}) => {
	const text = "Muhammed Hukkash";

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
		<section
			ref={sectionRef}
			className="flex h-screen w-full items-center justify-center px-3 pt-6 md:px-6 rounded-xl md:rounded-2xl"
		>
			<div className="relative rounded-xl md:rounded-2xl flex h-screen w-full items-center justify-center bg-black">
				<div className="absolute left-0 top-0 z-10 h-full w-full bg-black/20"></div>
				<div className="absolute left-0 top-0 h-full w-full overflow-hidden">
					<video
						className="min-h-full min-w-full object-cover rounded-xl md:rounded-2xl"
						style={{ objectPosition: "center" }}
						src="/videos/hero.mp4"
						autoPlay
						loop
						muted
						playsInline
					></video>
				</div>
				<div className="absolute inset-0 bg-black/60" />
				<div className="z-40 flex h-full w-full items-center justify-center">
					<div className="flex w-full flex-col items-center justify-center gap-4">
						<h1 className="text-center md:hidden font-bebas text-7xl font-[400] uppercase leading-[90%] text-[#fff]  md:text-8xl">
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
						</h1>

						<h1 className="text-center hidden md:block font-bebas text-7xl font-[400] uppercase leading-[100%] text-[#fff] sm: md:text-9xl">
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
						</h1>
						<p className="text-[#fff] text-center font-manrope font-[400] max-w-[600px] text-sm md:text-lg  ">
							I'm a Videographer & Photographer who specializes in capturing
							moments that tell compelling stories.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
