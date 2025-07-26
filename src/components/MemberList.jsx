import React from 'react';
import './MemberList.css';
import pastor1 from '../assets/Pastors Images/pastor1.jpg';
import pastor2 from '../assets/Pastors Images/pastor2.jpg';
import pastor3 from '../assets/Pastors Images/pastor3.jpg';
import pastor4 from '../assets/Pastors Images/pastor4.jpg';
import pastor5 from '../assets/Pastors Images/pastor5.jpg';
import pastor6 from '../assets/Pastors Images/pastor6.jpg';
import pastor7 from '../assets/Pastors Images/pastor7.jpg';
import pastor8 from '../assets/Pastors Images/pastor8.jpg';

const members = [
  { id: 1, name: 'John Smith', position: 'Usher', img: pastor1 },
  { id: 2, name: 'Mary Johnson', position: 'Choir Leader', img: pastor8 },
  { id: 4, name: 'Pastor Daniel', position: 'Head of Pastors', img: pastor4 }, // Giant one
  { id: 3, name: 'David Brown', position: 'Prayer Coordinator', img: pastor3 },
  { id: 5, name: 'Sarah Davis', position: 'Children Ministry', img: pastor5 },
  { id: 6, name: 'James Wilson', position: 'Technical Team', img: pastor6 },
  { id: 7, name: 'James Wilson', position: 'Technical Team', img: pastor7 },
  { id: 8, name: 'James Wilson', position: 'Technical Team', img: pastor6 },
  { id: 9, name: 'Linda Martinez', position: 'Greeter', img: pastor3 }
];

const MemberList = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-end text-center">
        {members.map((member, index) => {
          const isHead = member.position === 'Head of Pastors';
          return (
            <div
              key={member.id}
              className={`mb-4 col-lg-2 ${isHead ? 'col-md-4 col-lg-4' : 'col-6 col-md-1'}`}
            >
              <div className={`card h-100 border-${isHead ? 'primary' : 'secondary'} shadow`}>
                <img
                  src={member.img}
                  alt={member.name}
                  className={`rounded-circle mx-auto d-block mt-3 ${isHead ? 'giant-img' : 'member-img'}`}
                />
                <div className="card-body p-2">
                  <h6 className="card-title mb-1">{member.name}</h6>
                  <p className="card-text text-muted mb-0" style={{ fontSize: isHead ? '1rem' : '0.8rem' }}>
                    {member.position}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MemberList;