import React, { useState, useEffect } from 'react';
import MainSection from '../components/MainPanel';
import { getURLs, getURLStats } from '../api/apiService';
import SidePanel from '../components/SidePanel';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const DashBoardPage = () => {
    const [urls, setUrls] = useState([
        { _id: 1, original_url: 'https://example.com/url1', shorten_url: 'http://localhost:5100/url1', createdOn: '2022-01-01' },
        { _id: 2, original_url: 'https://example.com/url2', shorten_url: 'http://localhost:5100/url2', createdOn: '2022-02-01' },
        { _id: 3, original_url: 'https://example.com/url3', shorten_url: 'http://localhost:5100/url3', createdOn: '2022-03-01' },
    ]);

    const user = useSelector(state => state.user);
    const navigate = useNavigate();


    const [selectedURL, setSelectedURL] = useState(null);

    useEffect(() => {

        // console.log(user);

        if (!user) {
            toast.error("UnAuthorized !!!", {
                position: toast.POSITION.TOP_RIGHT
            });

            navigate('/login', { replace: true })
        }

        // const urls = await getURLs();



    }, []);

    const handleURLClick = (urlId) => {
        setSelectedURL(urlId);
        // console.log(selectedURL);
    };

    return (
        <div className="flex flex-grow">
            {/* <header>{user?.email}</header> */}
            <div className="w-1/4 p-4">
                <SidePanel urls={urls} onURLClick={handleURLClick} />
            </div>
            <div className="w-3/4 p-4">
                <MainSection urlId={selectedURL?._id} />
            </div>
        </div>
    );
};

export default DashBoardPage;
