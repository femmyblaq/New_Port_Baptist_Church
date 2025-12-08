import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Program.css";
import vocational from "../assets/Economic_mission.jpg";
import church from "../assets/Thanksgiving.jpg";
import crisis from "../assets/R.A_week.jpg";
import pics1 from "../assets/pics1.jpg";
import pics2 from "../assets/pics2.jpg";
import th from "../assets/Thanksgiving-22.jpg";
import th1 from "../assets/Thanksgiving-1.jpg";
import th11 from "../assets/Thanksgiving11.jpg";


const programs = [
  { image: vocational, title: "Health care consultation and orientation" },
  { image: church, title: "Church Renovation Fund" },
  { image: crisis, title: "Crisis Relief Fund" },
  { image: pics1, title: "Social Justice Initiatives" },
  { image: pics2, title: "Social Justice Initiatives" },
  { image: th1, title: "Youth Empowerment" },
  { image: th11, title: "Mission Support" },
  { image: th, title: "Mission Support" },
];

export default function Programs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % programs.length);
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
            transform: `translateX(-${currentIndex * 100}vw)`,
            width: `calc(100vw * ${programs.length})`,
            "--slide-count": programs.length
          }}
        >
          {programs.map((program, index) => (
            <div key={index} className="w-100 d-flex justify-content-center">
              <div className="program-card">
                <img
                  src={program.image}
                  alt={program.title}
                  className="program-img rounded-4 shadow"
                />
                <h5 className="mt-3 fw-semibold">{program.title}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="progress-bar-container mt-4 mx-auto">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}
