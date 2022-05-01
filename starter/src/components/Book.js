import React from 'react';
import * as BooksAPI from "../BooksAPI";
import { update } from '../BooksAPI';
import PropTypes from "prop-types";

const Book = (props) => {
  console.log(props);
  //console.log(props.currentlReading[0].title);
  //example
  const firstTitle = props.currentlReading[0];
  console.log(firstTitle['title']);
    
  const handleChange= async (e) =>{
    const shelf= e.target.value;
    const book= props;
    const result= await update(book, shelf);
    props.moveBook(book, shelf);
  }
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
                    'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
                }}
              ></div>
              <div className="book-shelf-changer">
                <select onChange={handleChange}>
                  <option value="none" disabled>
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
            <div className="book-title">{firstTitle['title']}</div>
            <div className="book-authors">Harper Lee</div>
          </div>
        </li>
    );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  bookSize: PropTypes.string.isRequired,
  updateBookToShelf: PropTypes.func.isRequired,
};

export default Book;