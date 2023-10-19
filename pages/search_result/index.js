import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';

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
                    `http://localhost:3000/api/user?search=${params.search}`,
                ).then((res) => {
                    return res.json();
                });
                setResultState(result);
            };
            getResult();
        }
    }, [params]);
    console.log(resultState);
    const handleSearch = async (e) => {
        e.preventDefault();
        if (state) {
            setLoading(true);
            const result = await fetch(
                `http://localhost:3000/api/user?search=${state}`,
            ).then((res) => {
                setLoading(false);
                return res.json();
            });
            setResultState(result);
            console.log(result);
        } else {
            alert('Please enter something');
        }
    };

    return (
        <>
            <Header />
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
                            {loading ? 'Searching.....' : 'Search'}
                        </button>
                    </form>
                </div>
                <div className="container mx-auto mt-10">
                    {resultState?.result1?.length ? (
                        <div className="overflow-x-scroll md:max-w-[200px] lg:max-w-full">
                            <table class="table-auto bg-white p-8 rounded-lg w-full text-center border border-black ">
                                <thead>
                                    <tr className="border-b border-black bg-[#009ABC]">
                                        <th>SpecimenID</th>
                                        <th className="border-x border-black">
                                            Species
                                        </th>
                                        <th className="border-x border-black">
                                            EnteredBy
                                        </th>
                                        <th className="border-x border-black">
                                            CauseOfDeath
                                        </th>
                                        <th className="border-x border-black">
                                            Family
                                        </th>
                                        <th className="border-x border-black">
                                            Genus
                                        </th>
                                        <th className="border-x border-black">
                                            LocDesc
                                        </th>
                                        <th className="border-x border-black">
                                            Maturity
                                        </th>
                                        <th className="border-x border-black">
                                            Sex
                                        </th>
                                        <th className="border-x border-black">
                                            SexStatus
                                        </th>
                                        <th>Species</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {resultState?.result1?.map(
                                        (item, index) => (
                                            <tr
                                                className="border-b border-black"
                                                key={index}
                                            >
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
                                                <td className="border-x border-black px-2">
                                                    {item.Genus}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.LocDesc}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Maturity}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Sex}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.SexStatus}
                                                </td>
                                                <td>{item.Species}</td>
                                            </tr>
                                        ),
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        ''
                    )}
                    <div className="mt-24"></div>
                    {resultState?.result2?.length ? (
                        <div className="overflow-x-scroll md:max-w-[200px] lg:max-w-full">
                            <table class="table-auto bg-white p-8 rounded-lg w-full text-center border border-black ">
                                <thead>
                                    <tr className="border-b border-black bg-[#009ABC]">
                                        <th>SpecimenID</th>
                                        <th className="border-x border-black">
                                            Species
                                        </th>
                                        <th className="border-x border-black">
                                            EnteredBy
                                        </th>
                                        <th className="border-x border-black">
                                            CauseOfDeath
                                        </th>
                                        <th className="border-x border-black">
                                            Family
                                        </th>
                                        <th className="border-x border-black">
                                            Genus
                                        </th>
                                        <th className="border-x border-black">
                                            LocDesc
                                        </th>
                                        <th className="border-x border-black">
                                            Maturity
                                        </th>
                                        <th className="border-x border-black">
                                            Sex
                                        </th>
                                        <th className="border-x border-black">
                                            SexStatus
                                        </th>
                                        <th>Species</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {resultState?.result2?.map(
                                        (item, index) => (
                                            <tr
                                                className="border-b border-black"
                                                key={index}
                                            >
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
                                                <td className="border-x border-black px-2">
                                                    {item.Genus}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.LocDesc}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Maturity}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Sex}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.SexStatus}
                                                </td>
                                                <td>{item.Species}</td>
                                            </tr>
                                        ),
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        ''
                    )}
                    <div className="mt-24"></div>
                    {resultState?.result3?.length ? (
                        <div className="overflow-x-scroll md:max-w-[200px] lg:max-w-full">
                            <table class="table-auto bg-white p-8 rounded-lg w-full text-center border border-black ">
                                <thead>
                                    <tr className="border-b border-black bg-[#009ABC]">
                                        <th>SpecimenID</th>
                                        <th className="border-x border-black">
                                            Species
                                        </th>
                                        <th className="border-x border-black">
                                            EnteredBy
                                        </th>
                                        <th className="border-x border-black">
                                            CauseOfDeath
                                        </th>
                                        <th className="border-x border-black">
                                            Family
                                        </th>
                                        <th className="border-x border-black">
                                            Genus
                                        </th>
                                        <th className="border-x border-black">
                                            LocDesc
                                        </th>
                                        <th className="border-x border-black">
                                            Maturity
                                        </th>
                                        <th className="border-x border-black">
                                            Sex
                                        </th>
                                        <th className="border-x border-black">
                                            SexStatus
                                        </th>
                                        <th>Species</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {resultState?.result3?.map(
                                        (item, index) => (
                                            <tr
                                                className="border-b border-black"
                                                key={index}
                                            >
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
                                                <td className="border-x border-black px-2">
                                                    {item.Genus}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.LocDesc}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Maturity}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Sex}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.SexStatus}
                                                </td>
                                                <td>{item.Species}</td>
                                            </tr>
                                        ),
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        ''
                    )}
                    <div className="mt-24"></div>
                    {resultState?.result4?.length ? (
                        <div className="overflow-x-scroll md:max-w-[200px] lg:max-w-full">
                            <table class="table-auto bg-white p-8 rounded-lg w-full text-center border border-black ">
                                <thead>
                                    <tr className="border-b border-black bg-[#009ABC]">
                                        <th>SpecimenID</th>
                                        <th className="border-x border-black">
                                            Species
                                        </th>
                                        <th className="border-x border-black">
                                            EnteredBy
                                        </th>
                                        <th className="border-x border-black">
                                            CauseOfDeath
                                        </th>
                                        <th className="border-x border-black">
                                            Family
                                        </th>
                                        <th className="border-x border-black">
                                            Genus
                                        </th>
                                        <th className="border-x border-black">
                                            LocDesc
                                        </th>
                                        <th className="border-x border-black">
                                            Maturity
                                        </th>
                                        <th className="border-x border-black">
                                            Sex
                                        </th>
                                        <th className="border-x border-black">
                                            SexStatus
                                        </th>
                                        <th>Species</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {resultState?.result4?.map(
                                        (item, index) => (
                                            <tr
                                                className="border-b border-black"
                                                key={index}
                                            >
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
                                                <td className="border-x border-black px-2">
                                                    {item.Genus}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.LocDesc}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Maturity}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Sex}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.SexStatus}
                                                </td>
                                                <td>{item.Species}</td>
                                            </tr>
                                        ),
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        ''
                    )}
                    <div className="mt-24"></div>
                    {resultState?.result5?.length ? (
                        <div className="overflow-x-scroll md:max-w-[200px] lg:max-w-full">
                            <table class="table-auto bg-white p-8 rounded-lg w-full text-center border border-black ">
                                <thead>
                                    <tr className="border-b border-black bg-[#009ABC]">
                                        <th>SpecimenID</th>
                                        <th className="border-x border-black">
                                            Species
                                        </th>
                                        <th className="border-x border-black">
                                            EnteredBy
                                        </th>
                                        <th className="border-x border-black">
                                            CauseOfDeath
                                        </th>
                                        <th className="border-x border-black">
                                            Family
                                        </th>
                                        <th className="border-x border-black">
                                            Genus
                                        </th>
                                        <th className="border-x border-black">
                                            LocDesc
                                        </th>
                                        <th className="border-x border-black">
                                            Maturity
                                        </th>
                                        <th className="border-x border-black">
                                            Sex
                                        </th>
                                        <th className="border-x border-black">
                                            SexStatus
                                        </th>
                                        <th>Species</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {resultState?.result5?.map(
                                        (item, index) => (
                                            <tr
                                                className="border-b border-black"
                                                key={index}
                                            >
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
                                                <td className="border-x border-black px-2">
                                                    {item.Genus}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.LocDesc}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Maturity}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Sex}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.SexStatus}
                                                </td>
                                                <td>{item.Species}</td>
                                            </tr>
                                        ),
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        ''
                    )}
                    <div className="pt-24"></div>
                </div>
            </main>
        </>
    );
}
