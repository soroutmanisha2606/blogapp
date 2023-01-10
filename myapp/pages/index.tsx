import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {getPosts} from "../services"
import PostCard from "../components/Postcard"
import Postwidget from "../components/postwidget";

export default function Home({posts}: {posts: Array<any>}) {
  return (
    <div className="mainconatiner mx-auto px-10 mb-8 ">
      <Head>
        <title>Manisha blog app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
     
        {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
</div>
<div className='lg:col-span-4 col-span-1'>
  <div className='lg:sticky relative top-8'>
    <Postwidget/>


  </div>

</div>
      </div>

     

    
    </div>
  )
}
export async function getStaticProps() {
  const posts=(await getPosts())||[];
  return {
    props :{posts}
  }
  
}

