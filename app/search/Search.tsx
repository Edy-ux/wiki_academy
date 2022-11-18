'use client';
import { useRouter } from 'next/navigation';
import React, { useState, FormEvent, InputHTMLAttributes } from 'react';
type searchType = {
  text: string;
};

const IconSearch = () => {
  return (
    <div className="absolute left-2 top-2 text-gray-800">
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        className="hover:stroke-black"
      >
        <path d="m19 19-3.5-3.5"></path>
        <circle cx="11" cy="11" r="6"></circle>
      </svg>
    </div>
  );
};




function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push(`/search/${search}`);
  };
  function handleChange(e: any) {
    setSearch(e.target.value);
    console.log(search);
  }
  return (
    <div>
      <form className="flex flex-row gap-2 relative" onSubmit={handleSubmit}>
        <IconSearch />
        <input
          value={search}
          title="Pesquise videos aqui"
          className=" form-control 
         
        block
        w-80
        pl-10
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="search"
          name="seacrh"
          placeholder="Pesquisar "
          onChange={handleChange} 
        />
        <button  className="bg-sky-400/10 flex-none  rounded px-3 font-semibold "  > {/*  bg-gradient-to-r from-[#180404] to-[#0f0d04]  */}
          {/* text-transparent bg-gradient-to-r  from-[#FF0006] to-[#FFD500]*/}
          Buscar
        </button>
      </form>
    </div>
  );
}

export default Search;
