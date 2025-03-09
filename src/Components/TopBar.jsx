

import React, { useRef, useEffect } from "react";

const TopBar = ({ items, setActive, activeItem }) => {
  const topBarRef = useRef(null);

  useEffect(() => {
    const topBarElement = topBarRef.current;

    // 🖱️ Mouse wheel for horizontal scrolling
    const handleWheel = (e) => {
      if (topBarElement) {
        if (e.deltaY !== 0) {
          topBarElement.scrollLeft += e.deltaY; // Scroll horizontally
          e.preventDefault(); // Prevent page scroll
        }
      }
    };

    // Enable smooth scrolling on touch devices
    topBarElement.style.scrollBehavior = "smooth";

    // Add event listener
    topBarElement.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      topBarElement.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={topBarRef}
      style={{
        width: "100%",
        overflowX: "auto",
        whiteSpace: "nowrap",
        scrollbarWidth: "none", // Hide scrollbar for Firefox
        msOverflowStyle: "none", // Hide scrollbar for IE & Edge
        WebkitOverflowScrolling: "touch", // Smooth scrolling for iOS
        touchAction: "pan-x", // Allow horizontal scrolling
     
      }}
    >
      <ul  className="list-unstyled d-flex mb-0"
        style={{

          display: "flex",
          gap: "10px",
          padding: "10px",
          margin: "0",
          listStyle: "none",
        }}
      >
        {items.map((item, index) => (
          <li
                      className={`text-center mx-3 ${activeItem === item.content ? "text-primary" : "text-secondary"}`}

            key={index}
            style={{
              cursor: "pointer",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={() => setActive(item.content)}
          >
            <img
              src={item.icon}
              alt={item.text}
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
            <span style={{ marginTop: "5px" }}>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopBar;
