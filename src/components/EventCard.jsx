import React from "react";
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
  "2025-10-04": ["Utility Stategy Session"],
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

export default function EventCards() {
  return (
    <div className="container my-4">
      <div className="row g-4">
        {Object.entries(events).map(([date, activities]) => (
          <div key={date} className="col-md-4 col-lg-3">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title text-primary fw-semibold">
                  {new Date(date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h5>
                <ul className="list-group list-group-flush mt-3">
                  {activities.map((event, idx) => (
                    <li key={idx} className="list-group-item border-0 ps-0">
                      • {event}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
