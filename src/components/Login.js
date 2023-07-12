import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import Loading from './Loading';
import { Link, useNavigate } from 'react-router-dom';
import { Login as LoginAPi } from '../api/apiService';
import { LoginValidator } from '../validators/authValidator';
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/actions/userActions'


import { reCAPTCHA_KEY } from '../utils/constants'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const recaptchaRef = useRef(0);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = {
            email, password
        };

        const { error } = LoginValidator.validate(requestData);

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

            const res = await LoginAPi({ ...requestData, captchaToken });

            if (!res) {
                setIsLoading(false);
                return
            }

            // Clear the form inputs after submission
            setEmail('');
            setPassword('');

            setIsLoading(false);


            // console.log(res.data.user);
            dispatch(setUser(res.data.user));

            toast.success('Login successful', {
                position: toast.POSITION.TOP_RIGHT
            });

            navigate('/dashboard');

        } catch (error) {

            console.log(error);
            setIsLoading(false);
            setEmail("");
            setPassword("");

            toast.error(error.message, {
                position: toast.POSITION.TOP_RIGHT
            });

        }
    };

    return (
        <div className="flex items-center justify-center flex-grow">
            <div className="bg-white shadow-lg rounded-lg m-2 md:m-0 p-6 w-full md:w-[600px]">
                <h1 className="font-bold mb-6 text-center text-2xl md:text-4xl">Login</h1>

                <form onSubmit={handleSubmit}>
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
                        <label htmlFor="password" className="block text-lg font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-300 rounded py-2 px-4 w-full"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded font-bold hover:bg-blue-700 relative w-full flex align-center justify-center"
                        disabled={isLoading}
                    >
                        {isLoading && (
                            <Loading />
                        )}
                        {isLoading ? '' : 'Login'}
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p>
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-blue-600 hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
            <div>
                <ReCAPTCHA sitekey={reCAPTCHA_KEY} ref={recaptchaRef} size="invisible" />
            </div>
        </div>
    );
};

export default Login;
