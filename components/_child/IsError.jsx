import React from 'react';
import Image from 'next/image';

export default function IsError() {
  
  return (
    <div className='text-center py-10'>
        <h1 className='text-3xl font-bold text-orange-600 py-10'>Somthing went wrong!!</h1>
        <Image src={'/images/not_found.png'} width={400} height={400} alt="Blog web page"/>
    </div>
  )
}
