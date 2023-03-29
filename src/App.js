import "./App.css";
import { Navbar, Footer } from "./components";
import {
	Home,
	MyArchiNfts,
	MyListing,
	Item,
	Create,
	Login,
	Register,
	Nftitem,
	Biditem,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import * as React from "react";

// page :::::::::::::::::

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/create" element={<Create />} />
				<Route path="/myArchiNfts/:id" element={<MyArchiNfts />} />
				<Route path="/myListing/:id" element={<MyListing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/nftitem/:token_id" element={<Nftitem />} />
				<Route path="/biditem/:token_id" element={<Biditem />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
