import { useEffect, useState } from "react";
import axios from "axios";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/bookings/my-bookings",
        {
          headers: {
            Authorization: token
          }
        }
      );

      setBookings(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load bookings");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #fdf2f8, #fce7f3)",
        padding: "40px"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#be185d",
          marginBottom: "40px",
          fontSize: "40px"
        }}
      >
        My Bookings
      </h1>

      {bookings.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            color: "#64748b"
          }}
        >
          No bookings found.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "25px"
          }}
        >
          {bookings.map((booking) => (
            <div
              key={booking._id}
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "25px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
              }}
            >
              <h2
                style={{
                  color: "#be185d",
                  marginBottom: "12px"
                }}
              >
                {booking.service?.title}
              </h2>

              <p
                style={{
                  color: "#475569",
                  lineHeight: "1.6"
                }}
              >
                {booking.service?.description}
              </p>

              <p
                style={{
                  fontWeight: "bold",
                  color: "#059669",
                  fontSize: "20px"
                }}
              >
                ₹ {booking.service?.price}
              </p>

              <p
                style={{
                  color: "#7c3aed",
                  fontWeight: "600"
                }}
              >
                {booking.service?.category}
              </p>

              <p
                style={{
                  marginTop: "10px",
                  fontSize: "14px",
                  color: "#64748b"
                }}
              >
                Booked on{" "}
                {new Date(
                  booking.bookingDate
                ).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}