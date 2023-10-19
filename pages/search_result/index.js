import Image from "next/image";
import { Inter } from "next/font/google";
import logo from "../../assets/pic2.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [resultState, setResultState] = useState([]);
  const router = useRouter();
  const params = router.query;
  useEffect(() => {
    if (params?.search) {
      const getResult = async () => {
        const result = await fetch(
          `http://localhost:3000/api/user?search=${params.search}`
        ).then((res) => {
          return res.json();
        });
        setResultState(result);
        console.log(params);
      };
      getResult();
    }
  }, [params]);
  const handleSearch = async (e) => {
    e.preventDefault();
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
            <a href="/" className="mr-3" id="homeLink">
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
      <main id="content" className="mx-auto bg-[#92D6E3] min-h-[89vh]">
        <div className="mx-auto flex justify-center items-center pt-10">
          <form onSubmit={(e) => handleSearch(e)}>
            <input
              type="text"
              className="form-input px-4 py-2 min-w-[300px] border border-black"
              onChange={(e) => setState(e.target.value)}
              id="searchBar"
              placeholder="Search..."
            />
            <button
              className="btn bg-[#009ABC] text-black-600 ml-2 px-12 py-2 font-semibold border border-black"
              id="searchBtn"
              type="submit"
            >
              {loading ? "Searching....." : "Search"}
            </button>
          </form>
        </div>
        <div className="container mx-auto mt-10">
          <div className="overflow-x-scroll md:max-w-[200px]">
            <table class="table-auto bg-white p-8 rounded-lg w-full text-center border border-black ">
              <thead>
                <tr className="border-b border-black bg-[#009ABC]">
                  <th>SpecimenID</th>
                  <th className="border-x border-black">Species</th>
                  <th className="border-x border-black">EnteredBy</th>
                  <th className="border-x border-black">CauseOfDeath</th>
                  <th className="border-x border-black">Family</th>
                  <th className="border-x border-black">Genus</th>
                  <th className="border-x border-black">LocDesc</th>
                  <th className="border-x border-black">Maturity</th>
                  <th className="border-x border-black">Sex</th>
                  <th className="border-x border-black">SexStatus</th>
                  <th>Species</th>
                </tr>
              </thead>
              <tbody>
                {resultState?.result1?.map((item) => (
                  <tr className="border-b border-black">
                    <td>{item.SpecimenID}</td>
                    <td className="border-x border-black px-2">
                      {item.Species}
                    </td>
                    <td className="border-x border-black px-2">
                      {item.EnteredBy}
                    </td>
                    <td className="border-x border-black px-2">
                      {item.CauseOfDeath}
                    </td>
                    <td className="border-x border-black px-2">
                      {item.Family}
                    </td>
                    <td className="border-x border-black px-2">{item.Genus}</td>
                    <td className="border-x border-black px-2">
                      {item.LocDesc}
                    </td>
                    <td className="border-x border-black px-2">
                      {item.Maturity}
                    </td>
                    <td className="border-x border-black px-2">{item.Sex}</td>
                    <td className="border-x border-black px-2">
                      {item.SexStatus}
                    </td>
                    <td>{item.Species}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
