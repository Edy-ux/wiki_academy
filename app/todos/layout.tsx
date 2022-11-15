import '../../styles/globals.css';
import TodoList from './TodoList';

export default function TodoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex ml-4">
      <div>
        {/*@ts-ignore*/}
        <TodoList />
      </div>
      <div className="flex-1 ml-40" >
        {children}
      </div>
    </main>
  );
}
