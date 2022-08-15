import { NavLink, Outlet } from 'react-router-dom';
import blogsData from '../blogs.json';

export default function Blog() {
  return (
    <div>
      <div>
        {blogsData.map((blog) => (
          <div key={blog.title}>
            <NavLink style={{ color: 'white' }} to={blog.title.replace(/\s+/g, '-').toLowerCase()}>
              {blog.title}
            </NavLink>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
