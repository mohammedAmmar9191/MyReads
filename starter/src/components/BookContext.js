import React, {useState, createContext}from "react";
import * as BooksAPI from "../BooksAPI";
import props from "react";



export const BookContext = createContext();

const BookProvider = (props) => {
const [books, setBooks] = useState([]);
const [currentlyReading, setCurrentlyReading] = useState([]);
const [wantToRead, setWantToRead] = useState([]);
const [read, setRead] = useState([]);


return(
<BookContext.Provider value={{book: [books, setBooks]}}>
{props.children}
</BookContext.Provider>
);
};
export default BookProvider;