import React from 'react';
import Link from 'next/link';
import {FaFacebook,FaTwitter,FaYoutube} from 'react-icons/fa';
export default function Header() {
  return (
    <header className='bg-gray-50'>
        <div className='xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3 '>  {/*xl:container -> help to adjust element width acourding screen width(it's a media query)*/}
            <div  className='md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0'>
                <input placeholder='search..' name='search' title='search box' type='text' className='Input_box-style'/> {/*placeholder-slate-500 => appy color on placeholder text ..*/}
            </div>
            <div className='shrink w-80 sm:order-2 '>
                <Link href='/' passHref>
                    <a className='font-bold uppercase text-3xl'>Design</a>
                </Link>
            </div>
            <div className='w-96 order-3 flex justify-center '>
                <div className='flex gap-6'>
                <Link href='/' passHref>
                    <a>
                        <FaFacebook color='#888888'/>
                    </a>
                </Link>
                 <Link href='/' passHref>
                    <a>
                        <FaTwitter color='#888888'/>
                    </a>
                </Link> 
                <Link href='/' passHref>
                    <a>
                        <FaYoutube color='#888888'/>
                    </a>
                </Link>
                </div>
            </div>
        </div>
    </header>
  )
}
