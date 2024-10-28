import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Books from "./components/Books/Books";
import blogsData from "./data/blogs/blogs-headers.json";
import Article from "./components/Article/Article";
import Countries from "./components/Countries/Countries";
import { linkify } from "./helpers";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import InvestmentPortfolio from "./components/InvestmentPortfolio/InvestmentPortfolio";
import Newsletter from "./components/Newsletter/Newsletter";
import AIArt from "./components/AIArt/AIArt";
import AllTheStuffILaunched from "./components/AllTheStuffILaunched/AllTheStuffILaunched";
import WhatImListeningTo from "./components/WhatImListeningTo/WhatImListeningTo";
import TheBragDoc from "./components/TheBragDoc/TheBragDoc";
import NoFights from "./components/NoFights/NoFights";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="articles" element={<Blog />} />
        <Route index element={<div>Welcome to the blog</div>} />
        {blogsData.map((blog) => (
          <Route
            key={blog.title}
            path={`articles/${linkify(blog.title)}`}
            element={<Article blog={blog} />}
          />
        ))}
        <Route path="books-i-read" element={<Books />} />
        <Route path="places" element={<Countries />} />
        <Route path="investment-portfolio" element={<InvestmentPortfolio />} />
        <Route path="newsletter" element={<Newsletter />} />
        <Route path="ai-art" element={<AIArt />} />
        <Route path="trash-duty" element={"Jaden"} />
        <Route path="no-fights" element={<NoFights />} />
        <Route
          path="all-the-stuff-i-launched"
          element={<AllTheStuffILaunched />}
        />
        <Route path="what-im-listening-to" element={<WhatImListeningTo />} />
        <Route path="the-brag-doc" element={<TheBragDoc />} />
        <Route path="*" element={<div>404. Who gave you this link?</div>} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
