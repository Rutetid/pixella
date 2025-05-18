import type React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="bg-[#ca6746] shadow-md relative">
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
						<button
							className="relative bg-transparent hover:text-[#b0edff] transition-colors pr-2 text-white"
							aria-label="Search"
							type="button"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								role="img"
								aria-hidden="true"
							>
								<title>Search</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>
						<Link
							to="/cart"
							className="relative"
							aria-label="Shopping Cart with 3 items"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="white"
								role="img"
								aria-hidden="true"
							>
								<title>Shopping Cart</title>
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
						<button
							onClick={toggleMenu}
							className="md:hidden relative bg-transparent hover:text-[#b0edff] transition-colors pr-2 text-white pl-2"
							aria-label="Toggle menu"
							aria-expanded={isMenuOpen}
							type="button"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								role="img"
								aria-hidden="true"
							>
								<title>Menu</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu Dropdown */}
			<div
				className={`absolute top-[70px] left-0 w-full bg-[#ca6746] shadow-lg md:hidden transition-all duration-300 ease-in-out z-50 ${
					isMenuOpen
						? "max-h-[500px] opacity-100"
						: "max-h-0 opacity-0 overflow-hidden"
				}`}
			>
				<div className="flex flex-col py-4 px-5 space-y-4 font-montserrat font-semibold text-lg">
					<Link
						to="/"
						className="text-white hover:text-[#b0edff] border-b border-[#b36041] pb-2"
						onClick={() => setIsMenuOpen(false)}
					>
						Home
					</Link>
					<Link
						to="/shop"
						className="text-white hover:text-[#b0edff] border-b border-[#b36041] pb-2"
						onClick={() => setIsMenuOpen(false)}
					>
						Stickers
					</Link>
					<Link
						to="/about"
						className="text-white hover:text-[#b0edff] border-b border-[#b36041] pb-2"
						onClick={() => setIsMenuOpen(false)}
					>
						Posters
					</Link>
					<Link
						to="/contact"
						className="text-white hover:text-[#b0edff] border-b border-[#b36041] pb-2"
						onClick={() => setIsMenuOpen(false)}
					>
						Reviews
					</Link>
					<Link
						to="/contact"
						className="text-white hover:text-[#b0edff] border-b border-[#b36041] pb-2"
						onClick={() => setIsMenuOpen(false)}
					>
						Request a Sticker
					</Link>
					<Link
						to="/contact"
						className="text-white hover:text-[#b0edff] pb-2"
						onClick={() => setIsMenuOpen(false)}
					>
						Track Order
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
