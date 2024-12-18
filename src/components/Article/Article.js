import React from 'react';
import './Article.css';
import { linkify } from '../../helpers';

export default function Article(props) {
  const ComponentToRender = require('../../data/blogs/' + linkify(props.blog.title)).default;
  return (
    <div className="Article">
      <div style={{ maxWidth: '1100px' }}>
        <div className="text-left mb-4">
          <h1>{props.blog.title}</h1>
          <h2 className="Subtitle">{props.blog.subtitle}</h2>
          <div className="Date">{new Date(props.blog.publishDate).toDateString()}</div>
        </div>
        {props.blog.image && <div className="d-flex align-items-center mb-4 flex-column">
          <div className="ArticleImage">
            <img className="ArticleImage" src={props.blog.image} alt={props.blog.title} />
            <p className="ImageCaption">{props.blog.imageCaption}</p>
          </div>
        </div>}
        <ComponentToRender />
      </div>
    </div>
  );
}
