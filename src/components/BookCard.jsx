import React from 'react';
function BookCard({ data }) {
   
    return(
        <div className="book-card">
            <img src={data.imageLinks?.thumbnail} alt={data.title} />
            <h3>{data.title}</h3>
            <p>{data.authors?.join(',')}</p>
            
        </div>
    );
}

export default BookCard;
