import './Article.css';

export default function Article(props) {
  return <div dangerouslySetInnerHTML={{ __html: props.blog.content }} />;
}
