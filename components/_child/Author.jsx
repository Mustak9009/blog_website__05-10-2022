import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Author({name,img,designation}) {
  if(!name && !img) return;
  return (
    <div className='author flex'>
        <Image src={img || '/'} height={50} width={50} className='rounded-full' alt="Blog web page"/>
        <div className='flex flex-col px-4 justify-center'>
          <Link href='/' passHref>
            <a className='text-md font-bold text-gray-800 hover:text-gray-600 '>{name}</a>
          </Link>
          <span className='text-sm text-gray-500'>{designation}</span>
        </div>
    </div>
  )
}
