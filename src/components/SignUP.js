import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './Loading';
import { Link, useNavigate } from 'react-router-dom';
import { SignupValidator } from '../validators/authValidator';
import { reCAPTCHA_KEY } from '../utils/constants'
import { useDispatch } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import { SignUP as SignUPapi } from '../api/apiService';
import { setUser } from '../store/actions/userActions'


const SignUp = () => {
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();
  const recaptchaRef = useRef(0);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      email: userData.email,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
      userName: userData.userName
    };

    const { error } = SignupValidator.validate(userData);

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

      const { confirmPassword, ...Data } = requestData;

      const res = await SignUPapi({ ...Data, captchaToken });

      if (!res) {
        setIsLoading(false);
        return
      }

      // Clear the form inputs after submission
      setUserData({
        userName: '',
        password: '',
        confirmPassword: '',
        email: ''
      });

      setIsLoading(false);

      // console.log(res.data.user);

      dispatch(setUser(res.data.user));

      setIsLoading(false);

      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT
      });


      navigate('/dashboard');

    } catch (error) {

      // console.log(error);
      setIsLoading(false);

      setUserData({
        userName: '',
        password: '',
        confirmPassword: '',
        email: ''
      });

      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg m-2 p-6 w-full md:w-[600px]">
        <h1 className="text-3xl font-bold mb-4 text-center">Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="userName" className="block text-lg font-bold mb-2">
              User Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userData.userName}
              onChange={handleChange}
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
              name="email"
              value={userData.email}
              onChange={handleChange}
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
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="border border-gray-300 rounded py-2 px-4 w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-lg font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleChange}
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
            {isLoading ? '' : 'Sign Up'}
          </button>
        </form>

        <div className="text-center mt-4">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
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

export default SignUp;
