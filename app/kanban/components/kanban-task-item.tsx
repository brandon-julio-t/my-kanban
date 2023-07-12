'use client';

import Card from '@/components/common/Card';
import { Task } from '@prisma/client';
import { ComponentType, useRef } from 'react';
import KanbanTaskDetail from './kanban-task-detail';

interface IKanbanTaskItem {
  task: Task;
}

const KanbanTaskItem: ComponentType<IKanbanTaskItem> = ({ task }) => {
const dialogRef = useRef<HTMLDialogElement | null>(null);

  const onClick = () => {
    dialogRef.current?.showModal();
  };

  return (
    <>
      <Card className="cursor-pointer" onClick={onClick}>
        <p className="font-medium">{task.summary}</p>
      </Card>

      <KanbanTaskDetail {...{ task, dialogRef }} />
    </>
  );
};

export default KanbanTaskItem;
