import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="flex gap-4 bg-gray-200 p-4">
      <Link to="/blog">Blog</Link>
      {isAuthenticated ? (
        <>
          <Link to="/admin">Admin</Link>
          <button className="text-red-600" onClick={logout}>
            Log Out
          </button>
        </>
      ) : (
        <Link to="/login">Log In</Link>
      )}
    </nav>
  );
}

export default Navbar;
