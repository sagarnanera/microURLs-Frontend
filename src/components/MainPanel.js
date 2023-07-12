// import React from 'react'

// const MainPanel = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default MainPanel

// MainSection.jsx
import React, { useEffect } from 'react';
import { useState } from 'react';

const MainPanel = ({ urlId }) => {

    const [stats, setStats] = useState(
        {
            url: "https://microurls.live/xyzwsk",
            original_url: "https://dashboard.render.com/web/srv-cienfodgkuvlk1hbn440/logs?mode=maximize",
            clicks: 1000,
            uniqueClicks: 800,
            humanClicks: 700,
            botClicks: 100,
            countries: [
                { country: 'United States', clicks: 500 },
                { country: 'Canada', clicks: 200 },
                { country: 'United Kingdom', clicks: 100 },
            ]
        }
    );


    useEffect(() => {

        // console.log(urlId);

    }, [urlId])

    return (
        <div className="p-4">
            <h3 className="text-xl font-bold mb-4">URL Stats</h3>
            {urlId ? (
                <div>
                    <p className="mb-2">
                        <span className="font-bold">URL:</span> {stats.url}
                    </p>
                    <p className="mb-2">
                        <span className="font-bold">Original URL:</span> {stats.original_url}
                    </p>
                    <p className="mb-2">
                        <span className="font-bold">Clicks:</span> {stats.clicks}
                    </p>
                    <p className="mb-2">
                        <span className="font-bold">Unique Clicks:</span>{' '}
                        {stats.uniqueClicks}
                    </p>
                    <p className="mb-2">
                        <span className="font-bold">Human Clicks:</span>{' '}
                        {stats.humanClicks}
                    </p>
                    <p className="mb-2">
                        <span className="font-bold">Bot Clicks:</span>{' '}
                        {stats.botClicks}
                    </p>
                    {/* Additional stats and graphs */}
                </div>
            ) : (
                <p>Select a URL from the sidebar to view its stats.</p>
            )}
        </div>
    );
};

export default MainPanel;
