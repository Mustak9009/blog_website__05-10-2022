import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
// Use Swiper for slider -> component
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
export default function Section1() {
  SwiperCore.use([Autoplay]); //Autoplay swiper
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="text-4xl font-bold text-center pb-12">Trending</h1>
      </div>
      <Swiper slidesPerView={1} autoplay={{ delay: 2000 }}>
        {" "}
        {/*Slider*/}
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
    </section>
  );
}
function Slide() {
  return (
    <div className="grid grid-cols-2 justify-items-center">
      <div className="image">
        <Link href="/" passHref>
          <a>
            <Image src={"/images/img1.avif"} width={600} height={490} alt='blog post'/>
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
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
