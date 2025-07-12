import React, { useState } from 'react';
import axios from "axios"; 
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';

function Home() {

const [books, setBooks] = useState([]);
const [selectedBook, setSelectedBook] = useState(null);

const handleSearch = async (query) => {
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
setBooks(res.data.items || []);
setSelectedBook(null); //clear previous selection
};

const handleSelect = (bookInfo) => {
    setSelectedBook(bookInfo); //show only one book
};

    return(
        <div>
            <h1>Google Books Explorer</h1>
            <SearchBar onSearch={handleSearch}/>

            {!selectedBook ? (
                <div className="card-grid">
                    {books.map((book) => (
                        <BookCard
                        key={book.id}
                        data={book.volumeInfo}
                        onSelect={() => handleSelect(book.volumeInfo)} />

                    ))}
                    </div>
            ) : (
             <div className="selected-book-details">
                <h2>{selectedBook.title}</h2>
                <p><strong>Authors:</strong> {selectedBook.authors?.join(",") || "Unknown"} </p>
                <p><strong>Description:</strong> {selectedBook.description || "No description available"} </p>
                <p><strong>Publisher:</strong> {selectedBook.publisher || "Not specified"} </p>
                <p><strong>Published Date</strong> {selectedBook.publishedDate || "Not available"} </p>
                <p><strong>Page Count:</strong> {selectedBook.pageCount || "Unknown"} </p>
                <button onClick={() => setSelectedBook(null)}> 🔙Back to results</button>
</div>
                )}
             </div>
        
    );
}
export default Home;