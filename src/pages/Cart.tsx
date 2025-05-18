import type React from "react";

const Cart: React.FC = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold font-montserrat mb-8">Your Cart</h1>

			<div className="flex flex-col lg:flex-row gap-8">
				{/* Cart items */}
				<div className="w-full lg:w-2/3">
					<div className="bg-white rounded-lg shadow-md p-6">
						<div className="mb-4 pb-4 border-b">
							<h2 className="text-xl font-semibold mb-4">Cart Items (3)</h2>

							{/* Cart item */}
							<div className="flex items-center py-4 border-b">
								<div className="w-16 h-16 bg-gray-200 rounded-md mr-4"></div>
								<div className="flex-grow">
									<h3 className="font-medium">Cute Cat Sticker</h3>
									<p className="text-gray-600">$4.99</p>
								</div>
								<div className="flex items-center">
									<button className="px-2 py-1 border rounded-l">-</button>
									<span className="px-4 py-1 border-t border-b">1</span>
									<button className="px-2 py-1 border rounded-r">+</button>
								</div>
								<button className="ml-4 text-red-500">Remove</button>
							</div>

							{/* Cart item */}
							<div className="flex items-center py-4 border-b">
								<div className="w-16 h-16 bg-gray-200 rounded-md mr-4"></div>
								<div className="flex-grow">
									<h3 className="font-medium">Plant Sticker</h3>
									<p className="text-gray-600">$3.99</p>
								</div>
								<div className="flex items-center">
									<button className="px-2 py-1 border rounded-l">-</button>
									<span className="px-4 py-1 border-t border-b">2</span>
									<button className="px-2 py-1 border rounded-r">+</button>
								</div>
								<button className="ml-4 text-red-500">Remove</button>
							</div>

							{/* Cart item */}
							<div className="flex items-center py-4">
								<div className="w-16 h-16 bg-gray-200 rounded-md mr-4"></div>
								<div className="flex-grow">
									<h3 className="font-medium">Code Sticker</h3>
									<p className="text-gray-600">$5.99</p>
								</div>
								<div className="flex items-center">
									<button className="px-2 py-1 border rounded-l">-</button>
									<span className="px-4 py-1 border-t border-b">1</span>
									<button className="px-2 py-1 border rounded-r">+</button>
								</div>
								<button className="ml-4 text-red-500">Remove</button>
							</div>
						</div>

						<button className="text-blue-500 flex items-center">
							<span className="mr-2">←</span> Continue Shopping
						</button>
					</div>
				</div>

				{/* Order summary */}
				<div className="w-full lg:w-1/3">
					<div className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-xl font-semibold mb-4">Order Summary</h2>

						<div className="space-y-3 mb-6">
							<div className="flex justify-between">
								<span>Subtotal (4 items)</span>
								<span>$18.96</span>
							</div>
							<div className="flex justify-between">
								<span>Shipping</span>
								<span>$4.99</span>
							</div>
							<div className="flex justify-between">
								<span>Tax</span>
								<span>$1.90</span>
							</div>
							<div className="border-t pt-3 mt-3">
								<div className="flex justify-between font-semibold">
									<span>Total</span>
									<span>$25.85</span>
								</div>
							</div>
						</div>

						<div className="mb-4">
							<label className="block mb-2 font-medium">Promo Code</label>
							<div className="flex">
								<input
									type="text"
									className="flex-grow px-3 py-2 border rounded-l focus:outline-none"
									placeholder="Enter code"
								/>
								<button className="bg-gray-200 px-4 py-2 rounded-r">
									Apply
								</button>
							</div>
						</div>

						<button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">
							Proceed to Checkout
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
