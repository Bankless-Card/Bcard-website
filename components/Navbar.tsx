import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-[3rem]'>
         <Link href="/" className=''>
             <Image
                    priority
                    src="/images/logo.svg"
                    className=""
                    height={56.97}
                    width={179}
                    alt="bankless card"
                  />
         </Link>
         <div className='flex gap-5'>
            <Link href="/for-daos">For DAOs</Link>
            <Link href="/for-investors">For Investors</Link>
            <a>Blog</a>
            <a>Contact Us</a>
         </div>
    </nav>
  )
}

export default Navbar