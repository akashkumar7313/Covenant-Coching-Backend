import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import image1 from '../../assets/WhatsApp Image 2023-10-09 at 16.14.23_85eaa0dc.jpg'
import image2 from '../../assets/WhatsApp Image 2023-10-09 at 16.14.37_f477946a.jpg'
import image3 from '../../assets/WhatsApp Image 2023-10-09 at 16.14.44_bf0138b3.jpg'

export default function Testimonials() {
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
              to="/AboutUs/testimonials"
              className="text-[16px] font-semibold leading-10  text-blue-500"
            >
              TESTIMONIALS
            </NavLink>
          </Breadcrumbs>
          <div className="relative h-[300px]  overflow-hidden bg-cover bg-[50%] rounded-md bg-no-repeat bg-[url('https://cdn.create.vista.com/api/media/small/158788376/stock-photo-close-up-of-business-man')]"></div>
          <div className="container px-6 md:px-12">
            <div className="block rounded-lg h-auto bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <div className="flex flex-wrap gap-20 justify-evenly">
                <div class=" mx-auto md:px-6">
                  <section class=" text-center">
                    <h2 className="mb-7 text-3xl font-bold">Testimonials</h2>
                    <h2 className="mb-16 text-5xl font-bold">Our Successful Students</h2>
                    <div class="grid gap-x-6 md:grid-cols-3 xl:gap-x-12">
                      <div class=" lg:mb-0">
                        <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                          <div className="relative overflow-hidden bg-cover bg-no-repeat">
                            <img
                              src={image1}
                              class="w-full rounded-t-lg"
                              alt="ima"
                            />
                            <a href="#!">
                              <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                            </a>
                            <svg
                              class="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 1440 320"
                            >
                              <path
                                fill="currentColor"
                                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                              ></path>
                            </svg>
                          </div>
                          <div class="p-6">
                            <h5 class="mb-2 text-2xl font-bold">Beverly</h5>
                            <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                             Philippines
                            </h6>
                            <ul class="mb-6 flex justify-center">
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 96 960 960"
                                  class="w-5 text-warning"
                                >
                                  <path
                                    fill="currentColor"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 96 960 960"
                                  class="w-5 text-warning"
                                >
                                  <path
                                    fill="currentColor"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 96 960 960"
                                  class="w-5 text-warning"
                                >
                                  <path
                                    fill="currentColor"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 96 960 960"
                                  class="w-5 text-warning"
                                >
                                  <path
                                    fill="currentColor"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 96 960 960"
                                  class="w-5 text-warning"
                                >
                                  <path
                                    fill="currentColor"
                                    d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                                  />
                                </svg>
                              </li>
                            </ul>
                            <p>
                            Hello I am Beverly from the Philippines. I am here to learn Hindi and I am thankful to all my teachers especially Aradhana ma'am she always supports me. She always tries to use a new method of teaching for me and she is very creative. Now My  Hindi is more fluent than before.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="mb-6 lg:mb-0">
                        <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                          <div class="relative overflow-hidden bg-cover bg-no-repeat">
                            <img
                              src={image3}
                              class=" w-full rounded-t-lg"
                              alt="ima"
                            />
                            <a href="#!">
                              <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                            </a>
                            <svg
                              class="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 1440 320"
                            >
                              <path
                                fill="currentColor"
                                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                              ></path>
                            </svg>
                          </div>
                          <div class="p-6">
                            <h5 class="mb-2 text-2xl font-bold">Ryan</h5>
                            <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                            RyanAmerica
                            </h6>
                            <ul class="mb-6 flex justify-center">
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 96 960 960"
                                  class="w-5 text-warning"
                                >
                                  <path
                                    fill="currentColor"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 96 960 960"
                                  class="w-5 text-warning"
                                >
                                  <path
                                    fill="currentColor"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 96 960 960"
                                  class="w-5 text-warning"
                                >
                                  <path
                                    fill="currentColor"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 96 960 960"
                                  class="w-5 text-warning"
                                >
                                  <path
                                    fill="currentColor"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 96 960 960"
                                  class="w-5 text-warning"
                                >
                                  <path
                                    fill="currentColor"
                                    d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                                  />
                                </svg>
                              </li>
                            </ul>
                            <p>
                            Hello I am Ryan. I am from America. I am learning Hindi here and now my Hindi is more fluent after joining this institute. Thanks to Rubina ma'am for her support.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="mb-6 lg:mb-0">
                        <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                          <div class="relative overflow-hidden bg-cover bg-no-repeat">
                            <img
                              src={image2}
                              class=" w-full rounded-t-lg"
                              alt="ima"
                            />
                            <a href="#!">
                              <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                            </a>
                            <svg
                              class="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 1440 320"
                            >
                              <path
                                fill="currentColor"
                                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                              ></path>
                            </svg>
                          </div>
                          <div class="p-6">
                            <h5 class="mb-2 text-2xl font-bold">Jaesoo</h5>
                            <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                            Korea
                            </h6>
                            <ul class="mb-6 flex justify-center">
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 96 960 960"
                                  class="w-5 text-warning"
                                >
                                  <path
                                    fill="currentColor"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 96 960 960"
                                  class="w-5 text-warning"
                                >
                                  <path
                                    fill="currentColor"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 96 960 960"
                                  class="w-5 text-warning"
                                >
                                  <path
                                    fill="currentColor"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 96 960 960"
                                  class="w-5 text-warning"
                                >
                                  <path
                                    fill="currentColor"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 96 960 960"
                                  class="w-5 text-warning"
                                >
                                  <path
                                    fill="currentColor"
                                    d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                                  />
                                </svg>
                              </li>
                            </ul>
                            <p>
                            Hello I am Jaesoo from Korea. Before coming I didn't even know the words of Hindi. But now I am more confident to speak Hindi because of my Irwin sir. Thank you  sir for your support and guidance.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
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
