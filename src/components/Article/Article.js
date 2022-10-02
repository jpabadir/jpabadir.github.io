import React from 'react';
import './Article.css';
import linkify from '../../helpers';

export default function Article(props) {
  const ComponentToRender = require(`../../data/blogs/${linkify(props.blog.title)}`).default;
  return (
    <div className="Article">
      <h1 className="text-center">{props.blog.title}</h1>
      <h2 className="text-center">{props.blog.subtitle}</h2>
      <div>{props.blog.publishDate}</div>
      <div className="d-flex justify-content-center">
        <img className="ArticleImage" src={props.blog.image} alt={props.blog.title} />
      </div>
      <ComponentToRender />
    </div>
  );
}
