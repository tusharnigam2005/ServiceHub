import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/services");
      setServices(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load services");
    }
  };

  const bookService = async (serviceId) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/bookings/book",
        { serviceId },
        {
          headers: {
            Authorization: token
          }
        }
      );

      alert(res.data.message);
    } catch (error) {
      console.log(error);
      alert("Booking failed. Please login as a customer.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #f8fafc, #e0f2fe)",
        padding: "40px"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#1e3a8a",
          marginBottom: "40px",
          fontSize: "42px"
        }}
      >
        Available Services
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "25px"
        }}
      >
        {services.map((service) => (
          <div
            key={service._id}
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "25px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              transition: "0.3s"
            }}
          >
            <h2 style={{ color: "#1d4ed8", marginBottom: "12px" }}>
              {service.title}
            </h2>

            <p style={{ color: "#475569", lineHeight: "1.6" }}>
              {service.description}
            </p>

            <p
              style={{
                fontWeight: "bold",
                color: "#059669",
                fontSize: "20px"
              }}
            >
              ₹ {service.price}
            </p>

            <p style={{ color: "#7c3aed", fontWeight: "600" }}>
              {service.category}
            </p>

            <button
              onClick={() => bookService(service._id)}
              style={{
                marginTop: "15px",
                width: "100%",
                background: "linear-gradient(90deg, #2563eb, #1d4ed8)",
                color: "white",
                border: "none",
                padding: "12px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "16px"
              }}
            >
              Book Service
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}