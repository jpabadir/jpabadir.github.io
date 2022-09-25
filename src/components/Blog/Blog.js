import { NavLink } from 'react-router-dom';
import blogsData from '../../data/blogs/blogs-headers.json';

export default function Blog() {
  return (
    <div className="Blog">
      <div>
        {blogsData.map((blog) => (
          <div key={blog.title}>
            <NavLink className="Link NavLink container my-2" to={blog.title.replace(/\s+/g, '-').toLowerCase()}>
              <div className="row">
                <div className="col-lg-6">
                  <img style={{ width: '350px', height: '200px', borderRadius: '10px' }} src={blog.image} alt={blog.title} />
                </div>
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                  <div className="text-center">{blog.title}</div>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
