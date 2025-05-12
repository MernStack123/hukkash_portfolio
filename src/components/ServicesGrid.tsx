import React from "react";

const services = [
	{
		title: "Event Videography",
		description:
			"Capture the essence of your special moments with professional event videography, perfect for weddings, corporate events, and live performances.",
	},
	{
		title: "Promotional Videos",
		description:
			"Create dynamic promotional content that showcases your brand, products, or services, tailored to engage and inspire your target audience.",
	},
	{
		title: "Video Editing",
		description:
			"Enhance your footage with expert editing, color grading, and sound design to deliver polished and captivating final videos.",
	},
	{
		title: "Social Media Content",
		description:
			"Produce attention-grabbing videos optimized for platforms like Instagram, YouTube, and TikTok, designed to increase your online presence.",
	},
	{
		title: "Creative Consulting",
		description:
			"Receive professional guidance on storyboarding, scripting, and overall creative direction to ensure your video projects achieve their full potential.",
	},
	{
		title: "Aerial Videography",
		description:
			"Capture stunning aerial perspectives with drone videography, perfect for real estate, events, and cinematic projects that require breathtaking overhead shots.",
	},
];

const ServicesGrid = () => {
	return (
		<section className="w-full bg-black px-4 py-24 md:px-20">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{services.map((service, index) => (
					<div
						key={index}
						className="bg-[#141414] rounded-2xl p-6 md:p-8 transition hover:shadow-xl hover:scale-[1.01] duration-300"
					>
						<div className="text-gray-700 text-4xl font-bold mb-2 opacity-20 select-none">
							{index + 1}.
						</div>
						<h3 className="text-white text-lg md:text-xl font-semibold mb-2">
							{service.title}
						</h3>
						<p className="text-gray-300 text-sm md:text-base">
							{service.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default ServicesGrid;
