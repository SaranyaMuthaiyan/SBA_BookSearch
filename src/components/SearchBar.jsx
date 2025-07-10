import React, { useState } from 'react';
function SearchBar ({ onSearch })  {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };
       

    return(
        <form onSubmit={handleSubmit} className="search-bar">
            <input
            type="text"
            value={query}
            placeholder="Search books"
            onChange={(e) => setQuery(e.target.value)} />
            <button type="submit">Search</button>
        </form>
    )
};
export default SearchBar;