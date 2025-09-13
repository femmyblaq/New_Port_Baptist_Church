import React from 'react';
import './MemberList.css';
import pastor1 from '../assets/Pastors Images/mustapha.jpeg';
// import pastor2 from '../assets/Pastors Images/pastor2.jpg';
// import pastor3 from '../assets/Pastors Images/pastor3.jpg';
import pastor4 from '../assets/Pastors Images/revadeshina.jpg';
import pastor5 from '../assets/Pastors Images/gbubemi.jpg';
import pastor6 from '../assets/Pastors Images/gbenga.jpeg';
// import pastor7 from '../assets/Pastors Images/pastor7.jpg';
import pastor8 from '../assets/Pastors Images/isaac.jpeg';

const members = [
  { id: 1, name: 'Samuel Mustapha', position: 'Prayer', img: pastor1 },
  { id: 2, name: 'Isaac Ipadeola', position: 'Choir Leader', img: pastor8 },
  { id: 4, name: 'Adesina Abegunde', position: 'Head of Pastors', img: pastor4 }, // Giant one
  { id: 3, name: 'Samson Isola', position: 'Secretariat', img: pastor1 },
  { id: 6, name: 'Gbubemi', position: 'Finance', img: pastor5 },
  // { id: 5, name: 'Erica Okorodudu', position: 'Children Ministry', img: pastor5 },
  { id: 8, name: 'Oyetunji Gbenga', position: 'Living Streams', img: pastor6 },
  { id: 9, name: 'Sunday Ayandiran', position: 'Youth', img: pastor8 },
  { id: 10, name: 'Korede Alamu', position: 'Evangelism', img: pastor1 },
  { id: 11, name: 'Mary Oyeniyi', position: 'Security', img: pastor4 }
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
              <div className={`card h-100 border-${isHead ? 'primary' : 'secondary'}  shadow`} style={{ width: isHead ? '100%' : '145px' }}>
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