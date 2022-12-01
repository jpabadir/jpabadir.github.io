import './Books.css';
import { linkify } from '../../helpers';

export default function BookNotes(props) {
  const ComponentToRender = require('../../booknotes/' + linkify(props.booknotes.title)).default;
  return (
    <div className="BookNotes">
      <div style={{ maxWidth: '1100px' }}>
        <div className="text-left mb-4">
          <h1>{props.booknotes.title}</h1> 
          <h2 className="BookNotesSubtitle">{props.booknotes.subtitle}</h2> 
          <div className="BookNotesDate">{new Date(props.booknotes.publishDate).toDateString()}</div> 
        </div>
        <div className="d-flex align-items-center mb-4 flex-column">
          <div className="BookNotesImage">
            <img className="BookNotesImage" src={props.booknotes.image} alt={props.booknotes.title} /> 
            <p className="BookNotesImageCaption">{props.booknotes.imageCaption}</p>
          </div>
        </div>
        <ComponentToRender />
      </div>
    </div>
  );
}