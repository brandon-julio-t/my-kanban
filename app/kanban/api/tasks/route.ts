import prisma from '@/lib/server/prisma';
import { Task } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await (request.json() as Promise<Task>);

    const result = await prisma.task.create({
      data: {
        ...data,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await (request.json() as Promise<Task>);

    const result = await prisma.task.update({
      where: { id: data.id },
      data: {
        ...data,
        updated_at: new Date(),
      },
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
