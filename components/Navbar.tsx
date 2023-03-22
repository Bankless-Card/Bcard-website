import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-[3rem]'>
         <div className=''>
             <Image
                    priority
                    src="/images/logo.svg"
                    className=""
                    height={56.97}
                    width={179}
                    alt="bankless card"
                  />
         </div>
         <div className='flex gap-5'>
            <Link href="/for-daos">For DAOs</Link>
            <a>For Investors</a>
            <a>Blog</a>
            <a>Contact Us</a>
         </div>
    </nav>
  )
}

export default Navbar