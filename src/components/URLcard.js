// import React from 'react'
// import ShareURL from './ShareURL'
// import formatDate from '../utils/dateFormator'
// import { Link } from 'react-router-dom'

// const URLcard = ({ url }) => {


//     return (
//         <>
//             {console.log(url)}
//             <div className="bg-white m-2 md:m-4 rounded-lg shadow-lg p-2 md:p-6 w-full md:w-[44%]">
//                 <Link target='_blank' to={url.Shorten_URL} className="text-lg sm:text-xl font-semibold mb-2 md:pl-4 w-[85%] md:w-auto">{url.Shorten_URL}</Link>
//                 <p className="text-gray-600 mb-2 md:pl-4 text-sm sm:text-lg w-[85%] md:w-auto truncate">{url.Original_URL}</p>
//                 <p className="text-gray-500 text-sm mb-4 md:pl-4 w-[85%] md:w-auto truncate">Created on {formatDate(url.createdOn)}
//                 </p>
//                 <ShareURL Shorten_URL={url.Shorten_URL} />
//             </div>
//         </>
//     )
// }

// export default URLcard

import React from 'react';
import { AiOutlineEye, AiOutlineUser, AiOutlineRobot } from 'react-icons/ai';
import ShareURL from './ShareURL';
import formatDate from '../utils/dateFormator';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const URLcard = ({ url, clickData }) => {

    const { Shorten_URL, Original_URL, createdOn } = url;

    return (
        <>
            <div className="bg-white m-2 md:mx-4 md:my-2 rounded-lg shadow-lg p-2 md:px-6 md:py-2 w-full md:w-[44%]">
                <p onClick={() => window.open(Shorten_URL, '_blank')} className="text-xl md:text-2xl font-semibold mb-2 md:pl-4 w-[98%] md:w-auto truncate">
                    {Shorten_URL}
                </p>
                <p className="text-gray-600 mb-2 md:pl-4 text-lg md:text-xl w-[85%] md:w-auto truncate">{Original_URL}</p>
                <p className="text-gray-500 text-sm md:text-md mb-2 md:pl-4 w-[85%] md:w-auto truncate">Created on {formatDate(createdOn)}</p>
                <div className="flex justify-center md:justify-start items-center mb-4 md:pl-4 md:w-auto">
                    <span className="flex text-xl items-center mr-2 text-gray-500" data-tooltip-id='clicks'>
                        <AiOutlineEye className="mr-1" />
                        {clickData ? clickData.totalClicks : 0}
                    </span>
                    <Tooltip id='clicks' content='Total clicks' />
                    <span className="flex text-xl items-center mr-2 text-gray-500" data-tooltip-id='human-clicks'>
                        <AiOutlineUser className="mr-1" />
                        {clickData ? clickData.humanClicks : 0}
                    </span>
                    <Tooltip id='human-clicks' content='Total human clicks' />
                    <span className="flex text-xl items-center text-gray-500" data-tooltip-id='bot-clicks'>
                        <AiOutlineRobot className="mr-1" />
                        {clickData ? clickData.botClicks : 0}
                    </span>
                    <Tooltip id='bot-clicks'>
                        <div className='flex flex-col md:block'>
                            <span>Total bot clicks. {" "}</span>
                            <span>Bots are some computer </span>
                            <span>programs or web scrappers.</span>
                        </div>
                    </Tooltip>
                </div>
                <ShareURL Shorten_URL={Shorten_URL} />
            </div>
        </>
    );
};

export default URLcard;
