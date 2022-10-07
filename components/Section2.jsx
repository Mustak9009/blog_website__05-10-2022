import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Author from './_child/Author';
export default function Section2() {
    return (
        <section className='container mx-auto md:px-20 py-10'>
            <h1 className='font-bold text-4xl py-12 text-center'>Latest Posts</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </section>
    )
}

function Post() {
    return (
        <div className="item">
            <div className="images">
                <Link href="/" passHref>
                    <a>
                        <Image src={"/images/img1.avif"} width={500} height={440} className='rounded' alt='blog post'/>
                    </a>
                </Link>
            </div>
            <div className="info">
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
            </div>
            <div className="title">
                <Link href="/" passHref>
                    <a className="text-xl  font-bold text-gray-800 hover:text-gray-600">
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
    );
}