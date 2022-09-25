import { NavLink } from 'react-router-dom';
import blogsData from '../../data/blogs/blogs-headers.json';

export default function Blog() {
  return (
    <div className="Blog">
      <div>
        {blogsData.map((blog) => (
          <div key={blog.title}>
            <NavLink to={blog.title.replace(/\s+/g, '-').toLowerCase()}>{blog.title}</NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
