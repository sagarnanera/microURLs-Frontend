import React, { useState } from 'react';
import InputUrlBox from '../components/InputUrlBox';
import ShortenUrlBox from '../components/ShortenUrlBox';
import { useNavigate } from 'react-router-dom';

const IndexPage = () => {

    const navigate = useNavigate();
    const [shorten_URL, setShorten_URL] = useState({});

    return (
        <div className="flex-grow">
            {!shorten_URL.Shorten_URL ? (
                <InputUrlBox setShorten_URL={setShorten_URL} />
            ) : (
                <ShortenUrlBox shorten_URL={shorten_URL} setShorten_URL={setShorten_URL} />
            )}

            <hr className='min-[1230px]:hidden mt-8 mx-2 md:mx-8' />

            <div className='flex w-full min-[1230px]:justify-end text-white'>
                <div className="w-auto min-[1230px]:w-1/2 min-[1230px]:-mt-60">
                    <div className='container p-4 w-auto min-[1230px]:w-[600px]'>
                        <header className="text-center my-8">
                            <h1 className="text-4xl font-bold text-center">Welcome to microURLs</h1>
                        </header>
                        <section className="my-4">
                            <p className="text-lg  text-justify">
                                Create short and customized URLs with microURLs. Simplify long and complex links into concise and shareable ones. Perfect for social media, marketing campaigns, and more! <span className='text-[#2ED3BF] font-semibold'> This is just initial release. New Features coming soon. Stay tuned 🌻 !!! </span>
                            </p>
                        </section>
                        <section className="my-4">
                            <h2 className="text-2xl font-bold mb-4">Key Features:</h2>
                            <ul className="list-disc list-inside text-lg pl-2">
                                <li>🔗 Instantly generate short URLs</li>
                                <li>🔀 Customize your links with custom slugs</li>
                                <li>📊 Track and analyze link performance</li>
                            </ul>
                        </section>
                        {/* <section className="my-0.5 w-full flex justify-center">
                            <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700"
                                onClick={() => { navigate('/signup') }}
                            >
                                Get Started
                            </button>
                        </section> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndexPage;
