import React from 'react';
import vision from '../assets/vision.png';
import mission from '../assets/mission.png';
import value from '../assets/value2.png';
const Anthem = () => {
  return (
    <div className="container">
      <div className="row justify-content-center my-5">
        <div className="col-lg-4 text-center">
          <img src={vision} alt="" />
          <h4 className="mt-2">Vision</h4>
          <p className='fs-5'>Raising a People of Positive Influence</p>
        </div>
        <div className="col-lg-4 text-center">
          <img src={mission} alt="" />
          <h4 className="mt-2">Mission</h4>
          <p className='fs-5'>To engage, enlist and empower people to become God's agents of global transformation through divine alignment with biblical principle</p>
        </div>
        <div className="col-lg-4 text-center">
          <img src={value} alt="" />
          <h4 className="mt-2">Cores Value</h4>
          <p className='fs-5'>Holiness, Openheartedness, Thankfulness, Love, Integrity, Novelty, Excellence (H.O.T.L.I.N.E)</p>
        </div>
      </div>
    </div>
  );
};

export default Anthem;