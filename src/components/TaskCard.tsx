import { Task } from '@prisma/client';
import { useState } from 'react';
import { api, type RouterOutputs } from '../utils/api';
import { useSession } from 'next-auth/react';
import { useTaskModel } from './TaskModel';
import { taskRouter } from '~/server/api/routers/task';
import TaskDialog from './TaskDialog';



interface TaskCardProps {
 task: Task;


}



export const TaskCard: React.FC<TaskCardProps> = ({ task}) => {
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
   } = useTaskModel();
  
  

  const { data: tasks, refetch: refetchTasks } = api.task.getAll.useQuery(
    { userId: session?.user?.id ?? '' },
    {
      enabled: session?.user !== undefined,
    }
   );
   const deleteTask = api.task.delete.useMutation({
    onSuccess: () => {
      void refetchTasks();
    },
  });


 const [isOptionsOpen, setIsOptionsOpen] = useState(false);

const handleUpdateClick = () => {
  console.log('Update button clicked for task:', task);
  setSelectedTask(task);
  openModal();
  console.log('After openModal');
};

 return (
 <div className="relative bg-white rounded-lg p-4 shadow-md w-[400px]">
   <div className="absolute top-0 right-0">
     <button onClick={() => setIsOptionsOpen(!isOptionsOpen)} className="bg-transparent hover:bg-gray-200 text-gray-500 font-bold py-2 px-2 rounded-lg  border shadow-md mr-4 mt-4 ">
       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
         <path d="M11.8801 8.47798C12.2137 8.47798 12.4841 8.20757 12.4841 7.87401C12.4841 7.54045 12.2137 7.27005 11.8801 7.27005C11.5466 7.27005 11.2762 7.54045 11.2762 7.87401C11.2762 8.20757 11.5466 8.47798 11.8801 8.47798Z" stroke="#6F6F6F" stroke-width="1.20793" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M7.6524 8.47798C7.98596 8.47798 8.25636 8.20757 8.25636 7.87401C8.25636 7.54045 7.98596 7.27005 7.6524 7.27005C7.31884 7.27005 7.04843 7.54045 7.04843 7.87401C7.04843 8.20757 7.31884 8.47798 7.6524 8.47798Z" stroke="#6F6F6F" stroke-width="1.20793" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M3.42467 8.47798C3.75823 8.47798 4.02864 8.20757 4.02864 7.87401C4.02864 7.54045 3.75823 7.27005 3.42467 7.27005C3.09111 7.27005 2.82071 7.54045 2.82071 7.87401C2.82071 8.20757 3.09111 8.47798 3.42467 8.47798Z" stroke="#6F6F6F" stroke-width="1.20793" stroke-linecap="round" stroke-linejoin="round"/>
       </svg>
     </button>
     {isOptionsOpen && (
       <div className="absolute top-12 right-0 bg-white border shadow-md p-2 rounded w-[150px] ">
         <button className="block w-full text-left  hover:text-red-500 hover:bg-red-100 py-1 px-2 rounded" onClick={() => void deleteTask.mutate({ id: task.id })}>
           Delete
         </button>
         <button className="block w-full text-left hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded" 
           onClick={handleUpdateClick}
>
  Update
</button>



       </div>
     )}
   </div>
   <div className="p-2">
     <span className="inline-block px-2 py-1 leading-none bg-green-200 text-green-400 rounded-full font-semibold uppercase tracking-wide text-xs">{task.priority}</span>
     <h2 className="mt-2 mb-2 text-black text-[14.494px] font-semibold line-height-[21.741px] text-[#1A1919]">{task.title}</h2>
     <p className="text-sm text-[12.682px] font-normal line-height-[140%] text-[#252C32]">{task.description}</p>
   </div>
   <div className="mt-4 flex items-center">
   <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
  <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M4.66726 7.87341C4.66726 7.15265 4.95358 6.46141 5.46323 5.95176C5.97288 5.44211 6.66412 5.15579 7.38487 5.15579H16.4436C16.6118 5.15579 16.7767 5.20264 16.9198 5.29108C17.0629 5.37953 17.1786 5.50608 17.2538 5.65655C17.3291 5.80702 17.3609 5.97546 17.3458 6.14302C17.3307 6.31057 17.2692 6.4706 17.1683 6.60519L14.8583 9.68515L17.1683 12.7651C17.2692 12.8997 17.3307 13.0597 17.3458 13.2273C17.3609 13.3948 17.3291 13.5633 17.2538 13.7138C17.1786 13.8642 17.0629 13.9908 16.9198 14.0792C16.7767 14.1677 16.6118 14.2145 16.4436 14.2145H7.38487C7.14462 14.2145 6.91421 14.3099 6.74433 14.4798C6.57444 14.6497 6.479 14.8801 6.479 15.1204V17.838C6.479 18.0782 6.38356 18.3087 6.21368 18.4785C6.04379 18.6484 5.81338 18.7439 5.57313 18.7439C5.33288 18.7439 5.10247 18.6484 4.93258 18.4785C4.7627 18.3087 4.66726 18.0782 4.66726 17.838L4.66726 7.87341Z" fill="#6E7C87"/>
</svg>     <span className="ml-2">{task.createdAt.toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
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

 );
};
