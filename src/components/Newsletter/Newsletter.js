import { formCode } from './convert-kit-form';
import './Newsletter.css';

export default function Newsletter() {
  return (
    <div className="Newsletter">
      <div className="NewsletterForm" dangerouslySetInnerHTML={{ __html: formCode }} />
    </div>
  );
}
