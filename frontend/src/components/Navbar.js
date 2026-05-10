import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully");
    navigate("/login");
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    marginRight: "20px",
    fontWeight: "600",
    fontSize: "15px"
  };

  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #1e3a8a, #2563eb)",
        color: "white",
        padding: "16px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "24px",
          fontWeight: "700"
        }}
      >
        Service Marketplace
      </h2>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/signup" style={linkStyle}>Signup</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/add-service" style={linkStyle}>Add Service</Link>
        <Link to="/my-bookings" style={linkStyle}>My Bookings</Link>

        <button
          onClick={logout}
          style={{
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            padding: "8px 14px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
            marginLeft: "10px"
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}