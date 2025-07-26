import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function DayCell({ day, isCurrentMonth, isToday, events, onAddEvent }) {
  const [show, setShow] = useState(false);
  const [newEvent, setNewEvent] = useState('');

  const handleAdd = () => {
    if (newEvent.trim()) {
      onAddEvent(newEvent.trim());
      setNewEvent('');
    }
  };

  return (
    <div 
      className={`col  border p-2 day-cell ${!isCurrentMonth ? 'bg-light text-muted' : ''}`} 
      style={{ minHeight: '100px', cursor: 'pointer' }} 
      onClick={() => setShow(true)}
    >
      <div className={`fw-bold ${isToday ? 'bg-primary text-white p-1 rounded-circle' : ''}`}>
        {day.date()}
      </div>
      <ul className="list-unstyled small mt-1">
        {events.map((e, i) => (
          <li key={i} className="text-muted">• {e}</li>
        ))}
      </ul>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{day.format('dddd, MMM D, YYYY')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Events:</h6>
          <ul>
            {events.length === 0 && <li className="text-white">No events</li>}
            {events.map((e, i) => (
              <li key={i}>• {e}</li>
            ))}
          </ul>
          <Form.Control 
            type="text" 
            placeholder="Add new event" 
            value={newEvent} 
            onChange={(e) => setNewEvent(e.target.value)} 
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}