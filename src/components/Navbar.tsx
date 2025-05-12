"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	return (
		<nav className="w-[92%] sm:w-[94%] md:w-[96%] lg:w-[98%] md:bg-transparent bg-[#0a0a0a] opacity-85 rounded-xl fixed top-4 left-4 right-4 z-50">
			<div className="flex justify-between items-center h-16 px-6 md:px-10">
				<Link href="/">
					<h1 className="text-[#fff] font-bebas tracking-[1px] md:text-2xl font-[400] text-lg">
						Muhammed Hukkash
					</h1>
				</Link>

				<div className="hidden md:flex gap-6 items-center">
					{["photos", "videos", "about"].map((text) => (
						<Link
							key={text}
							href={`/${text}`}
							className="relative font-manrope font-[400] text-base capitalize text-white 
								after:content-[''] after:absolute after:left-0 after:bottom-0 
								after:h-[1px] after:w-full after:bg-white 
								after:scale-x-0 hover:after:scale-x-100 after:origin-left 
								after:transition-transform after:duration-300"
						>
							{text}
						</Link>
					))}
					<Link
						href="https://wa.me/971561174151?text=Hi%2C%20I'm%20interested%20in%20your%20videography%20and%20photography%20services.%20Could%20you%20share%20more%20details%3F"
						target="_blank"
						rel="noopener noreferrer"
						className="relative font-manrope font-[400] text-base capitalize text-white 
								after:content-[''] after:absolute after:left-0 after:bottom-0 
								after:h-[1px] after:w-full after:bg-white 
								after:scale-x-0 hover:after:scale-x-100 after:origin-left 
								after:transition-transform after:duration-300"
					>
						Contact
					</Link>
				</div>

				<button
					onClick={toggleMenu}
					className="md:hidden text-2xl text-[#fff] transition-all duration-300"
				>
					{isMenuOpen ? "✕" : "☰"}
				</button>
			</div>

			<div
				className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
					isMenuOpen
						? "max-h-[500px] opacity-100 translate-y-0"
						: "max-h-0 opacity-0 -translate-y-5"
				}`}
			>
				<div className="bg-[#0a0a0a] opacity-85 mx-4 mt-0 px-4 pt-0 pb-6 rounded-lg shadow-md flex flex-col items-center gap-10">
					<div className="w-full h-[1px] bg-white" />
					{["photos", "videos", "about"].map((text, index) => (
						<Link
							key={text}
							href={`/${text}`}
							onClick={toggleMenu}
							className={`relative block text-[#fff] text-center capitalize font-manrope text-base
                after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
                after:h-[1px] after:w-0 after:bg-white
                hover:after:w-full after:transition-all after:duration-500 after:ease-in-out
                transition-all duration-500 ease-in-out`}
							style={{
								transitionDelay: `${index * 100}ms`,
							}}
						>
							{text}
						</Link>
					))}
					<Link
						href="https://wa.me/971561174151?text=Hi%2C%20I'm%20interested%20in%20your%20videography%20and%20photography%20services.%20Could%20you%20share%20more%20details%3F"
						target="_blank"
						rel="noopener noreferrer"
						className="relative font-manrope font-[400] text-base capitalize text-white 
								after:content-[''] after:absolute after:left-0 after:bottom-0 
								after:h-[1px] after:w-full after:bg-white 
								after:scale-x-0 hover:after:scale-x-100 after:origin-left 
								after:transition-transform after:duration-300"
					>
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
