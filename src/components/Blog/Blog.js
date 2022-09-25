import { NavLink } from 'react-router-dom';
import blogsData from '../../data//blogs/blogs-header.json';

export default function Blog() {
  return (
    <div>
      <div className="navbar">
        {blogsData.map((blog) => (
          <div key={blog.title}>
            <NavLink className="NavLink" to={blog.title.replace(/\s+/g, '-').toLowerCase()}>
              {blog.title}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
