import { useEffect, useState } from "react";
import { events } from "../data.js";

function getNextEvent(events) {
  const now = new Date();

  return Object.entries(events)
    .map(([dateStr, titles]) => {
      const normalized = dateStr
        .split("-")
        .map(p => p.padStart(2, "0"))
        .join("-");

      return {
        date: new Date(`${normalized}T00:00:00`),
        titles
      };
    })
    .filter(e => e.date >= now)
    .sort((a, b) => a.date - b.date)[0];
}

export default function EventCountdown() {
  const [event, setEvent] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    setEvent(getNextEvent(events));
  }, []);

  useEffect(() => {
    if (!event) return;

    const timer = setInterval(() => {
      const diff = event.date - new Date();

      if (diff <= 0) {
        setEvent(getNextEvent(events));
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(diff / (1000 * 60 * 60)) % 24,
        minutes: Math.floor(diff / (1000 * 60)) % 60,
        seconds: Math.floor(diff / 1000) % 60
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [event]);

  if (!event || !timeLeft) return null;

  return (
    <div className="my-5 py-5">
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-12">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4 p-md-5 text-center">

              <span className="badge bg-primary mb-3 px-3 py-2">
                Upcoming Event
              </span>

              <h2 className="fw-bold mb-2" style={{textWrap: "wrap"}}>
                {event.titles.join(" / ")}
              </h2>

              <p className="text-muted mb-4">
                {event.date.toDateString()}
              </p>

              <div className="row g-3 justify-content-center">
                <CountdownBox label="Days" value={timeLeft.days} />
                <CountdownBox label="Hours" value={timeLeft.hours} />
                <CountdownBox label="Minutes" value={timeLeft.minutes} />
                <CountdownBox label="Seconds" value={timeLeft.seconds} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

function CountdownBox({ label, value }) {
  return (
    <div className="col-6 col-sm-3 my-4">
      <div className="bg-dark text-white rounded-3 py-3 shadow-sm">
        <div className="fs-2 fw-bold">{value}</div>
        <div className="small text-uppercase text-secondary">
          {label}
        </div>
      </div>
    </div>
  );
}
