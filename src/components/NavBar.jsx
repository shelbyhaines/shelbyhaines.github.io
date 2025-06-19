import { NavLink } from "react-router-dom";

function linkClasses({ isActive }) {
  if (isActive) {
    return "text-lg font-semibold px-4 py-1 rounded-md transition-colors duration-200 bg-[#8B008B] text-white";
  } else {
    return "text-lg font-semibold px-4 py-1 rounded-md transition-colors duration-200 bg-white text-[#4f46e5] hover:bg-[#f0dbff]";
  }
}

function NavBar() {
    return (
    <nav className="ml-auto flex gap-4">
        <NavLink to="/" className={linkClasses}>
            Home
        </NavLink>
        <NavLink to="/skills" className={linkClasses}>
            Skills
        </NavLink>
        <NavLink to="/interests" className={linkClasses}>
            Interests
        </NavLink>
        <NavLink to="/contact" className={linkClasses}>
            Contact
        </NavLink>
    </nav>
  );
}

export default NavBar;