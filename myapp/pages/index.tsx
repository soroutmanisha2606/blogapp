import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Postcard from "../components/Postcard"
import Postwidget from "../components/postwidget";
const posts=[
  {
    title:"hello ",
    excerpt:"hello thsi is a dummy data",

  },
  {
    title:"hello this is dummy 2 data ",
    excerpt:"hello thsi is a dummy data 2",
    
  },
  {
    title:"hello this is dummy 3 data ",
    excerpt:"hello thsi is a dummy data 3",
    
  }
]
const Home: NextPage = () => {
  return (
    <div className="mainconatiner mx-auto px-10 mb-8 ">
      <Head>
        <title>Manisha blog app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
{
  posts.map((e)=>{
    return <div>
      <h2>{e.title}</h2>
      <h2>{e.excerpt}</h2>

    </div>
  })
}
</div>
<div className='lg:col-span-4 col-span-1'>
  <div className='lg:sticky relative top-8'>
    <Postwidget/>
<Postcard/>

  </div>

</div>
      </div>

     

    
    </div>
  )
}

export default Home
