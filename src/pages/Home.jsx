import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';

const Home = () =>
{
    const [books, setBooks] = useState([]);

    return(
        <div>
            <h1>Google Books Explorer</h1>
            <SearchBar setBooks={setBooks}/>
             <div className="grid">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />

                ))}
             </div>
        </div>
    )
}
export default Home;