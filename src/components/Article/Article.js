import './Article.css';

export default function Article() {
  return <div dangerouslySetInnerHTML={{ __html:  '<p>hey</p>'}} />;
}
