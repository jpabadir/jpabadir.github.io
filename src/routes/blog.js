import { NavLink, Outlet } from 'react-router-dom';

export default function Blog() {
  return (
    <div>
      <div>
        <NavLink to="article-1">article 1</NavLink>
      </div>
      <div>
        <NavLink to="article-2">article 2</NavLink>
      </div>
      <div>
        <NavLink to="article-3">article 3</NavLink>
      </div>
      <Outlet />
    </div>
  );
}
