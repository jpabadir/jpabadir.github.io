import { NavLink } from 'react-router-dom';
import blogsData from '../../data/blogs/blogs-headers.json';

export default function Blog() {
  return (
    <div className="Blog">
      <div>
        {blogsData.map((blog) => (
          <div key={blog.title}>
            <NavLink className="Link NavLink container" to={blog.title.replace(/\s+/g, '-').toLowerCase()}>
              <div className="row justify-content-between">
                <div className="col-lg-6">
                  <img
                    style={{ width: '300px' }}
                    src={`https://i.ytimg.com/vi/OBzSOglT6U4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhGbiSdz12jMioRGAKbChul81Meg`}
                    alt={blog.title}
                  />
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div>{blog.title}</div>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
