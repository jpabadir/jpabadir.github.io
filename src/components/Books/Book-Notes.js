import { NavLink } from 'react-router-dom';
import BooksData from '../..book notes/booknotes-headers.json';
import './Books.css';

export default function Book() {

  return (
    <div className="Book">
      {BooksData.map((Book) => (
          <NavLink className="Link BookLink container my-2" to={Book.title.replace(/\s+/g, '-').toLowerCase()}> {/** Link to Webpage **/}</NavLink>
      ))}
    </div>
  );
}
