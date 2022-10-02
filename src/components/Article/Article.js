import React from 'react';
import './Article.css';
import linkify from '../../helpers';

export default function Article(props) {
  const ComponentToRender = require(`../../data/blogs/${linkify(props.blog.title)}`).default;
  return (
    <div className="Article">
      <div style={{ maxWidth: '1100px' }}>
        <div className="text-left mb-4">
          <h1>{props.blog.title}</h1>
          <h2 className="Subtitle">{props.blog.subtitle}</h2>
          <div className="Date">{new Date(props.blog.publishDate).toDateString()}</div>
        </div>
        <div className="d-flex justify-content-center mb-4">
          <img className="ArticleImage" src={props.blog.image} alt={props.blog.title} />
        </div>
        <ComponentToRender />
      </div>
    </div>
  );
}
