export default function Article(props) {
  const style = {
    textAlign: 'start',
  };
  return <div style={style} dangerouslySetInnerHTML={{ __html: props.content }} />;
}
