import { NavLink } from "react-router-dom";
import blogsData from "../../data/blogs/blogs-headers.json";
import "./Blog.css";

export default function Blog() {
  function toggleScaleThumbnail(event) {
    event.currentTarget
      .getElementsByTagName("img")[0]
      .classList.toggle("BlogThumbnailScaled");
  }

  return (
    <div className="Blog">
      {blogsData
        .filter((blog) => blog.published)
        .map((blog) => (
          // <div key={blog.title} onMouseEnter={blog.image && toggleScaleThumbnail} onMouseLeave={blog.image && toggleScaleThumbnail}>
          <div key={blog.title}>
            <NavLink
              className="Link NavLink container my-2"
              to={blog.title.replace(/\s+/g, "-").toLowerCase()}
            >
              <div className="row justify-content-center">
                {/* {blog.image && <div className="col-lg-6">
                <div className="BlogThumbnailParent">
                  <img className="BlogThumbnail" src={blog.image} alt={blog.title} />
                </div>
              </div>} */}
                <div className="col-lg-6 d-flex align-items-center justify-content-left">
                  <div className="text-start">{blog.title}</div>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
    </div>
  );
}
