import KanbanPageUI from './components/KanbanPageUI';
import prisma from '@/lib/server/prisma';

const KanbanPage = async () => {
  const tasks = await prisma.task.findMany();
  return <KanbanPageUI {...{ tasks }} />;
};

export default KanbanPage;
