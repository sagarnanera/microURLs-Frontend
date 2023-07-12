const mapClicks = (urls, clicksData) => {
    return urls.map((url) => {
        const clickData = clicksData ? clicksData[url._id] : 0;
        return {
            ...url,
            clicks: clickData ? clickData.totalClicks : 0,
            botClicks: clickData ? clickData.botClicks : 0,
            humanClicks: clickData ? clickData.humanClicks : 0,
        };
    });
};

export default mapClicks;
