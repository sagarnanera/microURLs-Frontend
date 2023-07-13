import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from 'react-toastify';
import Loading from "./Loading";
import { createShortURL } from "../api/apiService";
import { urlValidator } from "../validators/urlValidator";

import { BASE_URL, reCAPTCHA_KEY } from '../utils/constants'
import { useDispatch } from "react-redux";
import { addURL } from "../store/actions/urlsActions";

const InputUrlBox = ({ setShorten_URL }) => {

  const [Original_URL, setOriginalUrl] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const recaptchaRef = useRef(0);

  const handleSubmit = async e => {
    e.preventDefault();

    const requestData = {
      Original_URL
    };

    if (customSlug && customSlug !== "") {
      requestData.customSlug = customSlug;
    }

    const { error } = urlValidator.validate(requestData);

    if (error) {
      toast.error(error.details[0].message, {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }

    setLoading(true);

    try {
      const captchaToken = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      const res = await createShortURL({ ...requestData, captchaToken });

      if (!res) {
        setLoading(false)
        return
      }

      setLoading(false)
      setCustomSlug("");
      setOriginalUrl("");

      setShorten_URL({ ...res.data.Shorten_URL });
      dispatch(addURL({ ...res.data.Shorten_URL }));


      return

    } catch (error) {

      // console.log(error);

      setLoading(false);

      setCustomSlug("");
      setOriginalUrl("");

      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT
      });

    }
  };

  return (
    <div className="flex flex-col bg-white p-2 md:p-4 m-2 rounded w-auto min-[1230px]:w-[600px]">
      <div>
        <div>
          <div className="flex flex-col mx-2">
            <div className="flex">
              <label className="m-1 font-medium text-xl  md:text-2xl" htmlFor="original-url">
                Enter long URL
              </label>
            </div>
            <input
              className="w-full border rounded text-lg  md:text-xl p-2"
              type="url"
              name="original-url"
              id="original-url"
              value={Original_URL}
              onChange={e => {
                setOriginalUrl(e.target.value);
              }}
              required
              autoFocus
            />
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <div className="flex">
            <label className="m-1 font-medium text-xl  md:text-2xl mx-2" htmlFor="shorten-url">
              Add custom Slug
            </label>
          </div>
          <div className="w-full flex flex-col md:flex-row">
            <div className="md:w-1/2 m-2 md:mr-1">
              <input
                className="w-full border rounded text-lg  md:text-xl p-2 outline-none"
                type="text"
                name="host-url"
                id="host-url"
                readOnly
                value={BASE_URL}
              />
            </div>
            <div className="md:w-1/2 m-2 md:ml-1">
              <input
                className="w-full border rounded text-lg  md:text-xl p-2"
                type="text"
                name="custom-slug"
                id="custom-slug"
                value={customSlug}
                onChange={e => {
                  setCustomSlug(e.target.value)
                }}
                placeholder="custom-slug"
              />
            </div>
          </div>
        </div>
        <div className="mx-2">
          <button
            className="w-full mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-xl flex align-center justify-center"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? <Loading /> : "Create microURL"}
          </button>
        </div>
      </div>
      <div>
        <ReCAPTCHA sitekey={reCAPTCHA_KEY} ref={recaptchaRef} size="invisible" />
      </div>
    </div>
  );
}

export default InputUrlBox;