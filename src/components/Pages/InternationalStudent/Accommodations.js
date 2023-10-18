import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import Footer from "../../Footer";
import Navbar from "../../Navbar";

export default function Accommodations() {
    return (
        <div className="bg-green-200 ">
            <Navbar />
            <div className="container mb-24 pt-28 mx-auto md:px-6">
                <section className="">
                    <Breadcrumbs className="flex justify-end px-20    ">
                        <NavLink
                            to="/"
                            className="text-[16px] font-semibold leading-10  text-gray-900 hover:text-blue-500"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/InternationalStudents/Accommodations"
                            className="text-[16px] font-semibold leading-10  text-blue-500"
                        >
                            ACCOMMODATIONS
                        </NavLink>
                    </Breadcrumbs>
                    <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] rounded-md bg-no-repeat bg-[url('https://c1.wallpaperflare.com/preview/784/758/415/covering-reading-books-elegant.jpg')]"></div>
                    <div className="container px-6 md:px-12">
                        <div className="block rounded-lg h-auto bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                            <div className="flex flex-wrap">
                                <div className="mx-8">
                                    <div className="text-5xl font-bold">Accommodations</div>
                                    <hr className=" mt-10 text-black" />
                                    <div className="text-2xl font-bold mt-7">
                                        Lucknow is regarded as a culturally rich city due to its heritage, culture, art, music and food. With number of posh areas in Lucknow, the city is one of the best Tier 2 cities to live in.
                                    </div>
                                    <div className="text-2xl font-bold mt-7">
                                        Lucknow is considered a good place since the city offers a beautiful blend of ease of a small town along with the benefits of a big city.
                                        Apart from this, the localities offer various beautiful attraction, healthcare centres.
                                        Before arriving in India, it may be helpful to consider what type of housing you are interested in pursuing:

                                    </div>
                                    <div className="text-2xl mt-8 flex items-center">
                                        1. Homestay- Perfect for singles and youngers students home stays give the advantage of living with a local Indian family and sharing their table. .
                                    </div>
                                    <div className="text-2xl mt-4 flex items-center">
                                        2. Apartment- Ranging from 2-4 bedrooms, apartment represent a more modern living arrangement compared with other options in India .
                                    </div>
                                    <div className="text-2xl mt-4 flex items-center">
                                        3. House flat- Perhaps the most common housing arrangement for foreigners in India, 2-3 bedroom house flats represent a unique option owing to Indian tradition.
                                        House flats are typically rented as an entire floor of the house with a private entrance.
                                    </div>
                                    <div className="text-2xl mt-4 flex items-center">
                                        4. House- For larger families and those seeking more privacy, rental of an entire house is also an option. 
                                    </div>
                                    <hr className=" mt-10 text-black" />
                                    <div className="text-2xl font-bold mt-7">
                                    Rental homes typically feature 2-6 bedrooms and can be multi-story.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
