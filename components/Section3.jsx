import React, { useState, useEffect } from "react";
// Use Swiper for slider -> component
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Author from "../components/_child/Author";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
export default function Section3() {
  const { width } = useWindowDimensions(); //Get a screen width for -> swiper responsiveness
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="text-4xl font-bold text-center pb-12">Most Popular</h1>
      {/*Create slider with the help of -> Swiper*/}
      <div>
        <Swiper slidesPerView={width <= 660 ? 1 : 2} className="flex flex-wrap">
          {" "}
          {/*There is an responsive ness problem here*/}
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
function Slide() {
  return (
    <div className="grid m-3">
      <div className="image">
        <Link href="/" passHref>
          <a>
            <Image
              src={"/images/img1.avif"}
              alt="blog post"
              width={600}
              height={400}
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col ">
        <div className="cat ">
          <Link href="/" passHref>
            <a className="text-orange-600 hover:text-orange-800">
              Business, Travel
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="text-gray-800 hover:text-gray-600">-July 16,2003</a>
          </Link>
        </div>
        <div className="title">
          <Link href="/" passHref>
            <a className="text-xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">
              Your most unhappy customers are your greatest source of learning
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Even the all-powerfull pointing has no control about the blind texts
          it is an almost unorthographic life One day hawever a small line of
          blind text by the name of Lorem ipsum decided to leave for the leave
          for the far World of Grammar.
        </p>
        <Author />
      </div>
    </div>
  );
}
function getWindowDimensions() {
  try { //Use (try/catch) for -> avoid window undefiend error.
    const { innerWidth: width } = window;
    return {
      width
    };
  } catch (err) {
     return {window:20} //add default window width for   -> avoid erro 
  }
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
