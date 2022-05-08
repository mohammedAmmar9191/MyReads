import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import Book from './Book';


 const SearchPage=(updateBookToShelf)=> {
  const [query, setQuery]=useState("");
  const [searchBooks, setSearchBooks]=useState([]);
  useEffect(()=>{
    let isActive=true;
    if(query){
      
      BooksAPI.search(query).then(data=>{
        if (data.error){
            setSearchBooks([]);
        }else{
          if(isActive){
            setSearchBooks(data); 
          }
        }
      })
    }
    return ()=> {
      isActive=false;
      setSearchBooks([]);
   }
  }
  ,[query])
  return (
  
      <div className="search-books">
        <div className="search-books-bar">
        <Link to ="/"> 
        <button className="close-search">
              Close
            </button> </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query}
              onChange={(e)=>(setQuery(e.target.value))}
          
            />
          </div>
        
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {searchBooks.map(bk =>(
            <li key={bk.id}>
              <Book book={bk} updateBookToShelf={updateBookToShelf } />
            </li>
          ))}
          </ol>
        </div>
      </div>
  );
};

export default SearchPage;