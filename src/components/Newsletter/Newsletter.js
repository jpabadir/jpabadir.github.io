import { formCode } from './convert-kit-form';
import './Newsletter.css';

export default function Newsletter() {
  return (
    <div>
      <h1>Do you want to join my newsletter?</h1>
      Personally, I'm pretty protective with my inbox, so don't feel pressured to join this. Personally, I'm pretty protective with my inbox, so don't feel pressured to join this. Personally, I'm
      pretty protective with my inbox, so don't feel pressured to join this. Personally, I'm pretty protective with my inbox, so don't feel pressured to join this. Personally, I'm pretty protective
      with my inbox, so don't feel pressured to join this. Personally, I'm pretty protective with my inbox, so don't feel pressured to join this.
      <div className="Newsletter">
        <div dangerouslySetInnerHTML={{ __html: formCode }} />
      </div>
    </div>
  );
}
