import React from 'react';
function BookCard({ data, onSelect }) {
   
    return(
        <div className="book-card" onClick={onSelect}>
            <h3>{data.title}</h3>
            {data.imageLinks?.thumbnail && ( 
            <img src={data.imageLinks.thumbnail} alt={data.title} />
            )
            }    
        </div>
    );
}

export default BookCard;
