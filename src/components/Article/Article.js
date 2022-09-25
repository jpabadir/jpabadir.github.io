import React from 'react';
import './Article.css';

export default function Article(props) {
  const ComponentToRender = require(`../../data/blogs/${props.url}`).default;
  return <ComponentToRender />;
}
