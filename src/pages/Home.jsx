import React, { useState } from 'react';
import axios from "axios"; 
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';

function Home {}
{
    const [books, setBooks] = useState([]);
const handleSearch = async (query) => {
    const res = await axios.get(`https://www.googleapis.com/books/v1'/volumes?q=${query}`);
setBooks(res.data.items || []);
}
    return(
        <div>
            <h1>Google Books Explorer</h1>
            <SearchBar onSearch={handleSearch}/>
             <div className="card-grid">
                {books.map((book) => (
                    <BookCard key={book.id} data={book.volumeInfo} />

                ))}
             </div>
        </div>
    )
}
export default Home;