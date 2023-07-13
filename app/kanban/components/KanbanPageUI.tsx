import Card from '@/components/common/Card';
import Container from '@/components/common/Container';
import { Task } from '@prisma/client';
import { ComponentType } from 'react';
import KanbanTaskItem from './KanbanTaskItem';
import CardTitle from '@/components/common/CardTitle';
import KanbanCreateButton from './KanbanCreateButton';

interface IKanbanPageUI {
  tasks: Task[];
}

const KanbanPageUI: ComponentType<IKanbanPageUI> = ({ tasks }) => {
  const statusNameMappings = ['Backlog', 'Selected for Dev', 'In Progress', 'Done', 'Cancelled'];

  return (
    <Container>
      <main className="my-16 flex flex-col gap-4">
        <h2 className="text-xl font-bold">Kanban Boards</h2>

        <section>
          <KanbanCreateButton />
        </section>

        <section className="flex flex-wrap gap-4">
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
        </section>
      </main>
    </Container>
  );
};

export default KanbanPageUI;
