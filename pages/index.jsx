import Head from "next/head";
import React from "react";
import Format from "../Layout/Format";
import {Section1,Section2,Section3,Section4} from '../components';
export default function Home() {
  return (
    <div>
      <Head children={
          <>
            <title>Blog website</title>
            <meta name="description" content="For bloger who can share there life events."/>
            <link rel="icon" href="/favicon.ico" />
          </>
        }/>
      <Format children={
          <>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
          </>
        }/>
    </div>
  );
}
