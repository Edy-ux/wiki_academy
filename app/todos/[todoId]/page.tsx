// "use client"
import React from 'react';
import { notFound } from 'next/navigation';
import { Todo } from '../../../typing';
import { PageProps } from '../../../typing';

// rf

const dinamicParams = true;

async function fetchTodos(todoId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  const todos: Todo = await res.json();
  
  // console.log(todos);
  return todos;
}

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo: Todo = await fetchTodos(todoId);
  //404 error
  /*   if (parseInt(todoId) !== todo.id) {
    return <p>Item não encontrado</p>;
  } */

  if (todo.id !== Number(todo.id)) return notFound(); //file not-found.tsx
  return (
    <div className="p-10  border-2 m-3 shadow-lg bg-transparent">
      <p>
        #{todo.id} {todo.title}
      </p>
      <p>Concluído: {todo.completed ? 'Sim' : 'Não'}</p>
      <p className="border-t border-black mt-5 text-right">
        Pelo usuarío: {todo.userId}
      </p>
    </div>
  );
}

export default TodoPage;

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos: Todo[] = await res.json();
  const filterTodos = todos.splice(0, 28);
  return filterTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}
