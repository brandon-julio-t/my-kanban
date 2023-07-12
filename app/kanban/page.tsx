import React from 'react';
import KanbanPageUI from './components/ui';
import prisma from '@/lib/server/prisma';

const KanbanPage = async () => {
  const tasks = await prisma.task.findMany();
  return <KanbanPageUI {...{ tasks }} />;
};

export default KanbanPage;
