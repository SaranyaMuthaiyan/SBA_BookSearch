export const fetchBooks = async (query) => {
    const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
    return res.data.items || [];
    
};