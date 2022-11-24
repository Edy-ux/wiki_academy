// "use client"
import React from 'react';
import { notFound } from 'next/navigation';
import { Todo } from '../../../typing';

export type PageProps = {
  params: {
    videoId: string;
  };
};

declare namespace JSX {
  interface IntrinsicElements {
    Video: any;
  }
}

const dinamicParams = true;

async function fetchTodos(todoId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  const videos: Todo = await res.json();

  // console.log(todos);
  return videos;
}

export default async function VideoPage({ params: { videoId } }: PageProps) {
  const videos: Todo = await fetchTodos(videoId);
  //404 error
  /*   if (parseInt(todoId) !== todo.id) {
    return <p>Item não encontrado</p>;
  } */

  if (videos.id !== Number(videos.id)) return notFound(); //file not-found.tsx
  return (
    <>
      <Video {...videos} />
    </>
  );
}

export function Video({ id, title, completed, userId }: Todo) {
  return (
    <div className="p-10  border-2 m-3 shadow-lg bg-transparent">
      <p>
        #{id} {title}
      </p>
      <p>Concluído: {completed ? 'Sim' : 'Não'}</p>
      <p className="border-t border-black mt-5 text-right">
        Pelo usuarío: {userId}
      </p>
    </div>
  );
}
export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos: Todo[] = await res.json();
  const filterTodos = todos.splice(0, 28);
  return filterTodos.map((todo) => ({
    videoId: todo.id.toString(),
  }));
}
