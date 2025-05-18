import type React from "react";

const Shop: React.FC = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold font-montserrat mb-8">Shop Stickers</h1>

			<div className="flex flex-col md:flex-row gap-6">
				{/* Filters sidebar */}
				<div className="w-full md:w-1/4">
					<div className="bg-white p-4 rounded-lg shadow-md">
						<h2 className="text-xl font-semibold mb-4">Filters</h2>

						<div className="mb-4">
							<h3 className="font-medium mb-2">Categories</h3>
							<div className="space-y-2">
								<label className="flex items-center">
									<input type="checkbox" className="mr-2" />
									<span>Animals</span>
								</label>
								<label className="flex items-center">
									<input type="checkbox" className="mr-2" />
									<span>Nature</span>
								</label>
								<label className="flex items-center">
									<input type="checkbox" className="mr-2" />
									<span>Technology</span>
								</label>
								<label className="flex items-center">
									<input type="checkbox" className="mr-2" />
									<span>Food</span>
								</label>
							</div>
						</div>

						<div className="mb-4">
							<h3 className="font-medium mb-2">Price Range</h3>
							<input type="range" min="0" max="100" className="w-full" />
							<div className="flex justify-between mt-2">
								<span>$0</span>
								<span>$100</span>
							</div>
						</div>

						<button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
							Apply Filters
						</button>
					</div>
				</div>

				{/* Products grid */}
				<div className="w-full md:w-3/4">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{[1, 2, 3, 4, 5, 6].map((item) => (
							<div
								key={item}
								className="bg-white rounded-lg shadow-md overflow-hidden"
							>
								<div className="h-48 bg-gray-200"></div>
								<div className="p-4">
									<h3 className="text-lg font-semibold">Sticker {item}</h3>
									<p className="text-gray-600">
										${(Math.random() * 5 + 1).toFixed(2)}
									</p>
									<button className="mt-3 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
										Add to Cart
									</button>
								</div>
							</div>
						))}
					</div>

					<div className="mt-8 flex justify-center">
						<button className="mx-1 px-3 py-1 rounded bg-gray-200">1</button>
						<button className="mx-1 px-3 py-1 rounded">2</button>
						<button className="mx-1 px-3 py-1 rounded">3</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
