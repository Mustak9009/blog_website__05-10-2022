import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
// Use Swiper for slider -> component
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css"; 
import useFetcher from "../lib/fetcher";
import Spinner from "./_child/Spinner";
import IsError from "./_child/IsError";
export default function Section1() {
  SwiperCore.use([Autoplay]); //Autoplay swiper
  const { data, isLoading, isError } = useFetcher("/api/posts");
  if (isLoading) return <Spinner />;
  if (isError) return <IsError />;  
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="text-4xl font-bold text-center pb-12">Trending</h1>
      </div>
      <Swiper slidesPerView={1} autoplay={{ delay: 2000 }}>
        {data.map((value)=>(
          <SwiperSlide key={value.id}>
            <Slide data={value}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
function Slide({data}) {
  const {id,category, img, published, author, title, subtitle } = data;
  return (
    <div className="grid grid-cols-2 justify-items-center">
      <div className="image">
        <Link href={`/posts/${id}`} passHref>
          <a>
            <Image src={img || "/"} width={600} height={490} alt='blog post'/>
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat ">
          <Link href={`/posts/${id}`} passHref>
            <a className="text-orange-600 hover:text-orange-800">
               {category || "Unknown"}
            </a>
          </Link>
          <Link href={`/posts/${id}`} passHref>
            <a className="text-gray-800 hover:text-gray-600">{published || "Unknown"}</a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`} passHref>
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
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
