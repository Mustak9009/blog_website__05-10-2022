import React from "react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/Author";
import useFetcher from "../lib/fetcher";
import Spinner from "./_child/Spinner";
import IsError from "./_child/IsError";
export default function Section2() {
  const { data, isLoading, isError } = useFetcher("/api/posts");
  if (isLoading) return <Spinner />;
  if (isError) return <IsError />;
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data.map((value) => (
          <Post key={value.id} data={value} />
        ))}
      </div>
    </section>
  );
}

function Post({ data }) {
  const {id, category, img, published, author, title, subtitle } = data;

  return (
    <div className="item m-4">
      <div className="images">
        <Link href={`/posts/${id}`} passHref>
          <a>
            <Image
              src={img || "/"}
              width={500}
              height={440}
              className="rounded"
              alt="blog post"
              
            />
          </a>
        </Link>
      </div>
      <div className="info">
        <div className="cat">
          <Link href={`/posts/${id}`} passHref>
            <a className="text-orange-600 hover:text-orange-800">
              {category || "Unknown"}
            </a>
          </Link>
          <Link href={`/posts/${id}`} passHref>
            <a className="text-gray-800 hover:text-gray-600">
              {published || "Unknown"}
            </a>
          </Link>
        </div>
      </div>
      <div className="title">
        <Link href={`/posts/${id}`} passHref>
          <a className="text-xl  font-bold text-gray-800 hover:text-gray-600">
            {title || "Title"}
          </a>
        </Link>
      </div>
      <p className="text-gray-500 py-3">
        {subtitle || "Description not found..."}
      </p>
      {author &&  <Author {...author}/>}
    </div>
  );
}
