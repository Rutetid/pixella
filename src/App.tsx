import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

// Components
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="min-h-screen bg-gray-50">
			<Navbar />
			<main className="w-full">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
