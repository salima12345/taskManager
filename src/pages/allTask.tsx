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
 
 let pendingTasks: Task[] = [];
 let inProgressTasks: Task[] = [];
 let completedTasks: Task[] = [];
 
 if (tasks) {
  pendingTasks = tasks.filter(task => task.status === 'PENDING');
  inProgressTasks = tasks.filter(task => task.status === 'INPROGRESS');
  completedTasks = tasks.filter(task => task.status === 'DONE');
 }
 

 return (
  <Layout>
     <div className="flex flex-col items-center justify-center min-h-screen py-0 relative w-[100rem]">
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
       <div className="flex  gap-20 mr-40 ml-0">
         <div className="w-full sm:w-1/4 p-5 ">
           <h2 className="text-xl font-semibold mb-4">Pending </h2>
           {pendingTasks.map(task => (
             <TaskCard key={task.id} task={task} />
           ))}
         </div>
         <div className="w-full sm:w-1/4 p-4 ">
           <h2 className="text-xl font-semibold mb-4">In Progress </h2>
           {inProgressTasks.map(task => (
             <TaskCard key={task.id} task={task} />
           ))}
         </div>
         <div className="w-full sm:w-1/4 p-4 mr-40">
           <h2 className="text-xl font-semibold mb-4">Completed </h2>
           {completedTasks.map(task => (
             <TaskCard key={task.id} task={task} />
           ))}
         </div>
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
