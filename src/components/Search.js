import React from 'react';

// ---------------| event handler is passed here as a prop
const Search = ({ onSearch }) => (
    <div>
        <label htmlFor="searchInput">Search: </label>
        <input id="searchInput" type="text"
            onChange={onSearch}
        />
    </div>
);

export default Search;