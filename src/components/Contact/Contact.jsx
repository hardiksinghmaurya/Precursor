import Testimonial from "./Testimonial.jsx"
import { useEffect } from "react";

export default function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="mt-24 flex flex-col min-h-screen justify-center items-center min-w-[100vw]">

            <section className="text-gray-600 body-font relative" data-aos="zoom-out">
                <div className="container px-5 py-2 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-gray-900 ">Contact Us</h1>
                    </div>


                    <div className="lg:w-1/2 md:w-2/3 mx-auto border border-precursor_theme_color px-3 py-3 shadow-xl rounded-md">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-precursor_theme_color focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Phone no</label>
                                    <input type="tel" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-precursor_theme_color focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-precursor_theme_color focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-precursor_theme_color focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-precursor_theme_color/85 border-0 py-2 px-8 focus:outline-none hover:bg-precursor_theme_color/100 rounded text-lg">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex flex-col justify-center items-center mt-6 gap-3 md:w-1/2" data-aos="fade-up">

                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-semiblod border-b-2 border-precursor_theme_color justify-center">Student Views</h1>

                <Testimonial />

            </div>

            <section className="text-gray-600 body-font my-4 relative min-w-[100vw] flex justify-center items-center" data-aos="fade-up">
                <div className="container ">
                    <div className="w-full bg-gray-300 rounded-lg overflow-hidden p-10 relative h-[50vw]">
                        <iframe width="100%" height="100%" className="absolute inset-0" title="map"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.919994089876!2d80.95667557529345!3d26.874282876670097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd66707a1371%3A0x49dc27c64bc0aab2!2sPrecursor%20Info%20Solutions!5e0!3m2!1sen!2sin!4v1707234502204!5m2!1sen!2sin" referrerPolicy="no-referrer"></iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}