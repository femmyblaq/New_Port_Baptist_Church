import React from 'react';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const years = Array.from({ length: 5 }, (_, i) => 2025 + i); // 2025 to 2029

export default function CalendarHeader({ selectedMonth, selectedYear, onMonthChange, onYearChange }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div className="d-flex gap-2 align-items-center">
        <select className="form-select" style={{ width: '150px' }} value={selectedMonth} onChange={e => onMonthChange(+e.target.value)}>
          {months.map((month, idx) => (
            <option key={month} value={idx}>{month}</option>
          ))}
        </select>

        <select className="form-select" style={{ width: '100px' }} value={selectedYear} onChange={e => onYearChange(+e.target.value)}>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      <h2 className="mb-0">{months[selectedMonth]} {selectedYear}</h2>
    </div>
  );
}