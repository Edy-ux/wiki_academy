import React from 'react';
import { Search, Todo } from '../../../typing';

type SearchResult = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};

async function seacrh(searchItem: string) {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchItem}&api_key=${process.env.API_KEY}`,
    { next: { revalidate: 60 } }
  );
  const result: SearchResult = await res.json();
  return result;
}

async function SearchResults({ params: { searchItem } }: Search) {
  const { organic_results: result } = await seacrh(searchItem);

  return (
    <div className="m-5">
      <p className="my-2 text-gray-800">
        Resultados para
        <span className=" ml-1 text-sm font-bold">{searchItem}</span>
      </p>

      <ol className="spacy-y-5 p-5 text-sm ">
        {result.map((elem: any) => (
          <li key={elem.position} className="list-decimal">
            <p className="ml-2 font-bold text-base">{elem.title}</p>
            <p className="ml-2">{elem.snippet}</p>
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
