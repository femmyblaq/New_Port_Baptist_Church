import React, { useState } from 'react';
import dayjs from 'dayjs';
import CalendarHeader from './CalenderHeader';
import DayCell from './DayCell';
import { events as defaultEvents } from '../data.js';

export default function Calendar() {
  const today = dayjs();
  const [selectedMonth, setSelectedMonth] = useState(7); // August
  const [selectedYear, setSelectedYear] = useState(2025);
  const [animationClass, setAnimationClass] = useState('');
  const [events, setEvents] = useState({ ...defaultEvents });

  const currentDate = dayjs(`${selectedYear}-${selectedMonth + 1}-01`);
  const startDay = currentDate.startOf('month').startOf('week');
  const endDay = currentDate.endOf('month').endOf('week');

  const calendarDays = [];
  let day = startDay;

  while (day.isBefore(endDay)) {
    calendarDays.push(day);
    day = day.add(1, 'day');
  }

  // Animation logic
  const handleMonthChange = (newMonth) => {
    setAnimationClass('fade-out');
    setTimeout(() => {
      setSelectedMonth(newMonth);
      setAnimationClass('fade-in');
    }, 300);
  };

  const handleYearChange = (newYear) => {
    setAnimationClass('fade-out');
    setTimeout(() => {
      setSelectedYear(newYear);
      setAnimationClass('fade-in');
    }, 300);
  };

  return (
    <div className="container py-5">
      <CalendarHeader
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        onMonthChange={handleMonthChange}
        onYearChange={handleYearChange}
      />

      <div className="row text-center bg-dark text-white fw-bold py-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div className="col border" key={d}>{d}</div>
        ))}
      </div>

      <div className={`row flex-wrap calendar-body ${animationClass}`}>
        {calendarDays.map((day, index) => {
          const key = day.format('YYYY-MM-DD');
          return (
            <DayCell 
              key={index} 
              day={day} 
              isCurrentMonth={day.month() === selectedMonth}
              isToday={day.isSame(today, 'day')}
              events={events[key] || []}
              onAddEvent={(eventText) => {
                const updatedEvents = { ...events };
                updatedEvents[key] = [...(updatedEvents[key] || []), eventText];
                setEvents(updatedEvents);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}