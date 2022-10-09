import { formCode } from './convert-kit-form';
import './Newsletter.css';

export default function Newsletter() {
  return (
    <div>
      <h1>Do you want to join my newsletter?</h1>
      <h4>How often does it come?</h4>
      Once per week.
      <br />
      <br />
      <h4>What will you send?</h4>
      I'm not sure, honestly. The content of the newsletter will probably reflect the eclectic nature of my interests. I might share my current thoughts on the stock market, an article I found
      interesting, a new project I'm building, something about the current book I'm reading, or maybe some music. Or maybe all of those! We'll see. I'm also open to recommendations if there's stuff
      you want to hear my thoughts about every week, for some obscure reason.
      <div className="Newsletter">
        <div dangerouslySetInnerHTML={{ __html: formCode }} />
      </div>
      Obviously it's free, and obviously you can unsubscribe any time.
    </div>
  );
}
