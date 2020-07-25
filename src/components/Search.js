import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';

// ---------------| event handler is passed here as a prop
const Search = ({ value, onSearch }) => (
    <div>
       <input className="" id="searchInput" type="text"
            value={value}
            onChange={onSearch}
        />
    </div>
);

export default Search;