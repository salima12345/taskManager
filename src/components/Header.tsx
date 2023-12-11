import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const Header = () => {
  const { data: sessionData } = useSession();
  return(
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800  md:static ">
      <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
        <div className="flex items-center justify-center h-14 border-b">
          <div>      {sessionData?.user?.name ? ` Hello ${sessionData.user.name}` : ""}
</div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            
            <li>
              <Link href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M5.25 8.0625H3.75C1.935 8.0625 0.9375 7.065 0.9375 5.25V3.75C0.9375 1.935 1.935 0.9375 3.75 0.9375H5.25C7.065 0.9375 8.0625 1.935 8.0625 3.75V5.25C8.0625 7.065 7.065 8.0625 5.25 8.0625ZM3.75 2.0625C2.565 2.0625 2.0625 2.565 2.0625 3.75V5.25C2.0625 6.435 2.565 6.9375 3.75 6.9375H5.25C6.435 6.9375 6.9375 6.435 6.9375 5.25V3.75C6.9375 2.565 6.435 2.0625 5.25 2.0625H3.75Z" fill="#787486"/>
  <path d="M14.25 8.0625H12.75C10.935 8.0625 9.9375 7.065 9.9375 5.25V3.75C9.9375 1.935 10.935 0.9375 12.75 0.9375H14.25C16.065 0.9375 17.0625 1.935 17.0625 3.75V5.25C17.0625 7.065 16.065 8.0625 14.25 8.0625ZM12.75 2.0625C11.565 2.0625 11.0625 2.565 11.0625 3.75V5.25C11.0625 6.435 11.565 6.9375 12.75 6.9375H14.25C15.435 6.9375 15.9375 6.435 15.9375 5.25V3.75C15.9375 2.565 15.435 2.0625 14.25 2.0625H12.75Z" fill="#787486"/>
  <path d="M14.25 17.0625H12.75C10.935 17.0625 9.9375 16.065 9.9375 14.25V12.75C9.9375 10.935 10.935 9.9375 12.75 9.9375H14.25C16.065 9.9375 17.0625 10.935 17.0625 12.75V14.25C17.0625 16.065 16.065 17.0625 14.25 17.0625ZM12.75 11.0625C11.565 11.0625 11.0625 11.565 11.0625 12.75V14.25C11.0625 15.435 11.565 15.9375 12.75 15.9375H14.25C15.435 15.9375 15.9375 15.435 15.9375 14.25V12.75C15.9375 11.565 15.435 11.0625 14.25 11.0625H12.75Z" fill="#787486"/>
  <path d="M5.25 17.0625H3.75C1.935 17.0625 0.9375 16.065 0.9375 14.25V12.75C0.9375 10.935 1.935 9.9375 3.75 9.9375H5.25C7.065 9.9375 8.0625 10.935 8.0625 12.75V14.25C8.0625 16.065 7.065 17.0625 5.25 17.0625ZM3.75 11.0625C2.565 11.0625 2.0625 11.565 2.0625 12.75V14.25C2.0625 15.435 2.565 15.9375 3.75 15.9375H5.25C6.435 15.9375 6.9375 15.435 6.9375 14.25V12.75C6.9375 11.565 6.435 11.0625 5.25 11.0625H3.75Z" fill="#787486"/>
</svg>                </span>
                <span className="ml-2 text-sm tracking-wide truncate">All tasks</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">To Do</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>                </span>
                <span className="ml-2 text-sm tracking-wide truncate">In Progress</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Done</span>
              </Link>
            </li>
            <li>
   <Link href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 ">
     <span className="inline-flex justify-center items-center ml-4">
       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
     </span>
     <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
   </Link>
 </li>
        
          </ul>
        </div>
      </div>
    </div>

  );


};