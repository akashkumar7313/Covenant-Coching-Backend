import React from "react";
import image1 from './assets/1 (6) copy.jpg'
import image2 from './assets/1 (2).png'
import image3 from './assets/1 (1).png'
import image4 from './assets/BritishCouncil.JPG'
import image5 from './assets/pte2.JPG'
import image6 from './assets/1 (6).png'

export default function Certifications() {
  return (
    <div className="item-center bg-cyan-100">
      <div className="container px-10 mx-auto pt-14 pb-14">
        <section className=" text-gray-800">
          <h2 className="text-4xl font-bold mb-6 text-center">Certifications</h2>
          <h2 className="text-2xl font-bold mb-14 text-center">Our staff aren’t just qualified, they’ve got the awards and certifications to prove it.</h2>
          <div className="grid lg:grid-cols-6 gap-6">
            <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg">
              <img
                src={image1}
                className="w-full"
                alt="image1"
              />
            </div>
            <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg">
              <img
                src={image6}
                className="w-full"
                alt="image2"
              />
            </div>
            <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg">
              <img
                src={image2}
                className="w-full"
                alt="image2"
              />
            </div>
            <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg">
              <img
                src={image3}
                className="w-full"
                alt="image1"
              />
            </div>
            <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg">
              <img
                src={image4}
                className="w-full"
                alt="image1"
              />
            </div>
            <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg">
              <img
                src={image5}
                className="w-full"
                alt="image1"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-6"></div>
        </section>
      </div>
    </div>
  );
}
