import Search from './Search';

export default function TodoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 space-x-5 p-5   ">
      <div className="flex pl-5 ">
        <Search />
      </div>
     <div className="flex-1 w-auto">
       {children}
     </div>
    </main>
  );
}
