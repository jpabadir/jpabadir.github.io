import './Books.css';
import { linkify } from '../../helpers';

export default function BookNotes(props) {
  const ComponentToRender = require('../../booknotes/' + linkify(props.booknotes.title)).default;
  return (
    <div className="BookNotes">
        <div className="text-left mb-4">
          <h1>{props.booknotes.title}</h1> {/* Title in /booknotes */}
          <h2 className="Subtitle">{props.booknotes.subtitle}</h2> {/* Subtitle in /booknotes */}
          <div className="Date">{new Date(props.booknotes.publishDate).toDateString()}</div> {/* Date in /booknotes */}
        </div>
        <div className="d-flex align-items-center mb-4 flex-column">
          <div className="BookNotesImage">
            <img className="BookNotesImage" src={props.booknotes.image} alt={props.booknotes.title} /> {/* Image in /booknotes */}
            <p className="ImageCaption">{props.booknotes.imageCaption}</p> {/* Caption in /booknotes */}
          </div>
        </div>
        <ComponentToRender />
      </div>
  );
}