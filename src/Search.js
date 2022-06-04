import React, { useEffect, useState} from 'react';
import Links from './Links';
import { useDebounce } from "use-debounce";
import { useResultContext } from "./ResultContextProvider";

function Search() {
  const { text, setText } = useState("Elon Musk");
  const { setSearchTerm }  = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue)
  }, [debouncedValue])
  return (
    <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
      <form>
        <input 
        placeholder="Search Google"
        value={text} 
        type="text"
        onChange={(e) => setText(e.target.value)}
        className='sm:w-96 w-80 h-10 dark:bg-gray-300 border rounded-full shadow-sm outline-none p-6 text-blue-500' />
      </form>
      {!text &&(
        <button type="button" className='absolute top-1.5 right-4 text-2xl  text-red-00'
        onClick={() => setText('')}><span className='hover:bg-gray-100 rounded-full text-red-800 p-2'>x</span></button>
      )}
        <Links />
    </div>
  )
}

export default Search
