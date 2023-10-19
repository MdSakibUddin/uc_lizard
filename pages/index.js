import Image from "next/image";
import { Inter } from "next/font/google";
import lizard from "../assets/pic1.png";
import logo from "../assets/pic2.png";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [resultState, setResultState] = useState();
  const handleSearch = async () => {
    if (state) {
      setLoading(true);
      const result = await fetch(
        `http://localhost:3000/api/user?search=${state}`
      ).then((res) => {
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
      <header className="container mx-auto text-center py-4 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image src={logo} height={50}></Image>
            <h1 className="text-2xl font-bold max-w-[200px] text-left">
              Arthur Georges Lizard Colony{" "}
            </h1>
          </div>
          <nav className="inline-block font-semibold ">
            <a href="#" className="mr-3" id="homeLink">
              Home
            </a>
            |
            <a href="#" className="ml-3 mr-3" id="aboutLink">
              About Us
            </a>
            |
            <a href="#" className="ml-3" id="discoverLink">
              Discover Lizard
            </a>
          </nav>
        </div>
      </header>
      <main id="content" className="mx-auto">
        <div
          className="mx-auto flex  h-[89vh]  justify-center items-center"
          style={{
            backgroundImage: `url('${lizard.src}')`,
            backgroundSize: "cover",
          }}
        >
          <input
            type="text"
            className="form-input px-4 py-2 min-w-[300px]"
            onChange={(e) => setState(e.target.value)}
            id="searchBar"
            placeholder="Search..."
          />
          <button
            className="btn bg-[#009ABC] text-black-600 ml-2 px-12 py-2 font-semibold"
            id="searchBtn"
            onClick={() => handleSearch()}
          >
            {loading ? "Searching....." : "Search"}
          </button>
        </div>
      </main>
    </>
  );
}
