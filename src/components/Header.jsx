import { Button } from "@mui/material";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        padding: "0 24px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <Home style={{ height: "24px", width: "24px", color: "#0070f3" }} />
        <span style={{ marginLeft: "8px", fontWeight: "bold", fontSize: "18px" ,color:"blue"}}>
          Rentify
        </span>
      </Link>

      {/* Navigation Links */}
      <nav style={{ marginLeft: "auto", display: "flex", gap: "16px" }}>
        <Button
          component={Link}
          to="/about"
          style={{ color: "#6b7280", textTransform: "none" }}
        >
          About
        </Button>
        <Button
          component={Link}
          to="/contact"
          style={{ color: "#6b7280", textTransform: "none" }}
        >
          Contact Us
        </Button>
        <Button
          component={Link}
          to="/login"
          style={{ color: "#6b7280", textTransform: "none" }}
        >
          Login
        </Button>
      </nav>
    </header>
  );
}