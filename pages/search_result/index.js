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
                `https://uc-lizard.vercel.app/api/user?search=${state}`,
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
                                            Source
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
                                                    {item.Source}
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
                                            RecordStatus
                                        </th>
                                        <th className="border-x border-black">
                                            SubProject
                                        </th>
                                        <th className="border-x border-black">
                                            Genus
                                        </th>
                                        <th className="border-x border-black">
                                            DateSampled
                                        </th>
                                        <th className="border-x border-black">
                                            Freezer
                                        </th>
                                        <th className="border-x border-black">
                                            Medium
                                        </th>
                                        <th className="border-x border-black">
                                            Position
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
                                                    {item.RecordStatus}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.SubProject}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Genus}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.DateSampled}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Freezer}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Medium}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Position}
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
                                        <th>CultureID</th>
                                        <th className="border-x border-black">
                                            Custodian
                                        </th>
                                        <th className="border-x border-black">
                                            EnteredBy
                                        </th>
                                        <th className="border-x border-black">
                                            Position
                                        </th>
                                        <th className="border-x border-black">
                                            SampledBy
                                        </th>
                                        <th className="border-x border-black">
                                            Genus
                                        </th>
                                        <th className="border-x border-black">
                                            Stem
                                        </th>
                                        <th className="border-x border-black">
                                            Tissue
                                        </th>
                                        <th className="border-x border-black">
                                            SpecimenID
                                        </th>
                                        <th className="border-x border-black">
                                            Box
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
                                                <td>{item.CultureID}</td>
                                                <td className="border-x border-black px-2">
                                                    {item.Custodian}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.EnteredBy}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Position}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.SampledBy}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Genus}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Stem}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Tissue}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.SpecimenID}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Box}
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
                                        <th>EnteredBy</th>
                                        <th className="border-x border-black">
                                            Molecule
                                        </th>
                                        <th className="border-x border-black">
                                            Platform
                                        </th>
                                        <th className="border-x border-black">
                                            Provider
                                        </th>
                                        <th className="border-x border-black">
                                            Purpose
                                        </th>
                                        <th className="border-x border-black">
                                            Genus
                                        </th>
                                        <th className="border-x border-black">
                                            Ref
                                        </th>
                                        <th className="border-x border-black">
                                            SampleID
                                        </th>
                                        <th className="border-x border-black">
                                            Storage
                                        </th>
                                        <th className="border-x border-black">
                                            SubProject
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
                                                <td>{item.EnteredBy}</td>
                                                <td className="border-x border-black px-2">
                                                    {item.Molecule}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Platform}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Provider}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Purpose}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Genus}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Ref}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.SampleID}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Storage}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.SubProject}
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
                                            RoomID
                                        </th>
                                        <th className="border-x border-black">
                                            RecNo
                                        </th>
                                        <th className="border-x border-black">
                                            Genus
                                        </th>
                                        <th className="border-x border-black">
                                            NewCageID
                                        </th>
                                        <th className="border-x border-black">
                                            VerifiedBy
                                        </th>
                                        <th className="border-x border-black">
                                            MovedBy
                                        </th>
                                        <th className="border-x border-black">
                                            MovedFrom
                                        </th>
                                        <th>Purpose</th>
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
                                                    {item.RoomID}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.RecNo}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.Genus}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.NewCageID}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.VerifiedBy}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.MovedBy}
                                                </td>
                                                <td className="border-x border-black px-2">
                                                    {item.MovedFrom}
                                                </td>
                                                <td>{item.Purpose}</td>
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
