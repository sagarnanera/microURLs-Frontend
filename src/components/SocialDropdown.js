import React, { useEffect, useRef, useState } from 'react';
import { FaFacebookSquare, FaWhatsappSquare, FaTwitterSquare, FaInstagramSquare, FaShare, FaShareAlt, FaLinkedin, FaMailBulk, FaEnvelope } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

const SocialDropdown = ({ Shorten_URL }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [isDropdownUp, setIsDropdownUp] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleShare = (platform) => {
        let shareUrl = '';

        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`Check out this microURL I created! It's a shorter and more convenient way to share links. 😄 \n ${Shorten_URL}`)}`;
                break;
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`Hey, I've started using microURLs to make sharing links easier. Try it out! 😊\n ${Shorten_URL}`)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(`Discover the power of microURLs! Shorten your links and simplify sharing 🚀. \n ${Shorten_URL}`)}`;
                break;
            case 'instagram':
                shareUrl = `https://www.instagram.com/?url=${encodeURIComponent(`Sharing my favorite microURL! Say goodbye to long and messy links. ✨\n ${Shorten_URL}`)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`Excited to share my experience with microURLs. Join the trend and optimize your link sharing! 🌟\n ${Shorten_URL}`)}`;
                break;
            case 'email':
                const subject = 'Check out this microURL';
                const body = `Hi,\n\nI wanted to share this microURL with you. It's a convenient way to share links.\n ${Shorten_URL}`;
                shareUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                break;
            default:
                break;
        }

        if (shareUrl) {
            window.open(shareUrl, '_blank');
        }
    };


    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect();
            setIsDropdownUp(rect.bottom + 250 >= window.innerHeight);
        }
    }, [isOpen]);

    return (
        <div className={`relative ${isDropdownUp ? 'bottom-full' : ''}`} ref={dropdownRef}>
            <button
                className="text-white mx-1 bg-blue-600 rounded hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg sm:text-md p-2 md:p-2 md:px-4"
                onClick={toggleDropdown}
                data-tooltip-id='share'
            >
                <FaShareAlt className="text-xl inline-block mr-2" />Share
            </button>
            <Tooltip id='share' content='Share microURL to Social media' />
            {isOpen && (
                <div
                    className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-20 ${isDropdownUp ? 'bottom-12' : ''}`}
                >
                    <h3 className='text-lg sm:text-md text-center'>Share On Socials</h3>
                    <button className="flex items-center w-full p-2 hover:bg-blue-800 hover:text-white focus:outline-none focus:bg-blue-800 focus:text-white"
                        onClick={() => handleShare('facebook')}
                    >
                        <FaFacebookSquare className="text-4xl sm:text-2xl mr-2" />
                        Facebook
                    </button>
                    <button className="flex items-center w-full p-2 hover:bg-blue-800 hover:text-white focus:outline-none focus:bg-blue-800 focus:text-white"
                        onClick={() => handleShare('whatsapp')}
                    >
                        <FaWhatsappSquare className="text-4xl sm:text-2xl mr-2" />
                        WhatsApp
                    </button>
                    <button className="flex items-center w-full p-2 hover:bg-blue-800 hover:text-white focus:outline-none focus:bg-blue-800 focus:text-white"
                        onClick={() => handleShare('twitter')}
                    >
                        <FaTwitterSquare className="text-4xl sm:text-2xl mr-2" />
                        Twitter
                    </button>
                    <button className="flex items-center w-full p-2 hover:bg-blue-800 hover:text-white focus:outline-none focus:bg-blue-800 focus:text-white"
                        onClick={() => handleShare('instagram')}
                    >
                        <FaInstagramSquare className="text-4xl sm:text-2xl mr-2" />
                        Instagram
                    </button>
                    <button className="flex items-center w-full p-2 hover:bg-blue-800 hover:text-white focus:outline-none focus:bg-blue-800 focus:text-white"
                        onClick={() => handleShare('linkedin')}
                    >
                        <FaLinkedin className="text-4xl sm:text-2xl mr-2" />
                        Linkedin
                    </button>
                    <button className="flex items-center w-full p-2 hover:bg-blue-800 hover:text-white focus:outline-none focus:bg-blue-800 focus:text-white"
                        onClick={() => handleShare('email')}
                    >
                        <FaEnvelope className="text-4xl sm:text-2xl mr-2" />
                        Email
                    </button>
                </div>
            )}
        </div>
    );
};

export default SocialDropdown;

