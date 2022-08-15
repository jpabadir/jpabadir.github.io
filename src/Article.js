export default function Article(props) {
  const style = {
    padding: '50px 30px',
    color: 'white',
    textAlign: 'start',
  };
  return <div style={style} dangerouslySetInnerHTML={{ __html: props.content }} />;
}
