import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Program.css";
import vocational from "../assets/vocational.jpg";
import church from "../assets/church.jpg";
import crisis from "../assets/crisis.jpg";
import justice from "../assets/justice.jpg";

const programs = [
  { image: vocational, title: "Vocations Support" },
  { image: church, title: "Church Renovation Fund" },
  { image: crisis, title: "Crisis Relief Fund" },
  { image: justice, title: "Social Justice Initiatives" },
  { image: vocational, title: "Youth Empowerment" },
  { image: church, title: "Mission Support" },
];

export default function Programs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(programs.length / 3));
      setProgress(0);
    }, 4000);

    const progressInterval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 2.5));
    }, 100);

    return () => {
      clearInterval(slideInterval);
      clearInterval(progressInterval);
    };
  }, []);

  // Group images into slides of 3
  const slides = [];
  for (let i = 0; i < programs.length; i += 3) {
    slides.push(programs.slice(i, i + 3));
  }

  return (
    <div className="programs-container my-5 py-4 text-center">
      <h2 className="text-primary fw-bold mb-3">Programs and Initiatives</h2>
      <p className="text-muted mb-4 w-75 mx-auto fs-5">
        These programs highlight our dedication to growth, service, and impact.
      </p>

      <div className="carousel-wrapper">
        <div
          className="d-flex transition-all"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((group, groupIndex) => (
            <div key={groupIndex} className="d-flex justify-content-center w-100">
              {group.map((program, index) => (
                <div key={index} className="program-card mx-3">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="program-img rounded-4 shadow"
                  />
                  <h5 className="mt-2 fw-semibold">{program.title}</h5>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="progress-bar-container mt-4 mx-auto">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
