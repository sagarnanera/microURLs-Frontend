import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import URLcard from './URLcard';
import { getClicks } from '../api/apiService';
// import ReCAPTCHA from 'react-google-recaptcha';
// import { reCAPTCHA_KEY } from '../utils/constants';
// import mapClicks from '../utils/mapClicks';
import { toast } from 'react-toastify';

const MyURLs = () => {
    const urls = useSelector((state) => state.urls);

    const [clicksData, setClicksData] = useState({});

    const navigate = useNavigate();
    // const recaptchaRef = useRef();

    useEffect(() => {

        if (urls.length === 0) {
            return
        }

        const urlIDs = urls.map((url) => url._id)

        const fetchClicksData = async () => {
            try {

                // const captchaToken = await recaptchaRef.current.executeAsync();
                // recaptchaRef.current.reset();

                const res = await getClicks({ urls: urlIDs });

                if (!res) {
                    toast.error("Error fetching Clicks, Please try again later !!!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    return
                }

                setClicksData(res.data.totalClicks);

            } catch (error) {
                // console.log(error);

                toast.error("Error fetching Clicks, Please try again later !!!", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        };

        fetchClicksData();


    }, [urls]);



    return (
        <>
            {urls.length === 0 ? (
                <div className="flex flex-col items-center justify-center flex-grow">
                    <h1 className="text-4xl text-white font-bold mb-4">No URLs Found</h1>
                    <p className="text-lg text-black-600 mb-6">
                        You have not created any URLs yet.
                    </p>
                    <div>
                        <button
                            id='createOne-myurl-btn'
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={() => navigate('/')}
                        >
                            Create One Now
                        </button>
                    </div>
                </div>
            ) : (
                <div className='flex flex-grow flex-col m-2 md:m-0'>
                    <div className='flex justify-evenly items-center'>
                        <h2 className="text-2xl md:text-4xl text-white font-bold my-4 text-center">Your microURLs</h2>
                        <button
                            id='createAnother-myurl-btn'
                            className="bg-blue-600 text-white flex justify-center px-2 sm:p-3 m-1 sm:my-2 rounded font-bold hover:bg-blue-700 sm:inline-block"
                            onClick={() => navigate('/')}
                        >
                            <span className='hidden sm:inline font-bold'> Create Another</span>
                            <span className="sm:hidden font-bold text-3xl">+</span>
                        </button>

                    </div>
                    <div className='w-full flex flex-wrap justify-evenly'>
                        {urls.map((url) => (
                            <URLcard url={url} key={url._id} clickData={clicksData[url._id]} />
                        ))}
                    </div>
                    {/* <div>
                        <ReCAPTCHA sitekey={reCAPTCHA_KEY} ref={recaptchaRef} size="invisible" />
                    </div> */}
                </div>
            )}

        </>
    );
};

export default MyURLs;