'use client';
import { useRouter } from 'next/navigation';
import React, { useState, FormEvent, InputHTMLAttributes } from 'react';
// import SearchIcon from '@mui/icons-material/Search';
type searchType = {
  text: string;
};

const IconSearch = () => {
  return (
    <div className="absolute left-2 top-2">
      <span className="material-icons">search</span>
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
        <button
          className="bg-sky-500 flex-none  rounded-md text-white px-3"
          type="submit"
        >
          Buscar
        </button>
      </form>
    </div>
  );
}

export default Search;
