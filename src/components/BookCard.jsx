import React from 'react';
const BookCard = ({ book }) => {
    const info = book.volumeInfo;

    return(
        <div className="card">
            <img src={info.imageLinks?.thumbnail} alt={info.title} />
            <h3>{info.title}</h3>
            <p>{info.authors?.join(',')}</p>
            <a href={info.previewLink} target="_blank" rel="noreferrer">Preview</a>
        </div>
    )
}

export default BookCard;
