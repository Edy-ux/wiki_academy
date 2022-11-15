import { Suspense } from 'react';
import Search from './search/Search';

function Home() {
  return (
    <div>
       <main className="flex space-x-5 divide-x-2 p-5">

      <div>
        <h1 className="text-2xl">Wikis</h1>
      </div>
      
      <div className="flex-1 pl-5 ">
        {/* <Search/> */}
      </div>
      
    </main>
    </div>
  );
}

export default Home;
