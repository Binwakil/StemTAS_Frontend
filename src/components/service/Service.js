import React, { useEffect } from "react";
// import components
import "./service.css";
import { services } from "../../Data";
// import animations and framer-motion
import { useAnimation, motion } from "framer-motion";
import { ProjAnimation, SingleProjectAnim } from "./../animation";
import { useInView } from "react-intersection-observer";

const Service = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView();
	useEffect(() => {
		if (inView) {
			controls.start("show");
		} else {
			controls.start("hidden");
		}
	}, [controls, inView]);
	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={ProjAnimation}
			id="services"
			className="service w-full lg:h-screen p-2 bg-primary"
		>
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<h2 className="section-title text-[#5651e5] pt-10 text-center before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
					How It Works
				</h2>
				<div className="service-container grid grid-cols-2 lg:grid-cols-4 gap-8">
					{services.map((item) => {
						return (
							<motion.div
								variants={SingleProjectAnim}
								key={item.id}
								className="card"
							>
								<h3> {item.name}</h3>
								<p className="desc">{item.category}</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</motion.div>
	);
};

export default Service;
