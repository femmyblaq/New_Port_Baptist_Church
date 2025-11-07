import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const events = {
  "2025-08-01": ["Refreshing Hour", "Lydia Vigil"],
  "2025-08-08": ["Couples Program"],
  "2025-08-10": ["EC meeting"],
  "2025-08-13": ["Annual VBS"],
  "2025-08-14": ["Annual VBS"],
  "2025-08-28": ["WMU Camp"],
  "2025-08-29": ["WMU Camp"],
  "2025-08-30": ["WMU Camp", "Apapa City Jesus walk", "Prayer Watch"],
  "2025-08-31": ["Monthly Thanksgiving", "Sensitization on Business Skills"],
  "2025-09-01": ["Refreshing Hour"],
  "2025-09-05": ["Lydia Vigil"],
  "2025-09-06": ["Men Annual Retreat"],
  "2025-09-07": ["Communion Sunday", "GA Week"],
  "2025-09-13": ["Health Retreat"],
  "2025-09-14": ["EC meeting"],
  "2025-09-27": ["Prison Outreach"],
  "2025-09-28": ["African Praise", "Monthly Thanksgiving"],
  "2025-09-29": ["Prayer Watch"],
  "2025-09-30": ["Prayer Watch"],
  "2025-10-01": ["Refreshing Hour"],
  "2025-10-03": ["Lydia Vigil"],
  "2025-10-04": ["Utility Strategy Session"],
  "2025-10-05": ["National Day Service"],
  "2025-10-12": ["EC meeting"],
  "2025-10-18": ["Motherless/Disability Home Visit"],
  "2025-10-25": ["Global Leadership Summit"],
  "2025-10-26": ["Monthly Thanksgiving"],
  "2025-10-30": ["Prayer Watch"],
  "2025-10-31": ["Prayer Watch"],
  "2025-11-01": ["Refreshing Hour"],
  "2025-11-02": ["Communion Sunday"],
  "2025-11-05": ["Global Leadership Summit Next Gen"],
  "2025-11-07": ["Apapa Worship 5.0"],
  "2025-11-09": ["EC meeting"],
  "2025-11-14": ["WMU Prayer Conference"],
  "2025-11-15": ["WMU Prayer Conference"],
  "2025-11-29": ["Health Outreach"],
  "2025-11-30": ["Prayer Watch", "Children Teachers Retreat", "Monthly Thanksgiving"],
  "2025-12-01": ["Refreshing Hour"],
  "2025-12-07": ["Annual Thanksgiving"],
  "2025-12-13": ["Common Wealth", "Couples Dinner"],
  "2025-12-14": ["Christmas Carol Children", "Christmas Carol", "EC meeting"],
  "2025-12-20": ["Visitors Parlor Retreat"],
  "2025-12-21": ["Children Christmas Party"],
  "2025-12-25": ["Christmas"],
  "2025-12-28": ["Monthly Thanksgiving"],
  "2025-12-31": ["Cross Over Service"],
};

export default function EventCarouselFade() {
  const eventEntries = Object.entries(events);
  const today = new Date().toISOString().split("T")[0];

  // Find index of today or next event
  const initialIndex =
    eventEntries.findIndex(([date]) => date >= today) !== -1
      ? eventEntries.findIndex(([date]) => date >= today)
      : 0;

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % eventEntries.length);
      setFade(false);
    }, 400);
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 1 + eventEntries.length) % eventEntries.length
      );
      setFade(false);
    }, 400);
  };

  const visibleEvents = [
    eventEntries[(currentIndex - 1 + eventEntries.length) % eventEntries.length],
    eventEntries[currentIndex],
    eventEntries[(currentIndex + 1) % eventEntries.length],
  ];

  return (
    <div className="container py-5 my-5">
      <h2 className="text-center fw-bold mb-4 text-primary">
        Upcoming Church Events
      </h2>

      <div className="position-relative d-flex justify-content-center align-items-center">
        <button
          className="btn btn-outline-primary position-absolute start-0 translate-middle-y"
          style={{ top: "50%" }}
          onClick={handlePrev}
        >
          <i class="ri-arrow-left-long-line"></i>
        </button>

        <div
          className={`d-flex justify-content-center gap-4 flex-wrap ${
            fade ? "fade-transition" : ""
          }`}
        >
          {visibleEvents.map(([date, activities], idx) => (
            <div
              key={date}
              className={`card border-0 shadow-lg text-center py-4 px-3 ${
                idx === 1 ? "active-card" : "inactive-card"
              }`}
              style={{
                width: "18rem",
                transition: "all 0.6s ease",
              }}
            >
              <h5
                className={`fw-bold mb-3 ${
                  idx === 1 ? "text-primary" : "text-secondary"
                }`}
              >
                {new Date(date).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </h5>

              <ul className="list-unstyled">
                {activities.map((event, i) => (
                  <li key={i} className="py-1">
                    <i className="bi bi-calendar-event me-2 text-primary"></i>
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button
          className="btn btn-outline-primary position-absolute end-0 translate-middle-y"
          style={{ top: "50%" }}
          onClick={handleNext}
        >
          <i class="ri-arrow-right-long-line"></i>
        </button>
      </div>

      <p className="text-center mt-5 text-muted small">
        {`Showing event ${currentIndex + 1} of ${eventEntries.length}`}
      </p>
    </div>
  );
}
