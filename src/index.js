import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './routes/blog';
import blogsData from './blogs.json';
import Article from './Article';

ReactDOM.render(
  // <BrowserRouter basename='/jpabadir.github.io'>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<div>welcome young friend</div>} />
        <Route path="coding" element={<div>hey</div>} />
        <Route path="blog" element={<Blog />}>
          <Route index element={<div>Welcome to the blog</div>} />
          {blogsData.map((blog) => (
            <Route key={blog.title} path={blog.title.replace(/\s+/g, '-').toLowerCase()} element={<Article content={blog.content} />} />
          ))}
        </Route>
        <Route path="*" element={<div>404. Who gave you this link?</div>} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
