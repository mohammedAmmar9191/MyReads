
import React from "react"; 
import "./App.css";
import { Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";


const App =()=> {
  const [books, setAllBooks] = useState([]);

  useEffect(()=>{
    const getBooks= async ()=>{
     const books = await BooksAPI.getAll();
      setAllBooks(books);
      console.log(books);
    }; 
    getBooks();
  },[]);

const updateBookToShelf = (book, moveTo)=>{
  console.log("2ammar");
  const updatedBooks= books.map(bk =>{
    if (bk.id===book.id) {
    book.shelf=moveTo;
    return book;
  }
  return bk;
  })
  setAllBooks(updatedBooks);
  BooksAPI.update(book, moveTo);
}
console.log(typeof updateBookToShelf);

  return (
    <div className="app">
      <Routes> 
      
        <Route exact path="/" 
          element={
            <HomePage books={books} updateBookToShelf={updateBookToShelf} />
          }
        />
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
  

    </div>
  );
};


export default App;
