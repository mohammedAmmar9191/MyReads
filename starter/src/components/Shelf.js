import React from 'react';
import Book from './Book';
import * as BooksAPI from "../BooksAPI";
import props from "react";
import HomePage from './HomePage';


 const Shelf=({books, title, shelf,book, updateBookToShelf})=> {
   console.log(books);
   console.log(updateBookToShelf);
   function updateBookToShelef() {
     console.log("ada");
   }
   
    
  return (
    <div className="bookshelf">
    <h2 className="bookshelf-title"> {title}</h2>
    <div className="bookshelf-books" >
      <ol className="books-grid" >
      {books.map(bk =>(
        <li key={bk.id}>
        <Book  book={bk} updateBookToShelf={updateBookToShelf} updateBookToShelef={updateBookToShelef}/>
        </li>
      ))}
  
      </ol>
    </div>
  </div>
  );
};
export default Shelf;
