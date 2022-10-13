import React, { useState, useEffect } from "react";
// Use Swiper for slider -> component
import { Swiper, SwiperSlide } from "swiper/react";
import Author from "../components/_child/Author";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import useFetcher from "../lib/fetcher";
import Spinner from "./_child/Spinner";
import IsError from "./_child/IsError";
export default function Section3() {
  const { data, isLoading, isError } = useFetcher("/api/popular");
  if (isLoading) return <Spinner />;
  if (isError) return <IsError />;
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="text-4xl font-bold text-center pb-12">Most Popular</h1>
      {/*Create slider with the help of -> Swiper*/}
      <div>
        <Swiper  className="flex flex-wrap" breakpoints={{640:{slidesPerView:2,spaceBetween:30}}}>
          {/*There is an responsive ness problem here*/}
          {data.map((value) => (
            <SwiperSlide key={value.id}>
              <Slide data={value} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
function Slide({ data }) {
  const { category, img, published, author, title, subtitle } = data;
  return (
    <div className="grid m-3">
      <div className="image">
        <Link href="/" passHref>
          <a>
            <Image src={img || "/"} alt="blog post" width={600} height={400} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col ">
        <div className="cat ">
          <Link href="/" passHref>
            <a className="text-orange-600 hover:text-orange-800">
              {category || "Unknown"}
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="text-gray-800 hover:text-gray-600">
              {published || "Unknown"}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href="/" passHref>
            <a className="text-xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">
              {title || "Title"}
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          {subtitle || "Description not found..."}
        </p>
        {author &&  <Author {...author}/>}
      </div>
    </div>
  );
}