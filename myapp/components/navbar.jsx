import React from 'react'
import Link from 'next/link';
const categories=[
    {
        name:"raect",
        slug:"hey react"
    },
    {
        name:"jaav",
        slug:"hey java"
    },{
        name:"python",
        slug:"hey react2"
    }
]
const Navbar = () => {
  return (
    <div className='main mx-auto px-10 mb-8'>
        <div className='border-b w-full border-blue-400 py-8 '>
            <div className='rightbox float-left block '>
              <Link href="/">
                <div className='cursor-pointer font-bold text-4xl text-white'>
                BlogApp
                </div>
              </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {
                    categories.map((e)=>{
                      return  <>
                        <Link key={e.slug} href={`/category/${e.slug}`}> 
                        <span className='component text-white mt-2 text-2xl cursor-pointer float-right ml-6'> {e.name}</span>
                       
                        </Link>
                        </>
                    })
                }
                    
                    </div>

        </div>
    </div>
  )
}

export default Navbar