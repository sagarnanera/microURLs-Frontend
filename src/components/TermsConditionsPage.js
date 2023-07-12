import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditionsPage = () => {
    return (
        // <div className="container mx-auto px-4 py-8 text-white">
        <div className="flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg m-2 md:m-4 p-6 w-auto">
                <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">Terms and Conditions</h1>

                <h2 className="text-2xl font-bold mt-6">1. Introduction</h2>
                <p className="text-lg text-justify mb-4">
                    Welcome to the microURLs website. These terms and conditions govern your
                    use of this website; by using this website, you accept these terms and
                    conditions in full. If you disagree with these terms and conditions or
                    any part of these terms and conditions, you must not use this website.
                </p>

                <h2 className="text-2xl font-bold mt-6">2. Intellectual Property Rights</h2>
                <p className="text-lg text-justify mb-4">
                    Unless otherwise stated, we or our licensors own the intellectual
                    property rights in the website and material on the website. Subject to
                    the license below, all these intellectual property rights are reserved.
                </p>

                <h2 className="text-2xl font-bold mt-6">3. License to Use Website</h2>
                <p className="text-lg text-justify mb-4">
                    You may view, download for caching purposes only, and print pages from
                    the website for your own personal use, subject to the restrictions set
                    out below and elsewhere in these terms and conditions.
                </p>

                <h2 className="text-2xl font-bold mt-6">4. Restrictions</h2>
                <p className="text-lg text-justify mb-4">
                    You must not:
                    <ul className="list-disc ml-8">
                        <li>Republish material from this website (including republication on another website)</li>
                        <li>Sell, rent, or sub-license material from the website</li>
                        <li>Show any material from the website in public</li>
                        <li>Reproduce, duplicate, copy, or otherwise exploit material on this website for a commercial purpose</li>
                        <li>Edit or otherwise modify any material on the website</li>
                        <li>Redistribute material from this website except for content specifically and expressly made available for redistribution</li>
                    </ul>
                </p>

                <h2 className="text-2xl font-bold mt-6">5. Limitations of Liability</h2>
                <p className="text-lg text-justify mb-4">
                    The information on this website is provided free-of-charge, and you
                    acknowledge that it would be unreasonable to hold us liable in respect
                    of this website and the information on this website. While we endeavor
                    to ensure the accuracy and reliability of the information provided, we
                    make no representations or warranties of any kind, express or implied,
                    about the completeness, accuracy, reliability, suitability, or
                    availability with respect to the website or the information, products,
                    services, or related graphics contained on the website for any purpose.
                </p>

                <h2 className="text-2xl font-bold mt-6">6. Indemnity</h2>
                <p className="text-lg text-justify mb-4">
                    You hereby indemnify us and undertake to keep us indemnified against
                    any losses, damages, costs, liabilities, and expenses (including
                    without limitation legal expenses and any amounts paid by us to a third
                    party in settlement of a claim or dispute on the advice of our legal
                    advisers) incurred or suffered by us arising out of any breach by you of
                    any provision of these terms and conditions.
                </p>

                <h2 className="text-2xl font-bold mt-6">7. Severability</h2>
                <p className="text-lg text-justify mb-4">
                    If a provision of these terms and conditions is determined by any court
                    or other competent authority to be unlawful and/or unenforceable, the
                    other provisions will continue in effect. If any unlawful and/or
                    unenforceable provision would be lawful or enforceable if part of it were
                    deleted, that part will be deemed to be deleted, and the rest of the
                    provision will continue in effect.
                </p>

                <h2 className="text-2xl font-bold mt-6">8. Entire Agreement</h2>
                <p className="text-lg text-justify mb-4">
                    These terms and conditions constitute the entire agreement between you
                    and us in relation to your use of this website and supersede all previous
                    agreements in respect of your use of this website.
                </p>

                <h2 className="text-2xl font-bold mt-6">9. Contact Us</h2>
                <p className="text-lg text-justify mb-4">
                    If you have any questions or concerns about these terms and conditions,
                    please {' '}
                    <Link
                        to={"/contact-us"}
                        className='text-blue-600 hover:underline'>
                        contact us.
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default TermsConditionsPage;
