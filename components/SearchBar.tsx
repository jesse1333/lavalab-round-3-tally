import React from 'react';

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="relative max-w-md w-full">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <svg
          className="h-4 w-4 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search Materials"
        onChange={handleSearchChange}
        className="w-full py-2 pl-10 pr-4 text-gray-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

export default SearchBar;
