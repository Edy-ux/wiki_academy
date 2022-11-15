import React from 'react';
import { Search, Todo } from '../../../typing';

type SearchResult = {
  organic_results: [
    {
      position: 'number';
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};
async function seacrh(searchItem: string) {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchItem}&api_key=${process.env.API_KEY}`, {next: { revalidate: 60 }}
  );
  const data: SearchResult = await res.json();
  return data;
}

async function SearchResults({ params: { searchItem } }: Search) {
  const { organic_results } = await seacrh(searchItem);

  return (

/*     <Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense> */
    <div className="m-5">
      <p className="my-2 text-gray-800" >
        Resultados para {''}
        <span className="text-sm font-bold" >
          {searchItem}
        </span>
        </p>
      <ol className="spacy-y-5 p-5 text-base hover:text-base">
        {organic_results.map((elem) => (
          <li key={elem.position} className="list-decimal">
            <p className="ml-2 font-bold " >{elem.title}</p>
            <p  className="ml-2">{elem.snippet}</p>
          </li>
        ))}
      </ol>
      {/* {searchItem && (
          <p>Todo Title: {searchResult?.title} </p>
      )}  */}
    </div>
  );
}

export default SearchResults;
