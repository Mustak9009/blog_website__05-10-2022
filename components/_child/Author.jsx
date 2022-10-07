import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Author() {
  return (
    <div className='author flex'>
        <Image src='/images/Author.jpg' height={50} width={50} className='rounded-full'/>
        <div className='flex flex-col px-4 justify-center'>
          <Link href='/' passHref>
            <a className='text-md font-bold text-gray-800 hover:text-gray-600 '>Alex ali</a>
          </Link>
          <span className='text-sm text-gray-500'>CEO and Founder</span >
        </div>
    </div>
  )
}
