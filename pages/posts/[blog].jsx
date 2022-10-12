import React from "react";
import Format from "../../Layout/Format";
import { useRouter } from "next/router";
import Author from "../../components/_child/Author";
import Image from "next/image";
import Related from "../../components/_child/Related";
export default function Blog() {
  const router = useRouter();
  const { blog } = router.query;
  return (
    <Format
      children={
        <section className="container mx-auto md:px-20 py-16 w-1/2">
          <Author />
          <div className="post py-10">
            <h1 className="font-bold text-center pb-5 text-4xl">
              Your most unhappy customers are your greatest source of learning
            </h1>
            <p className="text-gray-400 text-center text-xl">
              Even the all-powerfull pointing has no control about the blind
              texts it is an almost unorthographic life One day hawever a small
              line
            </p>
            <div className="py-10">
              <Image
                src={"/images/BlogImg1.jpg"}
                width={900}
                height={300 * 2}
                alt="Furniture"
              />
            </div>
            <div className="content text-gray-600 text-lg flex flex-col gap-5">
              <p>
                Even the all-powerfull pointing has no control about the blind
                texts it is an almost unorthographic life One day hawever a
                small line of blind text by the name of Lorem ipsum decided to
                leave for the leave for the far World of Grammar.
              </p>
              <p>
                Even the all-powerfull pointing has no control about the blind
                texts it is an almost unorthographic life One day hawever a
                small line of blind text by the name of Lorem ipsum decided to
                leave for the leave for the far World of Grammar.
              </p>
              <p>
                Even the all-powerfull pointing has no control about the blind
                texts it is an almost unorthographic life One day hawever a
                small line of blind text by the name of Lorem ipsum decided to
                leave for the leave for the far World of Grammar.
              </p>
            </div>
          </div>
          <Related />
        </section>
      }
    />
  );
}
