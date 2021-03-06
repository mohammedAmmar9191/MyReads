import React from 'react';
import * as BooksAPI from "../BooksAPI";
import { update } from '../BooksAPI';
import PropTypes from "prop-types";
import HomePage from './HomePage';
import props from "react";


const Book = ({book, updateBookToShelf}, updateBookToShelef) => {
  //console.log(updateBookToShelf);
  //function updateBookToShelf(e) {
    //console.log(e);
  //}
  
 
    return (
        <li>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage:
                  `url("${book.imageLinks.thumbnail}")`,
                }}
              >

              </div>
              <div className="book-shelf-changer">
                <select defaultValue={book.shelf? book.shelf : "none"} onChange={(e) => updateBookToShelf(book, e.target.value)}>
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">
                    Currently Reading
                  </option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        </li>
    );
}

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;