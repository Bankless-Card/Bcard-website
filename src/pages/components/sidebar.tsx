"use client"

import Image from "next/image";
import Link from "next/link";


interface sidebarProps {
    setSidebarOpen: (arg: boolean) => void;
    sidebarOpen: boolean;
}

export default function Sidebar(props: sidebarProps) {

	function closeSidebar() {
		props.setSidebarOpen(false)
	}

	return (
		<div className={`sm:hidden sidebar grid grid-rows-[3.5em,auto] place-items-center w-[100%] ${props.sidebarOpen ? "open" : null}`}>
		<button onClick={closeSidebar}  className="h-[100%] mt-[4.2em] w-[fit-content] grid place-items-center mb-[2em] ml-auto mr-[1.95em]">
            <Image 
            height={25}
            width={25}
            src="/icons/close.svg" 
            alt="close sidebar button" 
            className=" ml-auto mr-o"/></button>

            <div className="flex flex-col m-auto h-[fit-content]">
			<Link href="https://support.getbcard.io/" onClick={closeSidebar} >
				<div className="hover:bg-[rgba(150,150,150,0.2)] grid place-items-center p-[0.8em]" >About Us</div>
			</Link>

			<Link href="https://support.getbcard.io/" onClick={closeSidebar} >
				<div className="hover:bg-[rgba(150,150,150,0.2)] grid place-items-center p-[0.8em]">Get Help</div>
			</Link>

            <Link href="https://app.getbcard.io/" onClick={closeSidebar} >
				<div className="hover:bg-[rgba(150,150,150,0.2)] grid place-items-center p-[0.8em]">Sign up Now (US Only)</div>
			</Link>
            </div>
			
		</div>
	)
}