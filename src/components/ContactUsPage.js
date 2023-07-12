import React, { useRef, useState } from 'react';
import Loading from './Loading';
import { contactUsValidator } from '../validators/supportValidator';
import ReCAPTCHA from 'react-google-recaptcha';
import { reCAPTCHA_KEY } from '../utils/constants';
import { ContactUS as ContactUSapi } from '../api/apiService';
import { toast } from 'react-toastify';

const ContactUsPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [resSubmitted, setResSubmitted] = useState(false);

    const recaptchaRef = useRef(0);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = {
            name, email, message
        };

        const { error } = contactUsValidator.validate(requestData);

        if (error) {
            toast.error(error.details[0].message, {
                position: toast.POSITION.TOP_RIGHT
            });
            return;
        }

        setIsLoading(true);

        try {

            const captchaToken = await recaptchaRef.current.executeAsync();
            recaptchaRef.current.reset();

            const res = await ContactUSapi({ ...requestData, captchaToken });

            if (!res) {
                setIsLoading(false);
                return
            }

            setName('');
            setEmail('');
            setMessage('');

            setIsLoading(false);
            setResSubmitted(true);

        } catch (error) {

            // console.log(error);

            setIsLoading(false);
            setName("");
            setEmail("");
            setMessage("");

            toast.error(error.message, {
                position: toast.POSITION.TOP_RIGHT
            });

        }
    };

    return (
        <div className="flex items-center justify-center flex-grow">
            {!resSubmitted ?
                <>
                    <div className="bg-white shadow-lg rounded-lg m-2 md:m-0 p-6 w-96 md:w-[600px]">
                        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-lg font-bold mb-2">
                                    Name <span className='text-gray-500'>(optional)</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="border border-gray-300 rounded py-2 px-4 w-full"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-lg font-bold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="border border-gray-300 rounded py-2 px-4 w-full"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block text-lg font-bold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="border border-gray-300 rounded py-2 px-4 w-full resize-y h-32"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-600 text-white py-2 px-4 rounded font-bold hover:bg-blue-700 relative w-full flex align-center justify-center"
                                disabled={isLoading}
                            >
                                {isLoading && (
                                    <Loading />
                                )}
                                {isLoading ? '' : 'Submit'}
                            </button>

                        </form>
                    </div>
                    <div>
                        <ReCAPTCHA sitekey={reCAPTCHA_KEY} ref={recaptchaRef} size="invisible" />
                    </div>
                </>
                :
                <div className='bg-white shadow-lg rounded-lg m-2 md:m-0 p-6 w-96 md:w-[600px]'>
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center" role="alert">
                        <strong className="font-bold">💫✨ Success!!! {" "}</strong>
                        <span className="block sm:inline">Thanks for contacting us. We have received your submission.</span>
                    </div>
                </div>

            }
        </div>
    );
};

export default ContactUsPage;
