import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="text-center md:text-left mb-2 md:mb-0">
                        &copy; {new Date().getFullYear()} microURLs. All rights reserved.
                    </p>
                    <div className="flex items-center md:mr-16">
                        <Link
                            to="/privacy-policy"
                            className="text-gray-400 hover:text-white mx-3 transition duration-300"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to="/terms-conditions"
                            className="text-gray-400 hover:text-white mx-3 transition duration-300"
                        >
                            Terms & Conditions
                        </Link>
                        <Link
                            to="/contact-us"
                            className="text-gray-400 hover:text-white mx-3 transition duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
