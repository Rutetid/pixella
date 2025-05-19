import type React from "react";

const Home: React.FC = () => {
	return (
		<div className="container mx-auto pb-8">
			<div className="w-full">
				<img
					src="/homepage_v4.png"
					alt="Pixella Homepage Banner"
					className="w-full object-cover"
				/>
			</div>
			{/* Stickers */}
			<div className="flex flex-col sm:flex-row justify-between px-4 sm:px-8 mt-10 sm:mt-20 mb-6 sm:mb-8">
				<p className="text-2xl sm:text-3xl font-bold font-montserrat mb-2 sm:mb-0">
					Stickers
				</p>
				<p className="text-base sm:text-lg font-medium font-montserrat hover:underline cursor-pointer">
					View All
				</p>
			</div>{" "}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-8">
				{/* Featured stickers will go here */}
				<div className="bg-white rounded-lg shadow-md overflow-hidden">
					<div className="py-3 sm:py-5 px-2 sm:pr-3 flex justify-center">
						<img
							src="/Anya.png"
							alt="Cute Anya Sticker"
							className="object-contain h-40 sm:h-48 w-auto"
						/>
					</div>
					<div className="p-3 sm:p-4">
						<h3 className="text-lg sm:text-xl font-semibold font-montserrat text-center sm:text-left">
							Anime Stickers
						</h3>
					</div>
				</div>

				<div className="bg-white rounded-lg shadow-md overflow-hidden">
					<div className="py-3 sm:py-5 px-2 sm:pr-3 flex justify-center">
						<img
							src="/Anya.png"
							alt="Cute Anya Sticker"
							className="object-contain h-40 sm:h-48 w-auto"
						/>
					</div>
					<div className="p-3 sm:p-4">
						<h3 className="text-lg sm:text-xl font-semibold font-montserrat text-center sm:text-left">
							Cars Stickers
						</h3>
					</div>
				</div>

				<div className="bg-white rounded-lg shadow-md overflow-hidden">
					<div className="py-3 sm:py-5 px-2 sm:pr-3 flex justify-center">
						<img
							src="/Anya.png"
							alt="Cute Anya Sticker"
							className="object-contain h-40 sm:h-48 w-auto"
						/>
					</div>
					<div className="p-3 sm:p-4">
						<h3 className="text-lg sm:text-xl font-semibold font-montserrat text-center sm:text-left">
							Marvel Stickers
						</h3>
					</div>
				</div>
			</div>{" "}
			<div className="flex flex-col sm:flex-row justify-between px-4 sm:px-8 mt-12 sm:mt-20 mb-6 sm:mb-8">
				<p className="text-2xl sm:text-3xl font-bold font-montserrat mb-2 sm:mb-0">
					Featured Collection
				</p>
				<p className="text-base sm:text-lg font-medium font-montserrat hover:underline cursor-pointer">
					View All
				</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-8">
				{/* Featured stickers will go here */}
				<div className="bg-white rounded-lg shadow-md overflow-hidden">
					<div className="py-3 sm:py-5 px-2 sm:pr-3 flex justify-center">
						<img
							src="/Anya.png"
							alt="Cute Anya Sticker"
							className="object-contain h-40 sm:h-48 w-auto"
						/>
					</div>
					<div className="p-3 sm:p-4">
						<h3 className="text-lg sm:text-xl font-semibold font-montserrat text-center sm:text-left">
							Cute Anya Sticker
						</h3>
						<p className="text-gray-600 font-medium font-montserrat text-center sm:text-left">
							₹25
						</p>
					</div>
				</div>

				<div className="bg-white rounded-lg shadow-md overflow-hidden">
					<div className="py-3 sm:py-5 px-2 sm:pr-3 flex justify-center">
						<img
							src="/Anya.png"
							alt="Cute Anya Sticker"
							className="object-contain h-40 sm:h-48 w-auto"
						/>
					</div>
					<div className="p-3 sm:p-4">
						<h3 className="text-lg sm:text-xl font-semibold font-montserrat text-center sm:text-left">
							Cute Anya Sticker
						</h3>
						<p className="text-gray-600 font-medium font-montserrat text-center sm:text-left">
							₹25
						</p>
					</div>
				</div>

				<div className="bg-white rounded-lg shadow-md overflow-hidden">
					<div className="py-3 sm:py-5 px-2 sm:pr-3 flex justify-center">
						<img
							src="/Anya.png"
							alt="Cute Anya Sticker"
							className="object-contain h-40 sm:h-48 w-auto"
						/>
					</div>
					<div className="p-3 sm:p-4">
						<h3 className="text-lg sm:text-xl font-semibold font-montserrat text-center sm:text-left">
							Cute Anya Sticker
						</h3>
						<p className="text-gray-600 font-medium font-montserrat text-center sm:text-left">
							₹25
						</p>
					</div>
				</div>
			</div>{" "}
			<div className="mt-8 sm:mt-12 text-center px-4 sm:px-0">
				<button
					className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 w-full sm:w-auto"
					type="button"
				>
					Browse All Stickers
				</button>
			</div>
		</div>
	);
};

export default Home;
