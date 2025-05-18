import type React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
	return (
		<nav className="bg-[#c7451a] shadow-md">
			<div className="container mx-auto px-5 text-white h-[70px]">
				<div className="flex justify-between items-center">
					<Link to="/">
						<img
							src="/popxel_logo.png"
							alt="Popxel Stickers"
							className="w-[72px] pt-1"
						/>
					</Link>

					<div className="hidden md:flex space-x-8 font-montserrat font-semibold text-xl">
						<Link
							to="/"
							className="font-semibold text-white hover:text-[#b0edff]"
						>
							Home
						</Link>
						<Link
							to="/shop"
							className="font-semibold text-white hover:text-[#b0edff]"
						>
							Stickers
						</Link>
						<Link
							to="/about"
							className="font-semibold text-white hover:text-[#b0edff]"
						>
							Posters
						</Link>
						<Link
							to="/contact"
							className="font-semibold text-white hover:text-[#b0edff]"
						>
							Reviews
						</Link>
						<Link
							to="/contact"
							className="font-semibold text-white hover:text-[#b0edff]"
						>
							Request a Sticker
						</Link>
						<Link
							to="/contact"
							className="font-semibold text-white hover:text-[#b0edff]"
						>
							Track Order
						</Link>
					</div>

					<div className="flex items-center space-x-4">
						<div className="relative bg-transparent hover:text-[#b0edff] transition-colors pr-2 text-white">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</div>
						<Link to="/cart" className="relative">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="white"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
							<span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
								3
							</span>
						</Link>

						{/* Mobile menu button */}
						<div className="md:hidden relative bg-transparent hover:text-[#b0edff] transition-colors pr-2 text-white pl-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
