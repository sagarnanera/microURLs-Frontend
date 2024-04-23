import React from 'react'
import { FaCopy, FaShare } from 'react-icons/fa'
import { Tooltip } from 'react-tooltip'
import SocialDropdown from './SocialDropdown'
import { toast } from 'react-toastify';

const ShareURL = ({ Shorten_URL,from }) => {

    return (
        <>
            <div className="my-2 flex justify-between md:justify-start md:pl-2">
                <button
                    className={`${from === "shorten-box" ? "visit-shorten-box-btn":"visit-myurl-btn" } text-blue-800 mx-1 border border-blue-800 bg-transparent rounded hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg sm:text-md p-2 md:p-2 md:px-4`}
                    data-tooltip-id='visit'
                    onClick={() => window.open(Shorten_URL)}
                >
                    <FaShare />
                </button>
                <Tooltip id='visit' content='Visit URL' />
                <SocialDropdown Shorten_URL={Shorten_URL} from={from}/>
                <button
                    className={`${from === "shorten-box" ? "copy-shorten-box-btn":"copy-myurl-btn" } text-white mx-1 border bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-lg sm:text-md p-2 md:p-2 md:px-4`}
                    data-tooltip-id='copy'
                    onClick={() => {

                        navigator.clipboard.writeText(Shorten_URL)
                            .then(() => {
                                toast.success('microURL Copied to clipboard');
                            })
                            .catch(() => {
                                toast.error('Failed to copy to clipboard');
                            });

                    }}
                >
                    <FaCopy className='text-xl inline-block mr-2' />Copy
                </button>
                <Tooltip id='copy' content='Copy URL to the clipboard' />
            </div>
        </>
    )
}

export default ShareURL
