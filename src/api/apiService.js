// apiService.js

import axios from 'axios';
import { toast } from 'react-toastify';

import { BASE_URL } from "../utils/constants";

const apiService = axios.create({
    baseURL: BASE_URL,
});

apiService.defaults.timeout = 5000;

apiService.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle the error here
        let errorMessage = "An unexpected error occurred. Please try again later.";

        if (error.response && error.response.data && error.response.data.message) {
            // Handle specific error message from the server response
            errorMessage = error.response.data.message;
        } else if (error.request) {
            // Handle error when the request was made but no response was received
            errorMessage = "Unable to reach the server. Please try again later.";
        }
        throw new Error(errorMessage || "An unexpected error occurred. Please try again later.");
    }
);



const options = {
    validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
    }
}

export const Login = async (data) => {
    // return await apiService.post('/api/auth/login', data, options);

    try {
        const res = await apiService.post('/api/auth/login', data, options);

        if (res.status === 200) {
            return res;
        }

        toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT
        });

        return null;


    } catch (error) {
        throw error;
    }

}
export const SignUP = async (data) => {
    try {
        const res = await apiService.post('/api/auth/register', data, options);

        if (res.status === 200) {
            return res;
        }

        toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT
        });

        return null;


    } catch (error) {
        throw error;
    }
}
export const LogOUT = async () => {
    try {
        const res = await apiService.post('/api/auth/logout');

        if (res.status === 200) {
            return res;
        }

        toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT
        });

        return null;


    } catch (error) {
        throw error;
    }
}

// public - no auth required
export const createShortURL = async (requestData) => {

    try {
        const res = await apiService.post('/api/url/addURL', requestData, options);

        if (res.status === 200) {
            return res;
        }

        toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT
        });

        return null;


    } catch (error) {
        throw error;
    }
};

// protected - auth required
export const createShortURLbyUser = async (requestData) => {

    try {
        const res = await apiService.post('/api/url/addURLprivateL', requestData, options);

        if (res.status === 200) {
            return res;
        }

        toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT
        });

        return null;


    } catch (error) {
        throw error;
    }
};

export const getURLs = async () => {

    try {
        const res = await await apiService.get('/api/url/getURLs', options);

        if (res.status === 200) {
            return res;
        }

        toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT
        });

        return null;


    } catch (error) {
        throw error;
    }
};

export const getURLbyID = async (id) => {
    try {
        const res = await apiService.get(`/api/url/getURL/${id}`, options);

        if (res.status === 200) {
            return res;
        }

        toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT
        });

        return null;


    } catch (error) {
        throw error;
    }
};

export const editURL = async (id, updatedSlug) => {
    try {
        const res = await apiService.post(`/api/url/editURLslug`, { id, updatedSlug }, options);

        if (res.status === 200) {
            return res;
        }

        toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT
        });

        return null;

    } catch (error) {
        throw error;
    }
};

export const deleteURL = async (id) => {

    try {
        const res = await apiService.post('/api/url/deleteURL', { id }, options);

        if (res.status === 200) {
            return res;
        }

        toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT
        });

        return null;


    } catch (error) {
        throw error;
    }
};

export const getStats = async () => {

    try {
        const res = await apiService.get('/api/url/getData', options);

        if (res.status === 200) {
            return res;
        }

        toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT
        });

        return null;


    } catch (error) {
        throw error;
    }

};

export const getStatsByURL = async (id) => {
    try {
        const res = await apiService.get(`/api/url/getData/${id}`, options);

        if (res.status === 200) {
            return res;
        }

        toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT
        });

        return null;


    } catch (error) {
        throw error;
    }
};

export const ContactUS = async (data) => {
    try {
        const res = await apiService.post(`/api/support/contact-us`, data, options);

        if (res.status === 200) {
            return res;
        }

        toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT
        });

        return null;


    } catch (error) {
        throw error;
    }
};

export const getClicks = async (data) => {
    try {
        const res = await apiService.post(`/api/url/getClicks`, data, options);

        if (res.status === 200) {
            return res;
        }

        return null;


    } catch (error) {
        throw error;
    }
};