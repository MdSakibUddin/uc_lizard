import Image from 'next/image';
import { Inter } from 'next/font/google';
import logo from '../../assets/pic2.png';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
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

    const members = [
        {
            name: 'Md Sakib Uddin',
            course: 'Bachelor of Computer Science and Engineering, BRAC University',
            course2:
                'Masters of Information Technology and Systems (Specialisation in Cyber Security), University of Canberra',
            role: 'Frontend and Backend Developer',
        },
        {
            name: 'Md Sakib Uddin',
            course: 'Bachelor of Computer Science and Engineering, BRAC University',
            course2:
                'Masters of Information Technology and Systems (Specialisation in Cyber Security), University of Canberra',
            role: 'Frontend and Backend Developer',
        },
        {
            name: 'Md Sakib Uddin',
            course: 'Bachelor of Computer Science and Engineering, BRAC University',
            course2:
                'Masters of Information Technology and Systems (Specialisation in Cyber Security), University of Canberra',
            role: 'Frontend and Backend Developer',
        },
    ];

    return (
        <>
            <Header />
            <main id="content" className="mx-auto bg-[#92D6E3] min-h-[89vh]">
                <div className="container mx-auto py-7">
                    <div className="bg-white shadow rounded p-5 mb-7 text-center">
                        <h2 className=" font-medium text-2xl mb-3">
                            Introduction
                        </h2>
                        <p>
                            Welcome to the Arthur Georges Lizard Colony digital
                            portal. We, a dedicated team from the University of
                            Canberra, are passionate about creating innovative
                            solutions for today{"'"}s challenges. Our most
                            recent endeavor is the 2023 – S2 – 59 Lizard Cage
                            Display Project. This project stemmed from a simple
                            desire: to provide caretakers and scientists with
                            swift access to critical data about the Arthur
                            Georges lizard colony.
                        </p>
                    </div>
                    <div className="bg-white shadow rounded p-5 mb-7 text-center">
                        <h2 className=" font-medium text-2xl mb-3">
                            Our Vision
                        </h2>
                        <p>
                            We envision a future where managing the Arthur
                            Georges lizard colony becomes not only efficient but
                            also seamlessly interconnected. This platform is our
                            step towards that direction - a virtual space
                            accessible from commonplace devices that make
                            information about our scaly friends available at the
                            tip of your fingers. Our aim? Unparalleled
                            accessibility.
                        </p>
                    </div>

                    <h1 className="text-center pt-5 text-2xl font-medium mb-5">
                        My Team
                    </h1>
                    <div className="grid lg:grid-cols-1 gap-7 ">
                        {members.map((item, index) => (
                            <div
                                key={index}
                                className={`bg-white shadow rounded p-5`}
                            >
                                <p>
                                    <strong>Name:</strong> {item.name}
                                </p>
                                <p>
                                    <strong>Role:</strong> {item.role}
                                </p>
                                <p>
                                    <strong>Course:</strong> {item.course}
                                </p>
                                <p>
                                    <strong>Course2:</strong> {item.course2}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white shadow rounded p-5 my-7 text-center">
                        <h2 className=" font-medium text-2xl mb-3">
                            Our Legacy
                        </h2>
                        <p>
                            Our project isn't just about creating a digital
                            platform; it's about fostering an environment where
                            the well-being and insights of the Arthur Georges
                            lizard colony become part of an interconnected web
                            of knowledge. Through our platform, we aim to make
                            the bond between humans and lizards stronger and
                            more insightful.
                        </p>
                    </div>
                    <div className="bg-white shadow rounded p-5 mb-7 text-center">
                        <h2 className=" font-medium text-2xl mb-3">
                            Sponsorship & Mentorship:
                        </h2>
                        <p>
                            Guiding our path is our respected sponsor, Michael
                            Pritchard from the Faculty of Science & Technology,
                            University of Canberra, and our mentor, Munir Saeed,
                            whose expertise and insights have been invaluable.
                        </p>
                    </div>
                    <div className="bg-white shadow rounded-t p-5 pb-2 text-center">
                        <h2 className=" font-medium text-2xl mb-3">Join Us</h2>
                        <p>
                            Engage with us and explore a trove of information
                            about our scaly companions. Dive deep into the life
                            of the colony{"'"}s inhabitants and discover a world
                            where technology meets nature.
                        </p>
                    </div>
                    <div className="bg-white shadow rounded-b p-5 text-center">
                        <p>
                            Should you have any inquiries or feedback, don't
                            hesitate to reach out. We're continually looking to
                            evolve and appreciate your support in our journey.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
