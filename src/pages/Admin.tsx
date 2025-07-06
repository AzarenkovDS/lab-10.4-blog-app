import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Admin() {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    navigate("/login");
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Welcome to the Admin Dashboard</h1>
    </div>
  );
}

export default Admin;
