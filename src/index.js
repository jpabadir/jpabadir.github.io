import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './routes/blog';

ReactDOM.render(
  <BrowserRouter basename='jpabadir.github.io'>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<div>welcome!!</div>} />
        <Route path="coding" element={<div>hey</div>} />
        <Route path="blog" element={<Blog />}>
          <Route index element={<div>welcome to the blog</div>} />
          <Route path="article-1" element={<div>article 1</div>} />
          <Route path="article-2" element={<div>article 2</div>} />
          <Route path="article-3" element={<div>article 3</div>} />
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
