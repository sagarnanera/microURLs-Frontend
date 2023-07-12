import './styles/App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import IndexPage from './pages/IndexPage';


import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsConditionsPage from './components/TermsConditionsPage';
import ContactUsPage from './components/ContactUsPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DashBoardPage from './pages/DashBoardPage';
import PageNotFound from './components/PageNotFound';
import MyURLs from './components/MyURLs';

const HOST = process.env.REACT_APP_HOST;

function App() {

  // const [data, setData] = useState('');

  // useEffect(() => {
  //   axios.get(HOST)
  //     .then(function (response) {
  //       setData(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // }, [])


  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Routes>
            <Route path='/' element={<IndexPage />} />
            <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
            <Route path='/terms-conditions' element={<TermsConditionsPage />} />
            <Route path='/contact-us' element={<ContactUsPage />} />
            {/* <Route path='/login' element={<LoginPage />} /> */}
            {/* <Route path='/signup' element={<SignUpPage />} /> */}
            {/* <Route path='/dashboard' element={<DashBoardPage />} /> */}
            <Route path='/myurls' element={<MyURLs />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
        <ToastContainer style={{ width: "320px" }} />
      </Router>
    </>
  );
}

export default App;
