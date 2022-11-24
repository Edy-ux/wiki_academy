import '../../styles/globals.css';
import VideosList from './VideosList';

export default function TodoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex" >
      <div>
        {/*@ts-ignore*/}
        <VideosList />
      </div>
      <div className="flex-grow" >
        {children}
      </div>
    </main>
  );
}
