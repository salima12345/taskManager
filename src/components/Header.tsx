import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const { data: sessionData } = useSession();
  const [showLogout, setShowLogout] = useState(false);

  return(
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 z-10 md:w-1/6  md:static  " style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
        <div className="flex items-center justify-center h-14 border-b">
        <div className="flex  items-center justify-center mr-40 ml-10 gap-2">   
          <img src="/Frame 60809.svg" alt=""/>
          <h2 className="text-black font-inter font-bold text-xl mt-0" style={{ color: '#252C32' }}>Brees</h2>
</div>
       
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow pl-3">
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
                <span className="ml-2 text-sm  font-inter tracking-wide truncate">All tasks</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
  <g clip-path="url(#clip0_336_202)">
    <path d="M8.52 14.063L8.47435 14.0364L2.74442 10.6939C2.59007 10.604 2.40633 10.5791 2.2336 10.6246C2.06086 10.6701 1.91327 10.7823 1.82327 10.9366C1.73326 11.0909 1.70821 11.2747 1.75362 11.4474C1.79902 11.6202 1.91115 11.7678 2.06536 11.8579L8.52 14.063ZM8.52 14.063L8.56565 14.0364L14.2956 10.6939C14.45 10.6039 14.6338 10.5788 14.8066 10.6243C14.9794 10.6698 15.1271 10.7821 15.2171 10.9364C15.2617 11.0128 15.2908 11.0973 15.3028 11.185C15.3147 11.2726 15.3093 11.3618 15.2867 11.4474C15.2642 11.533 15.2251 11.6132 15.1715 11.6837C15.118 11.7541 15.0511 11.8133 14.9746 11.8579L8.8595 15.4251L8.90515 15.5033L8.8595 15.4251C8.75645 15.4852 8.6393 15.5169 8.52 15.5169C8.4007 15.5169 8.28354 15.4852 8.1805 15.4251L8.13485 15.5033L8.1805 15.4251L2.06541 11.8579L8.52 14.063ZM14.2957 7.63631L14.2956 7.63634L8.56565 10.9788L8.52 11.0054L8.47435 10.9788L2.74442 7.63637C2.59007 7.54646 2.40633 7.52152 2.2336 7.56703C2.06086 7.61254 1.91327 7.72478 1.82327 7.87908C1.73326 8.03337 1.70821 8.21709 1.75362 8.38985C1.79902 8.5626 1.91115 8.71024 2.06536 8.80035L14.2957 7.63631ZM14.2957 7.63631C14.3721 7.59166 14.4566 7.56251 14.5443 7.55052C14.632 7.53854 14.7212 7.54395 14.8068 7.56645C14.8924 7.58895 14.9728 7.6281 15.0432 7.68166C15.1137 7.73522 15.1729 7.80214 15.2175 7.8786C15.2621 7.95506 15.2912 8.03956 15.3032 8.12727C15.3151 8.21498 15.3096 8.30418 15.2871 8.38978C15.2645 8.47538 15.2253 8.55569 15.1717 8.62613C15.1181 8.69657 15.0512 8.75576 14.9747 8.80032L14.9746 8.80035L8.8595 12.3675L8.90515 12.4458L8.8595 12.3675C8.75645 12.4276 8.6393 12.4593 8.52 12.4593C8.4007 12.4593 8.28354 12.4276 8.1805 12.3675L8.13485 12.4458L8.1805 12.3675L2.06541 8.80038L14.2957 7.63631ZM1.73107 5.16078V5.16077C1.73106 5.04301 1.76192 4.9273 1.82058 4.82518C1.87923 4.72307 1.96363 4.63811 2.06536 4.57878L2.06536 4.57877L8.1805 1.01161L8.1805 1.01161C8.28354 0.951495 8.4007 0.919818 8.52 0.919818C8.6393 0.919818 8.75645 0.951495 8.8595 1.01161L8.8595 1.01161L14.9746 4.57877C15.0764 4.63811 15.1608 4.72307 15.2194 4.82519C15.2781 4.92731 15.3089 5.04301 15.3089 5.16078C15.3089 5.27854 15.2781 5.39425 15.2194 5.49637C15.1608 5.59848 15.0764 5.68344 14.9746 5.74278L8.8595 9.30994L8.90515 9.3882L8.8595 9.30994C8.75645 9.37006 8.6393 9.40173 8.52 9.40173C8.4007 9.40173 8.28354 9.37006 8.1805 9.30994L8.13485 9.3882L8.1805 9.30994L2.06536 5.74278L2.06536 5.74278C1.96363 5.68345 1.87923 5.59849 1.82058 5.49637C1.76192 5.39425 1.73106 5.27854 1.73107 5.16078ZM3.87624 5.08252L3.74209 5.16078L3.87624 5.23903L8.47435 7.92124L8.52 7.94787L8.56565 7.92124L13.1638 5.23903L13.2979 5.16078L13.1638 5.08252L8.56565 2.40031L8.52 2.37368L8.47435 2.40031L3.87624 5.08252Z" fill="#787486" stroke="white" stroke-width="0.181189"/>
  </g>
  <defs>
    <clipPath id="clip0_336_202">
      <rect width="16.307" height="16.307" fill="white" transform="translate(0.366486 0.0648346)"/>
    </clipPath>
  </defs>
</svg>
                </span>
                <span className="ml-2 text-sm  font-inter tracking-wide truncate">Pending</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
  <path d="M8.77139 6.84114H12.3386" stroke="#787486" stroke-width="1.35892" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.70144 6.84115L5.21103 7.35074L6.73982 5.82196" stroke="#787486" stroke-width="1.35892" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.77139 11.5974H12.3386" stroke="#787486" stroke-width="1.35892" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.70144 11.5974L5.21103 12.107L6.73982 10.5782" stroke="#787486" stroke-width="1.35892" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.48162 15.7556H10.5584C13.9557 15.7556 15.3146 14.3967 15.3146 10.9994V6.92267C15.3146 3.52538 13.9557 2.16646 10.5584 2.16646H6.48162C3.08432 2.16646 1.7254 3.52538 1.7254 6.92267V10.9994C1.7254 14.3967 3.08432 15.7556 6.48162 15.7556Z" stroke="#787486" stroke-width="1.35892" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
                <span className="ml-2 text-sm  font-inter tracking-wide truncate">In Progress</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
  <path d="M6.14189 13.4599H5.80216C3.08432 13.4599 1.7254 12.7805 1.7254 9.38319V5.98589C1.7254 3.26805 3.08432 1.90913 5.80216 1.90913H11.2378C13.9557 1.90913 15.3146 3.26805 15.3146 5.98589V9.38319C15.3146 12.101 13.9557 13.4599 11.2378 13.4599H10.8981C10.6875 13.4599 10.4836 13.5619 10.3545 13.7317L9.33535 15.0906C8.88691 15.6886 8.15309 15.6886 7.70465 15.0906L6.68546 13.7317C6.57674 13.5822 6.32534 13.4599 6.14189 13.4599Z" stroke="#787486" stroke-width="1.35892" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.2354 8.02427H11.2415" stroke="#787486" stroke-width="1.81189" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.51693 8.02427H8.52303" stroke="#787486" stroke-width="1.81189" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.79843 8.02427H5.80453" stroke="#787486" stroke-width="1.81189" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </span>
                <span className="ml-2 text-sm font-inter tracking-wide truncate">Completed</span>
              </Link>
            </li>
            <li>
   
 </li>
        
          </ul>
        </div>
        <div className="flex items-center font-inter   cursor-pointer  text-gray-500 font-semibold justify-center h-16 border-t"
          onClick={() => setShowLogout(!showLogout)}> 
        {sessionData?.user?.image && (
    <img
      src={sessionData.user.image}
      className="w-8 h-8 rounded-full mr-6"
    />
  )}
  {sessionData?.user?.name ? ` ${sessionData.user.name}` : ""}


              </div>
              {showLogout && (
          <div className="flex items-center justify-center h-16 border-t">
            <button
              onClick={() => {
                // Handle logout logic here
              }}
              className="text-gray-600 hover:text-gray-800 flex items-center"
            >
              <span className="inline-flex justify-center items-center mt-1 ml-4 mr-2">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
              </span>
              <span className="text-l font-semibold font-inter tracking-wide truncate">Logout</span>
            </button>
          </div>
        )}

</div>
      </div>
    

  );


};