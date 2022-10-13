import React from "react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/Author";
import useFetcher from "../lib/fetcher";
import Spinner from "./_child/Spinner";
import IsError from "./_child/IsError";
export default function Section4() {
  const { data, isLoading, isError } = useFetcher("/api/popular");
  if (isLoading) return <Spinner />;
  if (isError) return <IsError />;
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="text-4xl font-bold  py-12">Business</h1>
          <div className="flex flex-col gap-6">
            {data.slice(0, 3).map((value) => (
              <Post data={value} key={value.id}/>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold  py-12">Travel</h1>
          <div className="flex flex-col gap-6">
            {data.slice(3, 5).map((value) => (
              <Post data={value} key={value.id}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Post({data}) {
  const {category, img, published, author, title } = data;
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href="/" passHref>
          <a>
            <Image
              src={img || "/"}
              alt="blog post"
              width={300}
              height={250}
              className="rounded"
            />
          </a>
        </Link>
      </div>
      <div className="info flex flex-col justify-center">
        <div className="cat">
          <Link href="/" passHref>
            <a className="text-orange-600 hover:text-orange-800">
            {category || "Unknown"}
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="text-gray-800 hover:text-gray-600">{published || "Unknown"}</a>
          </Link>
        </div>
        <div className="title pb-3.5">
          <Link href="/" passHref>
            <a className="text-xl  font-bold text-gray-800 hover:text-gray-600">
            {title || "Title"}
            </a>
          </Link>
        </div>
        {author && <Author {...author}/>}
      </div>
    </div>
  );
}
