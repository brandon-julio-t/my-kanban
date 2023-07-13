'use client';

import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import CardAction from '@/components/common/CardAction';
import { Task } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { ComponentType, useRef } from 'react';
import KanbanTaskDetail from './KanbanTaskDetail';

interface IKanbanTaskItem {
  task: Task;
}

const KanbanTaskItem: ComponentType<IKanbanTaskItem> = ({ task }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const router = useRouter();

  const onClick = () => {
    dialogRef.current?.showModal();
  };

  const updateTask = async (newTask: Task) => {
    try {
      const response = await fetch('/kanban/api/tasks', {
        method: 'PUT',
        body: JSON.stringify(newTask),
      });
      const data = await response.json();
      router.refresh();
      return data;
    } catch (error) {
      console.error(error);
      alert('An error occurred when updating task.');
    }
  };

  const onPrev = async () => {
    const nextStatus = task.status - 1;

    await updateTask({
      ...task,
      status: Math.max(0, nextStatus),
    });
  };

  const onNext = async () => {
    const nextStatus = task.status + 1;

    await updateTask({
      ...task,
      status: Math.min(4, nextStatus),
    });
  };

  return (
    <>
      <Card compact className="min-w-[168px]">
        <p className="cursor-pointer link font-medium" onClick={onClick}>
          {task.summary}
        </p>

        <CardAction className="justify-end">
          <Button onClick={onPrev} className="btn-sm">
            ◀️
          </Button>
          <Button onClick={onNext} className="btn-sm">
            ▶️
          </Button>
        </CardAction>
      </Card>

      <KanbanTaskDetail {...{ task, dialogRef }} />
    </>
  );
};

export default KanbanTaskItem;
