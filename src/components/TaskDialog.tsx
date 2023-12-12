import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Task } from '@prisma/client';

interface TaskDialogProps {
 isOpen: boolean;
 onClose: () => void;
 selectedTask: Task | null;
 setSelectedTask: React.Dispatch<React.SetStateAction<Task | null>>; 

 titleRef: React.RefObject<HTMLInputElement>;
 descriptionRef: React.RefObject<HTMLTextAreaElement>;
 statusRef: React.RefObject<HTMLSelectElement>;
 priorityRef: React.RefObject<HTMLSelectElement>;
 createTaskHandler: () => void;
 closeModal: () => void;
}

const TaskDialog: React.FC<TaskDialogProps> = ({
 isOpen,
 selectedTask,
 setSelectedTask,
 onClose,
 titleRef,
 descriptionRef,
 statusRef,
 priorityRef,
 createTaskHandler,
 closeModal,
}) => {
 const [localTask, setLocalTask] = useState<Task | null>(null);

 useEffect(() => {
  setLocalTask(selectedTask);
 }, [selectedTask]);

 const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  if (!localTask) {
    return;
  }

  setLocalTask({
    ...localTask,
    [event.target.name]: event.target.value,
  });
 };

 return (
  <Dialog
    open={isOpen}
    onClose={closeModal}
    className="fixed z-10 inset-0 overflow-y-auto"
  >
    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
    <div className="flex items-center justify-center min-h-screen">
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-3/4 md:w-1/2 lg:w-1/3">
        <Dialog.Title className="bg-gray-50 px-4 py-2"> Add New Task</Dialog.Title>
        <form className="px-4 py-2">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="title"
              type="text"
              placeholder="Task title"
              ref={titleRef}
              value={localTask?.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="description"
              placeholder="Task description"
              ref={descriptionRef}
              value={localTask?.description}
              onChange={handleInputChange}
              name="description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="status">
              Status
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="status"
              ref={statusRef}
              value={localTask?.status}
              onChange={handleInputChange}
              name="status"
            >
              <option value="TODO">To Do</option>
              <option value="PENDING">In Progress</option>
              <option value="DONE">Done</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="priority">
              Priority
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="priority"
              ref={priorityRef}
              value={localTask?.priority}
              onChange={handleInputChange}
              name="priority"
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
 );
};

export default TaskDialog;