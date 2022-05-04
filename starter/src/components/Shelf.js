import React from 'react';
import Book from './Book';
import * as BooksAPI from "../BooksAPI";
import props from "react";
import HomePage from './HomePage';


 const Shelf=({books, title, shelf,book, updateBookToShelf})=> {
   console.log(books);
   
    
  return (
    <div className="bookshelf">
    <h2 className="bookshelf-title"> {title}</h2>
    <div className="bookshelf-books" >
      <ol className="books-grid" >
      {books.map(bk =>(
        <li key={bk.id}>
        <Book  book={bk} updateBookToShelf={updateBookToShelf  } />
        </li>
      ))}
  
      </ol>
    </div>
  </div>
  );
};
export default Shelf;
