import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Author from './Author';

export default function Related() {
  return (
    <section className='pt-6'>
        <h2 className='font-bold text-4xl py-10'>Related</h2>
        <div className='flex flex-col gap-10'>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </section>
  )
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
                height={200}
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

