import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { useSession } from 'next-auth/react';
import { api, type RouterOutputs } from '../utils/api';
import Layout from '~/components/Layout';
import {type  NextPage } from 'next';
import { useRef } from 'react';
import { TaskPriority } from '@prisma/client';
import { TaskStatus } from '@prisma/client';
import { useTaskModel } from '../components/TaskModel';
import { TaskCard } from '../components/TaskCard';



const Home = () => {
  const { data: session } = useSession();


  const {
    isOpen,
    titleRef,
    descriptionRef,
    statusRef,
    priorityRef,
    openModal,
    closeModal,
    createTaskHandler,
    tasks,
  } = useTaskModel();


 if (!session) return null;






 

 


 if (!session) return null;







 return (
 <Layout>
   <div className="flex flex-col items-center justify-center min-h-screen py-2 relative">
     <button onClick={openModal} className="absolute top-8 right-4 bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded mb-4">
       + Add New Task
     </button>
     <Dialog open={isOpen} onClose={closeModal} className="fixed z-10 inset-0 overflow-y-auto">
       <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
       <div className="flex items-center justify-center min-h-screen">
         <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-3/4 md:w-1/2 lg:w-1/3">
           <Dialog.Title className="bg-gray-50 px-4 py-2">Add New Task</Dialog.Title>
           <form className="px-4 py-2">
             <div className="mb-4">
              <label className="block text-gray-700 text-sm  mb-2" htmlFor="title">
               Title
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white" id="title" type="text" placeholder="Task title"    ref={titleRef}/>
             </div>
             <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2" htmlFor="description">
               Description
              </label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white" id="description" placeholder="Task description"   ref={descriptionRef}></textarea>
             </div>
             <div className="mb-4">
              <label className="block text-gray-700 text-sm  mb-2" htmlFor="status">
               Status
              </label>
              <select
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
  id="status" 
  ref={statusRef} 
>
  <option value="TODO">To Do</option>
  <option value="PENDING">In Progress</option>
  <option value="DONE">Done</option>
</select>
             </div>
             <div className="mb-4">
              <label className="block text-gray-700 text-sm  mb-2" htmlFor="priority">
               Priority
              </label>
              <select
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
  id="priority" 
  ref={priorityRef} 
>
  <option value="HIGH">High</option>
  <option value="MEDIUM">Medium</option>
  <option value="LOW">Low</option>
</select>

             </div>
             <div className="flex items-center font-bold justify-between">
             <button
  className="bg-gray-100 text-gray-500 border border-gray-300 hover:bg-gray-200 hover:text-gray-700 py-2 px-4 rounded mb-4 transition duration-300 ease-in-out"
  type="button"
  onClick={closeModal}
  style={{
    width: '14rem',
  }}
>
  Cancel
</button>

<button
  className="bg-indigo-100 text-indigo-500 border border-indigo-300 hover:bg-indigo-700 hover:text-white py-2 px-4 rounded mb-4 transition duration-300 ease-in-out"
  type="button"
  style={{
    width: '14rem',
  }}
  onClick={createTaskHandler}
>
  Save
</button>



             
             </div>
           </form>
         </div>
       </div>
     </Dialog>
     {tasks?.map((task) => (
      <TaskCard key={task.id} task={task}  />
    ))}
   </div>
 </Layout>
 );
};

export default Home;
