import { NavLink } from 'react-router-dom';
import blogsData from '../../data/blogs/blogs-headers.json';
import './Blog.css';

export default function Blog() {
  function myFunction(event) {
    console.log(event.target.getElementsByTagName('img'));
  }

  return (
    <div className="Blog">
      {blogsData.map((blog) => (
        <div key={blog.title} onMouseEnter={myFunction}>
          <NavLink className="Link BlogLink container my-2" to={blog.title.replace(/\s+/g, '-').toLowerCase()}>
            <div className="row">
              <div className="col-lg-6">
                <div className="BlogImageParent">
                  <img className="BlogThumbnail" src={blog.image} alt={blog.title} />
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center justify-content-center">
                <div className="text-center">{blog.title}</div>
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}
