import React from 'react';
import Nav from '@/components/Nav';
import { readdirSync } from 'fs';

export default function Home({ posts }:{posts:string[]}) {
  return (
    <>
      <style jsx>
        {`  
          h1 {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40vh;
            white-space: pre-wrap;
            color: white;
            padding: 10px;
            text-align: center;
            font-size: 2rem;
            font-weight: bolder;
          }
          .nav-container{
            overflow-y: auto;
            overflow-x: hidden;
            box-sizing: border-box;
            height: 40vh;
            margin: auto;
          }
          .nav-container::-webkit-scrollbar {
            width: 5px;
            }
          .nav-container::-webkit-scrollbar-thumb {
              background-color: gray;
          }
        `}
      </style>
      <>
        <h1>
          {'Gomi의 NextJS Code Kata\n(그 카타 아님)'}
        </h1>
        <div className="nav-container">
          <Nav posts={posts} />
        </div>
      </>
    </>
  );
}

export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const posts = readdirSync('./pages/posts');
  // Props returned will be passed to the page component
  return { props: { posts } };
}
