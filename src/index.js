import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './routes/blog';
import Books from './routes/books-i-read';
import blogsData from './blogs.json';
import Article from './Article';
import linkify from './helpers';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<div>Welcome, young friend.</div>} />
        <Route path="blog" element={<Blog />} />
        <Route index element={<div>Welcome to the blog</div>} />
        {blogsData.map((blog) => (
          <Route key={blog.title} path={`blog/${linkify(blog.title)}`} element={<Article content={blog.content} />} />
        ))}
        <Route path="books-i-read" element={<Books>I'll put my channel here in a second.</Books>} />
        <Route path="*" element={<div>404. Who gave you this link?</div>} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
