import { useSession, signIn, signOut } from "next-auth/react"
import { Header } from "./Header";
import { useState, ReactNode } from "react";

interface LayoutProps {
 children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
 const { data: session } = useSession()
 if(!session){
   return (
     <>
  <div className="flex items-center justify-center min-h-screen bg-gray-50 " >
    <button className="flex items-center gap-2 bg-white rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800  hover:bg-gray-200  " onClick={()=>signIn('google')}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M22.5005 12.7332C22.5005 11.8699 22.4291 11.2399 22.2744 10.5865H12.2148V14.4832H18.1196C18.0006 15.4515 17.3577 16.9099 15.9291 17.8898L15.9091 18.0203L19.0897 20.435L19.3101 20.4565C21.3338 18.6249 22.5005 15.9298 22.5005 12.7332Z" fill="#4285F4"/>
  <path d="M12.214 23C15.1068 23 17.5353 22.0666 19.3092 20.4567L15.9282 17.8899C15.0235 18.5083 13.8092 18.9399 12.214 18.9399C9.38069 18.9399 6.97596 17.1083 6.11874 14.5766L5.99309 14.5871L2.68583 17.0954L2.64258 17.2132C4.40446 20.6433 8.0235 23 12.214 23Z" fill="#34A853"/>
  <path d="M6.12095 14.5767C5.89476 13.9234 5.76386 13.2233 5.76386 12.5C5.76386 11.7767 5.89476 11.0767 6.10905 10.4234L6.10306 10.2842L2.75435 7.7356L2.64478 7.78667C1.91862 9.21002 1.50195 10.8084 1.50195 12.5C1.50195 14.1917 1.91862 15.79 2.64478 17.2133L6.12095 14.5767Z" fill="#FBBC05"/>
  <path d="M12.2141 6.05997C14.2259 6.05997 15.583 6.91163 16.3569 7.62335L19.3807 4.73C17.5236 3.03834 15.1069 2 12.2141 2C8.02353 2 4.40447 4.35665 2.64258 7.78662L6.10686 10.4233C6.97598 7.89166 9.38073 6.05997 12.2141 6.05997Z" fill="#EB4335"/>
</svg>
                                    <span
                                        className="block w-max font-semibold tracking-wide text-gray-700  text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue
                                        with Google
                                    </span>
    </button>
</div>
         </>

   )
 }
 return (
 <div className="bg-gray-50 min-h-screen ">
 <div className=" md:hidden flex  ">
 

 </div>

 <div className="bg-gray-50 min-h-screen flex">
 <Header></Header>
 <div className=" flex-grow rounded-lg bg-white  ">
   {children}
 </div>

 </div>
 </div>
 )
}
