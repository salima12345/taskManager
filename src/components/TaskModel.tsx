import { useState, useRef } from 'react';
import { api } from '../utils/api';
import { TaskStatus ,TaskPriority} from '@prisma/client';
import { useSession } from 'next-auth/react';

export const useTaskModel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const statusRef = useRef<HTMLSelectElement>(null);
  const priorityRef = useRef<HTMLSelectElement>(null);
  const { data: session } = useSession();

  const { data: tasks, refetch: refetchTasks } = api.task.getAll.useQuery(
    { userId: session?.user?.id ?? '' },
    {
      enabled: session?.user !== undefined,
    }
  );

  const createTask = api.task.create.useMutation({
    onSuccess: () => {
      void refetchTasks();
      closeModal();
    },
  });

  const updateTask = api.task.update.useMutation({
    onSuccess: () => {
      void refetchTasks();
      closeModal();
    },
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const createTaskHandler = () => {
    const title = titleRef.current?.value ?? '';
    const description = descriptionRef.current?.value ?? '';
    const status = statusRef.current?.value as TaskStatus;
    const priority = priorityRef.current?.value as TaskPriority;

    createTask.mutate({
      title,
      description,
      status,
      priority,
      userId: session?.user?.id ?? '',
    });

    closeModal();
  };

 

  return {
    isOpen,
    titleRef,
    descriptionRef,
    statusRef,
    priorityRef,
    openModal,
    closeModal,
    createTaskHandler,
    tasks,
  };
};
