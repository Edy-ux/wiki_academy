import React from 'react';
import Link from 'next/link';
import { Todo } from '../../typing';

export const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos: Todo[] = await res.json();
  const filterTodos = todos.splice(0, 30);

  return filterTodos;
};

const createArray = (length: number) => [...Array(length)];
async function VideoList() {
  const todos = await fetchTodos();
  return (
    <div className="lg:text-sm lg:leading-6  z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))]  w-[10.5rem] px-4 py-5 overflow-y-auto ">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link href={`/videos/${todo.id}`}>Video: {todo.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoList;
