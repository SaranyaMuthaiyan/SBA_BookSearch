import React, { useState } from 'react';
const SearchBar = ({ setBooks }) => {
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=${query}');
        const data = await res.json();
        setBooks(data.items || []);
    }

    return(
        <div>
            <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for books"
            />
            <button onClick={handleSearch}>Search</button>

        </div>
    )
};
export default SearchBar;