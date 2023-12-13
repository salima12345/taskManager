import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { useSession } from 'next-auth/react';
import { api, type RouterOutputs } from '../utils/api';
import Layout from '~/components/Layout';
import {type NextPage } from 'next';
import { useRef } from 'react';
import { TaskPriority } from '@prisma/client';
import { TaskStatus } from '@prisma/client';
import { useTaskModel } from '../components/TaskModel';
import { TaskCard } from '../components/TaskCard';
import TaskDialog from '~/components/TaskDialog';

const AllTask = () => {
 const {
   isOpen,
   titleRef,
   descriptionRef,
   statusRef,
   priorityRef,
   openModal,
   closeModal,
   createTaskHandler,
   editTask,
   selectedTask,
   setSelectedTask,
   tasks,
 } = useTaskModel();

 interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: Date;
  userId: string;
 }
 
 let completedTasks: Task[] = [];
 
 if (tasks) {
  completedTasks = tasks.filter(task => task.status === 'DONE');
 }
 

 return (
  <Layout>
     <div className="flex   bg-gray-50   top-15    min-h-screen py-20 relative w-[100rem]">
       <div className="fixed top-0 left-0 w-full bg-white h-14 border-b">
         <div className="flex justify-end items-center h-full">
           <button
             onClick={openModal}
             className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded mr-3"
           >
             Add New Task
           </button>
         </div>
       </div>
       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7 ml-10">
   {completedTasks.map(task => (
     <div className="mr-6">
       <TaskCard key={task.id} task={task} />
     </div>
   ))}
</div>
       <TaskDialog
         isOpen={isOpen}
         onClose={closeModal}
         titleRef={titleRef}
         selectedTask={selectedTask}
         setSelectedTask={setSelectedTask}
         descriptionRef={descriptionRef}
         statusRef={statusRef}
         priorityRef={priorityRef}
         createTaskHandler={createTaskHandler}
         closeModal={closeModal}
       />
     </div>
   </Layout>
 );
};

export default AllTask;
