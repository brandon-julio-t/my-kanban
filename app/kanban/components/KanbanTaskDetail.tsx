'use client';

import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import CardTitle from '@/components/common/CardTitle';
import { Task } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { ComponentType, MutableRefObject, useRef } from 'react';

interface IKanbanTaskDetail {
  task: Task;
  dialogRef: MutableRefObject<HTMLDialogElement | null>;
}

const KanbanTaskDetail: ComponentType<IKanbanTaskDetail> = ({ task, dialogRef }) => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement | null>(null);

  const onDelete = async () => {
    await fetch('/kanban/api/tasks', {
      method: 'DELETE',
      body: JSON.stringify(task),
    });

    router.refresh();

    formRef.current?.submit();
  };

  return (
    <dialog ref={dialogRef} className="modal">
      <form ref={formRef} method="dialog" className="modal-box">
        <CardTitle className="mb-4">{task.summary}</CardTitle>
        <Card compact>{task.description}</Card>

        <div className="modal-action">
          <Button type="button" className="btn-error" onClick={onDelete}>
            Delete
          </Button>
          <Button type="submit">Close</Button>
        </div>
      </form>
    </dialog>
  );
};

export default KanbanTaskDetail;
