import React from "react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/Author";
export default function Section4() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="text-4xl font-bold  py-12">Business</h1>
          <div className="flex flex-col gap-6">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold  py-12">Travel</h1>
          <div className="flex flex-col gap-6">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href="/" passHref>
          <a>
            <Image
              src={"/images/img1.avif"}
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
              Business, Travel
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="text-gray-800 hover:text-gray-600">-July 16,2003</a>
          </Link>
        </div>
        <div className="title pb-3.5">
          <Link href="/" passHref>
            <a className="text-xl  font-bold text-gray-800 hover:text-gray-600">
              Your most unhappy customers are your greatest source of learning
            </a>
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
}
