import type React from "react";

const Home: React.FC = () => {
	return (
		<div className="container mx-auto pb-8">
			<div>
				<img src="../src/assets/homepage_v4.png" alt="" />
			</div>
			<div className="flex justify-between px-8 mt-20  mb-8">
				<p className="text-3xl font-bold font-montserrat ">
					Featured Collection
				</p>
				<p className="text-lg font-medium font-montserrat hover:underline cursor-pointer">
					View All
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
				{/* Featured stickers will go here */}
				<div className="bg-white rounded-lg shadow-md overflow-hidden">
					<div className="h-48 bg-gray-200"></div>
					<div className="p-4">
						<h3 className="text-xl font-semibold">Featured Sticker 1</h3>
						<p className="text-gray-600">$4.99</p>
						<button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
							Add to Cart
						</button>
					</div>
				</div>

				<div className="bg-white rounded-lg shadow-md overflow-hidden">
					<div className="h-48 bg-gray-200"></div>
					<div className="p-4">
						<h3 className="text-xl font-semibold">Featured Sticker 2</h3>
						<p className="text-gray-600">$3.99</p>
						<button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
							Add to Cart
						</button>
					</div>
				</div>

				<div className="bg-white rounded-lg shadow-md overflow-hidden">
					<div className="h-48 bg-gray-200"></div>
					<div className="p-4">
						<h3 className="text-xl font-semibold">Featured Sticker 3</h3>
						<p className="text-gray-600">$5.99</p>
						<button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
							Add to Cart
						</button>
					</div>
				</div>
			</div>

			<div className="mt-12 text-center">
				<button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
					Browse All Stickers
				</button>
			</div>
		</div>
	);
};

export default Home;
