import { Suspense } from 'react';

import Dropdown from './components/dropDown/SideBar';
import Search from './search/Search';
import { Skeleton } from './search/[searchItem]/loading';
function Home() {
  return (
    <main className="flex flex-col mx-5 p-4">
      <div className="flex-1">
        <h1 className=" font-extrabold text-gray-900 dark:text-white text-[2rem] lg:text-[4rem]">
          <span className="text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-[#180404] to-[#0f0d04] ">
            WikiTube
          </span>
        </h1> 
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Alguno paragrafo aqui Algum paragrafo aqui Algum paragrafo aqui Algum
          paragrafo aqui.
        </p>
        <Skeleton />
      </div>
    </main>
  );
}

export default Home;
