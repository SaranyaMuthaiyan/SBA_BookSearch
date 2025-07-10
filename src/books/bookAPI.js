export const fetchBooks = async (query) => {
    const res = await axios.get(
        `/api/books/v1/volumes?q=${query}`
    );
    return res.data.items || [];
    
};