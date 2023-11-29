import React, { useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
    const captchaRef = useRef(null);

    const callback = function (value) {
        console.log('Done!!!!', value);
    };

    const handleSubmit = function (e) {
        e.preventDefault();
        const token = captchaRef.current.getValue();
        console.log(token)
        captchaRef.current.reset();
    };
    return (
        <div className="min-h-screen bg-gray-200 mt-12">
            <div className="pt-10 md:pt-20">
                <div className="p-4 md:p-8">
                    <h1 className="text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">Contact Me</h1>
                    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                        <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                            <div className="flex flex-col md:flex-row">
                                <input id="name" type="text"
                                    className="my-2 py-2 px-4 rounded-md w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Name" />
                                <input id="email" type="email"
                                    className="my-2 py-2 px-4 rounded-md w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Email" />
                            </div>
                            <input id="subject" type="text" placeholder="Subject"
                                className="my-2 py-2 px-4 rounded-md w-full outline-none focus:ring-2 focus:ring-blue-600" />
                            <textarea id="message" rows="5" placeholder="Say Something"
                                className="my-2 py-2 px-4 rounded-md w-full outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                        </div>
                        <ReCAPTCHA
                            sitekey={import.meta.env.VITE_APP_SECRET_KEY}
                            onChange={callback}
                            ref={captchaRef}
                        />
                        <button
                            className="border-2 text-md mt-5 rounded-md py-2 px-4 bg-yellow-600 hover:bg-yellow-700 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-600">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm