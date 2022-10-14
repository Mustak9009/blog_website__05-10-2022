import React from "react";
import Format from "../../Layout/Format";
import Author from "../../components/_child/Author";
import Image from "next/image";
import Related from "../../components/_child/Related";
// import getPost from "../../lib/Helper";
import { useRouter } from "next/router";
import useFetcher from "../../lib/fetcher";
import Spinner from "../../components/_child/Spinner";
import IsError from "../../components/_child/IsError";
import { SWRConfig } from "swr";
import getPost from "../../lib/Helper";
export default function Blog({ fallback }) {
  const router = useRouter();
  const { data, isLoading, isError } = useFetcher(
    `/api/posts/${router.query.blogId}`
  );
  if (isLoading) return <Spinner />;
  if (isError) return <IsError />;
  return (
    <SWRConfig value={{ fallback }}>
      <Article {...data} />
    </SWRConfig>
  );
}
function Article({ img, author, title, description, subtitle }) {
  return (
    <Format>
      <section className="container mx-auto md:px-20 py-16 w-1/2">
        {author && <Author {...author} />}
        <div className="post py-10">
          <h1 className="font-bold text-center pb-5 text-4xl">
            {title || "Title"}
          </h1>
          <p className="text-gray-400 text-center text-xl">
            {subtitle || "Description not found..."}
          </p>
          <div className="py-10">
            <Image
              src={img || "/"}
              width={900}
              height={300 * 2}
              alt="Furniture"
            />
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-5">
            <p>{description || "Description not found..."}</p>
          </div>
        </div>
        <Related />
      </section>
    </Format>
  );
}

//-------------------------------------------------------------------------
//[-]Combine (getStaticProps/getStaticPaths(ssg)) with -> Swr
//-------------------------------------------------------------------------
export async function getStaticProps({ params }) {
  const posts = await getPost(params.blogId);
  return {
    props: {
      fallback: {
        "api/posts": posts,
      },
    },
  };
}
export async function getStaticPaths() {
  const posts = await getPost();
  const postPath = posts.map((value) => {
    return {
      params: { blogId: value.id.toString() }, //blogId must be -> because of file name is -> [blogId].jsx
    };
  });
  return {
    paths: postPath,
    fallback: false,
  };
}
