'use client';

import Card from '@/components/common/Card';
import CardTitle from '@/components/common/CardTitle';
import { Task } from '@prisma/client';
import { ComponentType, MutableRefObject } from 'react';

interface IKanbanTaskDetail {
  task: Task;
  dialogRef: MutableRefObject<HTMLDialogElement | null>;
}

const KanbanTaskDetail: ComponentType<IKanbanTaskDetail> = ({ task, dialogRef }) => {
  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box">
        <CardTitle className='mb-4'>{task.summary}</CardTitle>
        <Card compact>{task.description}</Card>
      </div>
    </dialog>
  );
};

export default KanbanTaskDetail;
