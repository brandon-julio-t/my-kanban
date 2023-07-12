import Card from '@/components/common/Card';
import Container from '@/components/common/Container';
import { Task } from '@prisma/client';
import { ComponentType } from 'react';
import KanbanTaskItem from './kanban-task-item';
import CardTitle from '@/components/common/CardTitle';

interface IKanbanPageUI {
  tasks: Task[];
}

const KanbanPageUI: ComponentType<IKanbanPageUI> = ({ tasks }) => {
  const statusNameMappings = ['Backlog', 'Selected for Dev', 'In Progress', 'Done', 'Cancelled'];

  return (
    <Container>
      <main className="my-16">
        <h2 className="text-xl font-bold mb-8">Kanban Boards</h2>

        <div className="flex flex-wrap gap-4">
          {statusNameMappings.map((statusName, index) => (
            <Card key={statusName} className="flex-1">
              <CardTitle>
                <span className="text-lg font-medium">{statusName}</span>
              </CardTitle>

              <div className="flex flex-col gap-2">
                {tasks
                  .filter(task => task.status === index)
                  .map(task => (
                    <KanbanTaskItem key={task.id} task={task} />
                  ))}
              </div>
            </Card>
          ))}
        </div>
      </main>
    </Container>
  );
};

export default KanbanPageUI;
