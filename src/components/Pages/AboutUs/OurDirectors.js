import React, { useState, useEffect, } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import { firebase } from "../../db/firebase";

export default function OurDirectors() {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const imagesRef = firebase.database().ref('Director');
    imagesRef.on('value', (snapshot) => {
      const images = [];
      snapshot.forEach((childSnapshot) => {
        const image = childSnapshot.val();
        images.push({
          id: childSnapshot.key,
          url: image.url,
          name: image.name,
        });
      });
      setImageData(images);
    });
  
    return () => {
      imagesRef.off();
    };
  }, []);

  return (
    <div className="bg-green-200 ">
      <Navbar />
      <div className="container mb-24 pt-28 mx-auto md:px-6">
        <section className="">
          <Breadcrumbs className="flex justify-end px-20">
            <NavLink
              to="/"
              className="text-[16px] font-semibold leading-10  text-gray-900 hover:text-blue-500"
            >
              Home
            </NavLink>
            <NavLink
              to="/AboutUs/OurDirectors"
              className="text-[16px] font-semibold leading-10  text-blue-500"
            >
              OUR DIRECTORS
            </NavLink>
          </Breadcrumbs>
          <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] rounded-md bg-no-repeat bg-[url('https://img.freepik.com/premium-photo/photo-kids-learning-computer-their-clasroom_763111-26032.jpg')]"></div>
          <div className=" md:px-12 px-6">
            <div className="block rounded-lg h-auto bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <div className="flex flex-wrap">
                <div>
                  <div className="text-5xl font-bold pt-5 lg:pt-0">Our Directors</div>
                  <p className="text-[20px] mt-10  text-neutral-500">
                  Covenant Education was founded in 2019 by Mr. Irwin Amit Das. Collectively, Covenant Education <br /> Director Mr. Irwin Amit Das have earned  British Council, PTE, TOEFL certifications. <br /> His dreams
                  is for covenant education to serve as a bridge that connects  <br /> India and the world.
                  </p>
                </div>
                <div class="mb-4 mx-12 md:px-3 lg:mb-0">
                  <div className=" flex flex-wrap justify-end gap-5 mt-10">
                      {imageData.map((image) => (
                        <div
                          key={image.id}
                        >
                          <img
                            src={image.url}
                            alt="Uploaded"
                            className="rounded-full h-[280px] w-[280px] shadow-lg border border-pink-500 cursor-pointer"
                          />
                        </div>
                      ))}
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
