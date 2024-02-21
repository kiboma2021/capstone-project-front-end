import { NavLink } from 'react-router-dom';
import Logout from './Logout';

export default function NavPanel() {
  return (
    <nav>
      <div>
        <NavLink to="/">List of books</NavLink>
        <NavLink to="/create-book">Create book</NavLink>
        <NavLink to="/delete-book">Delete book</NavLink>
        <Logout />
      </div>
    </nav>
  );
}
