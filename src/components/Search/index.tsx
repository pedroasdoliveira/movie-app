import React, { Dispatch, FC } from "react";

interface SearchBoxProps {
    setSearchTerm: Dispatch<React.SetStateAction<string>>
}

const Search: FC<SearchBoxProps> = (props) => {
    const { setSearchTerm } = props

  return (
    <>
      <input
        className="block p-4 pl-10 focus:outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        type="search"
        placeholder="Procurar..."
        onChange={(e) => setSearchTerm(e.target.value.trim().toLowerCase())}
      />
    </>
  );
};

export default Search;
