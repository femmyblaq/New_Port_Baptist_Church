import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NpbcObjectives.css";
import NpbcImg from "../assets/NpbcObjectives.jpg";

const objectives = [
  {
    title: "Word Depth",
    text: "To raise a people who seek to know, do, and teach God’s word (Ezra 7:10).",
  },
  {
    title: "Worship Dynamism",
    text: "To provide a creative and life-transforming worship atmosphere for spiritual engagement with God in all purity (1 Cor. 1:2; 2 Tim. 2:22).",
  },
  {
    title: "Warfare Daring",
    text: "To empower spiritual warriors with divine intelligence to destroy the works of the devil (2 Cor. 2:11).",
  },
  {
    title: "Witnessing Driven",
    text: "To raise empowered witnesses who passionately share Christ with the dying world (Matt. 28:18–20).",
  },
  {
    title: "Welfare Dedication",
    text: "To build a loving community of believers committed to the wellbeing of every member (Acts 2:44–45).",
  },
  {
    title: "Winning Driven",
    text: "To train holy and excellent people equipped with kingdom success principles for expansion (1 Cor. 9:24–27; Deut. 28:13).",
  },
];

export default function NpbcObjectives() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % objectives.length);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  const visibleCards = [
    objectives[startIndex],
    objectives[(startIndex + 1) % objectives.length],
    objectives[(startIndex + 2) % objectives.length],
  ];

  return (
    <div className="container-fluid my-5 py-5 bg-light position-relative overflow-hidden">
      <div className="row align-items-center mb-5">
        {/* Left Side Image */}
        {/* <div className="col-lg-5 mb-4 mb-lg-0 text-center">
          <img
            src={NpbcImg}
            alt="Worship Session"
            className="img-fluid rounded-4 shadow-lg npbc-image"
          />
        </div> */}

        {/* Title Section */}
        <div className="col-lg-12 text-center">
          <h2 className="fw-bold text-primary">OBJECTIVES OF NPBC</h2>
          <hr className="w-25 mx-auto border-primary mb-4" />
          <p className="text-muted fs-5 w-75 mx-auto">
            Building a balanced people — deep in the Word, strong in Worship,
            fearless in Warfare, faithful in Witnessing, caring in Welfare, and
            winning in every area of life.
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="d-flex justify-content-center align-items-center gap-4 npbc-carousel">
        {visibleCards.map((obj, idx) => (
          <div
            key={idx}
            className={`card border-0 shadow-lg text-center p-4 npbc-card ${
              idx === 1 ? "active-card" : "inactive-card"
            }`}
          >
            <div className="card-body">
              <h4 className="fw-bold text-primary mb-3">{obj.title}</h4>
              <p className="text-secondary fs-6" style={{textWrap: "wrap"}}>{obj.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
