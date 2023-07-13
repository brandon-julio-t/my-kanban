'use client';

import Button from '@/components/common/Button';
import { Task } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { ComponentProps, ComponentType, useRef, useState } from 'react';

const KanbanCreateButton: ComponentType<ComponentProps<'div'>> = ({ ...rest }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const formRef = useRef<HTMLFormElement| null>(null);
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const onClick = () => dialogRef.current?.showModal();

  const onSubmit = async () => {
    const payload = {
      summary,
      description,
      status: 0,
    } as Task;

    await fetch('/kanban/api/tasks', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    router.refresh();

    formRef.current?.submit();
  };

  return (
    <div {...rest}>
      <Button onClick={onClick} className="btn-primary">
        Create
      </Button>

      <dialog ref={dialogRef} className="modal">
        <form ref={formRef} method="dialog" className="modal-box">
          <section className="form-control">
            <label className="label">
              <span className="label-text">Summary</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={summary}
              onChange={e => setSummary(e.target.value)}
            />
          </section>

          <section className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              rows={7}
              className="textarea textarea-bordered"
              value={description}
              onChange={e => setDescription(e.target.value)}
            ></textarea>
          </section>

          <div className="modal-action">
            <Button type="button" className="btn-primary" onClick={onSubmit}>
              Submit
            </Button>
            <Button type="submit" className="btn-error btn-outline">
              Cancel
            </Button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default KanbanCreateButton;
