import { useSession, signIn, signOut } from "next-auth/react"
import { Header } from "./Header";
import { useState, ReactNode } from "react"

interface LayoutProps {
 children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
 const { data: session } = useSession()
 if(!session){
   return (
     <>
     <div className='bg-gray-50 w-screen h-screen flex items-center'>
     <div className="text-center w-full">
       <button onClick={()=>signIn('google')} className="bg-white p-2 rounded-lg px-4">Login with Google</button>
     </div>    
     
       </div>    
         </>

   )
 }
 return (
 <div className="bg-gray-50 min-h-screen ">
 <div className="block md:hidden flex items-center ">
 

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
