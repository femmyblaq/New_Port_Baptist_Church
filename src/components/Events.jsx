// src/components/Events.js
import React from 'react';
import './Events.css';

const events = [
  {
    title: 'Virtual Bible Study Series',
    location: 'Online',
    date: 'February 22, 2024',
    sessions: [
      { time: '7:00 pm', image: '/images/genesis.jpg', title: 'Introduction and Overview of the Book of Genesis' },
      { time: '8:00 pm', image: '/images/group.jpg', title: 'Group Discussions and Reflections' },
      { time: '10:00 pm', image: '/images/genesis2.jpg', title: 'Introduction and Overview of the Book of Genesis' },
    ]
  },
  {
    title: 'Family Enrichment Program',
    location: 'Worship Center',
    date: 'March 15, 2024',
    sessions: [
      { time: '8:00 am', image: '/images/family1.jpg', title: 'Importance of the Family in the Church' },
      { time: '10:00 am', image: '/images/family2.jpg', title: 'Workshops on Family Communication' },
      { time: '3:00 pm', image: '/images/family3.jpg', title: 'Importance of the Family in the Church' },
    ]
  },
  {
    title: 'Catholic Social Teaching Seminar',
    location: 'Worship Center',
    date: 'February 19, 2024',
    sessions: [
      { time: '10:00 am', image: '/images/youth1.jpg', title: 'Importance of Youth Ministry in the Church' },
      { time: '1:00 pm', image: '/images/youth2.jpg', title: 'Sharing of Best Practices' },
      { time: '2:00 pm', image: '/images/youth3.jpg', title: 'Importance of Youth Ministry in the Church' },
    ]
  }
];

function Events() {
  return (
    <div className="container my-5">
      <p className="text-center text-success">COMING SOON</p>
      <h2 className="text-center mb-5">Upcoming Events</h2>

      <div className="row">
        {events.map((event, idx) => (
          <div className="col-md-6 col-lg-4 mb-4" key={idx}>
            <div className="card h-100 shadow-sm rounded">
              <div className="card-header d-flex justify-content-between align-items-start bg-light">
                <div>
                  <h5 className="mb-1">{event.title}</h5>
                  <small className="d-block text-muted">
                    📍 {event.location}
                  </small>
                  <small className="text-muted">📅 {event.date}</small>
                </div>
                <div className="fs-4 text-muted">➜</div>
              </div>
              <ul className="list-group list-group-flush">
                {event.sessions.map((session, i) => (
                  <li className="list-group-item d-flex align-items-start" key={i}>
                    <div className="me-3 text-nowrap" style={{ minWidth: '60px' }}>{session.time}</div>
                    <img src={session.image} alt="" style={{ width: '40px', height: '40px', borderRadius: '6px', objectFit: 'cover' }} className="me-2" />
                    <div>{session.title}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;