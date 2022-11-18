import '../../styles/globals.css';
import VideosList from './VideosList';

export default function TodoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex ml-4 " >
      <div>
        {/*@ts-ignore*/}
        <VideosList />
      </div>
      <div className="flex-shrink-0" >
        {children}
      </div>
    </main>
  );
}
