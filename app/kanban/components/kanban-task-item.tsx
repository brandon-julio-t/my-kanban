import Card from '@/components/common/Card';
import { Task } from '@prisma/client';
import React, { ComponentType } from 'react';

interface IKanbanTaskItem {
  task: Task;
}

const KanbanTaskItem: ComponentType<IKanbanTaskItem> = ({ task }) => {
  return (
    <Card compact>
      <p className="font-medium">{task.summary}</p>
    </Card>
  );
};

export default KanbanTaskItem;
