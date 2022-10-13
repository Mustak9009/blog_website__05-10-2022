import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Author from './Author';
import useFetcher from "../../lib/fetcher";
import Spinner from "./Spinner";
import IsError from "./IsError"; 
export default function Related() {
  const { data, isLoading, isError } = useFetcher("/api/posts");
  if (isLoading) return <Spinner />;
  if (isError) return <IsError />;
  return (
    <section className='pt-6'>
        <h2 className='font-bold text-4xl py-10'>Related</h2>
        <div className='flex flex-col gap-10'>
          {data.map(value=>(
            <Post data={value} key={value.id}/>
          ))}
        </div>
    </section>
  )
}
function Post({data}) {
  const {id,category, img, published, author, title } = data;

    return (
      <div className="flex gap-5">
        <div className="image flex flex-col justify-start">
          <Link  href={`/posts/${id}`} passHref>
            <a>
              <Image
                src={img || "/"}
                alt="blog post"
                width={300}
                height={200}
                className="rounded"
              />
            </a>
          </Link>
        </div>
        <div className="info flex flex-col justify-center">
          <div className="cat">
            <Link  href={`/posts/${id}`} passHref>
              <a className="text-orange-600 hover:text-orange-800">
              {category || "Unknown"}
              </a>
            </Link>
            <Link  href={`/posts/${id}`} passHref>
              <a className="text-gray-800 hover:text-gray-600">{published || "Unknown"}</a>
            </Link>
          </div>
          <div className="title pb-3.5">
            <Link  href={`/posts/${id}`} passHref>
              <a className="text-xl  font-bold text-gray-800 hover:text-gray-600">
              {title || "Title"}
              </a>
            </Link>
          </div>
          {author &&  <Author {...author}/>}
        </div>
      </div>
    );
  }

