// Sidebar.jsx
import React from 'react';

const SidePanel = ({ urls, onURLClick }) => {
    return (
        <div className="bg-gray-200 p-4">
            <h3 className="text-xl font-bold mb-4">URLs</h3>
            <ul>
                {urls.map((url) => (
                    <li
                        key={url._id}
                        onClick={() => onURLClick(url._id)}
                        className="cursor-pointer hover:bg-gray-300 p-2 rounded"
                    >
                        {url._id}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidePanel;