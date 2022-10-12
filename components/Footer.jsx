import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import NewsLetter from "./_child/NewsLetter";
export default function Footer() {
  return (
    <footer className='bg-gray-50'>
      <NewsLetter/>
    <div className="container mx-auto flex justify-center py-12">
      <div className="py-5">
        <div className="flex gap-6 justify-center">
          <Link href="/" passHref>
            <a>
              <FaFacebook color="#888888" />
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <FaTwitter color="#888888" />
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <FaYoutube color="#888888" />
            </a>
          </Link>
        </div>        
        <p className='py-5 text-gray-400'>Copyriht Ⓒ2022. All rights reserved. | This template is made by Alex ali </p>
         <p className="text-gray-400">Terms & condition</p>
      </div>
    </div>
    </footer>
  );
}
