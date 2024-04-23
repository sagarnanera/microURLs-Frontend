import React from 'react'
import ShareURL from './ShareURL';


const ShortenUrlBox = ({ shorten_URL, setShorten_URL }) => {

    const handleClick = () => {
        setShorten_URL({
            Original_URL: "",
            Shorten_URL: ""
        });
    }
    return (
        <>
            <div className="flex flex-col bg-white p-2 md:p-4 m-2 rounded w-auto min-[1230px]:w-[600px]">
                <div>
                    <div>
                        <div className="flex flex-col mx-2">
                            <div className="flex">
                                <label className="m-1 font-medium text-xl  md:text-2xl" htmlFor="original-url">
                                    Your long URL
                                </label>
                            </div>
                            <input
                                className="w-full border rounded text-lg  md:text-xl p-2 outline-none"
                                type="text"
                                name="original-url"
                                id="original-url"
                                value={shorten_URL.Original_URL}
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mt-4">
                        <div className="flex">
                            <label className="m-1 font-medium text-xl  md:text-2xl mx-2" htmlFor="shorten-url">
                                microURL
                            </label>
                        </div>
                        <div className="w-full mx-2 ml-1">
                            <input
                                className="w-full border rounded text-lg  md:text-xl p-2 outline-none"
                                type="text"
                                name="shorten-url"
                                id="shorten-url"
                                value={shorten_URL.Shorten_URL}
                                placeholder="shorten-url"
                                readOnly
                            />
                        </div>
                    </div>
                    <ShareURL Shorten_URL={shorten_URL.Shorten_URL} from={"shorten-box"}/>
                    <div className="mx-2">
                        <button
                        id='create-another-shorten-box-button'
                            className="w-full mt-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-xl"
                            onClick={handleClick}
                        >
                            Create another microURL
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShortenUrlBox
