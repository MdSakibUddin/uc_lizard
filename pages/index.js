import Image from "next/image";
import { Inter } from "next/font/google";
import lizard from "../assets/pic1.png";
import logo from "../assets/pic2.png";
import { useState } from "react";
import Header from "@/components/Header";

export default function Home() {
	const [state, setState] = useState();
	const [loading, setLoading] = useState(false);
	const [resultState, setResultState] = useState();
	const handleSearch = async () => {
		if (state) {
			setLoading(true);
			const result = await fetch(`http://localhost:3000/api/user?search=${state}`).then((res) => {
				setLoading(false);
				return res.json();
			});
			setResultState(result);
			console.log(result);
		} else {
			alert("Please enter something");
		}
	};

	return (
		<>
			<Header />
			<main id="content" className="mx-auto">
				<div
					className="mx-auto flex  h-[89vh]  justify-center items-center"
					style={{
						backgroundImage: `url('${lizard.src}')`,
						backgroundSize: "cover",
					}}
				>
					<input type="text" className="form-input px-4 py-2 min-w-[300px]" onChange={(e) => setState(e.target.value)} id="searchBar" placeholder="Search..." />
					<a href={`/search_result?search=${state}`} className="btn bg-[#009ABC] text-black-600 ml-2 px-12 py-2 font-semibold" id="searchBtn">
						{loading ? "Searching....." : "Search"}
					</a>
				</div>
			</main>
		</>
	);
}
