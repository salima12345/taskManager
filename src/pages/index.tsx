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
import TaskDialog from '~/components/TaskDialog';



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
    editTask,
    selectedTask,
    setSelectedTask,
    tasks,
  } = useTaskModel();
  const [pendingTasks, setPendingTasks] = useState([]);
const [inProgressTasks, setInProgressTasks] = useState([]);
const [completedTasks, setCompletedTasks] = useState([]);


 if (!session) return null;






 

 


 if (!session) return null;







 return (
 <Layout>
   <div className="flex flex-col items-center justify-center min-h-screen py-2 relative w-[100rem]">
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
     {tasks?.map((task) => (
      <TaskCard key={task.id} task={task}    />
    ))}
   </div>
 </Layout>
 );
};

export default Home;
