// src/components/Programs.js
import React from 'react';
import '../components/Program.css'; // optional for styling

const programs = [
  {
    image: '/images/vocations.jpg',
    label: 'Education',
    title: 'Vocations Support',
    description: 'Support the training and formation of future priests, religious sisters, and brothers...',
  },
  {
    image: '/images/church.jpg',
    label: 'Emergency',
    title: 'Church Renovation Fund',
    description: 'Raise money for the renovation and maintenance of Catholic churches...',
  },
  {
    image: '/images/crisis.jpg',
    label: 'Emergency',
    title: 'Crisis Relief Fund',
    description: 'Provide emergency relief and support to communities affected by disasters...',
  },
  {
    image: '/images/justice.jpg',
    label: 'Healthcare',
    title: 'Social Justice Initiatives',
    description: 'Raise funds for Catholic organizations that work to promote social justice...',
  },
];

function Programs() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-3">Programs And Initiatives</h2>
      <p className="text-center mb-5">
        These donation campaigns can help support important Catholic causes and initiatives,
        allowing people to contribute to the Church's mission and work.
      </p>

      <div className="row">
        {programs.map((program, index) => (
          <div className="col-md-6 col-lg-3 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={program.image} className="card-img-top" alt={program.title} />
              <div className="card-body">
                <span className="badge bg-light text-dark border mb-2">{program.label}</span>
                <h5 className="card-title">{program.title}</h5>
                <p className="card-text">{program.description}</p>
                <a href="#" className="text-success text-decoration-none">View more →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;