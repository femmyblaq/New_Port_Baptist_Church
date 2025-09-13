import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import locationMap from "../assets/locationMap2.jpg";

const Hfc = () => {
  const branches = [
    {
      city: "MARINE ROAD CENTRE",
      address: "96, Oscar Ibru Way (Fomerly Marine Road), G.R.A. Apapa",
        leader: "Bro. Abraham Benneth",
        contact: "08090510891",
    },
    {
      city: "CHILD AVENUE CENTRE",
      address: "24, Child Avenue, G.R.A. Apapa",
        leader: "Sis. Theresa Affi",
        contact: "07045933147",
    },
    {
      city: "LIVERPOOL CENTRE",
      address: "Block 'C', Room 12, Signal Barracks, G.R.A. Apapa",
      leader: "Bro. Sunday Ayandiran",
        contact: "07065630894",
    },
    {
      city: "AJEGUNLE CENTRE",
      address: "1A, Kojo Lane, After Arunah Street, Ajegunle",
        leader: "Bro. Sunday Ayandiran",
        contact: "08160543300",
    },
    {
      city: "OLODI APAPA CENTRE",
      address: "22, Oremeji Street, Olodi Apapa",
      leader: "Sis. Joke Ewvoro",
        contact: "07035653553",
    },
    {
      city: "MANAGER ISLAND CENTRE",
      address: "",
      leader: "Sis. Benny Adewoye",
        contact: "07037899420",
    },
    {
      city: "QUEENS BARRACK CENTRE",
      address: "Old Block '2', Queens Barracks, Off Calcuta Road, Apapa.",
      leader: "Sis. Alaere Dakoru",
        contact: "08124708385",
    },
    {
      city: "AGUDA CENTRE",
      address: "22B, Adebola Ojomu Street, beside J.S. Margaret Schools, Aguda",
      leader: "Bro. Adeyemi Adedeji",
        contact: "07032985436",
    },
    {
      city: "OKOTA CENTRE",
      address: "5, Ayo Shonubi street, Off Alli Dada Street, Ago Palace Way, Okota.",
      leader: "Bro. Isaac Ipadeola",
        contact: "07064985436",
    },
    {
      city: "NAVY BARRACK CENTRE",
      address: "Block 15C, Obisesan Navy barracks, Off Mobil Road, Apapa.",
      leader: "Sis. Chalya Garba",
        contact: "07084473722",
    },
  ];

  return (
    <div className="container my-5">
        <h2 className="text-center mb-3">HOME FELLOWSHIP CENTERS</h2>
      <div className="row g-3">
        {/* Left Side - Addresses */}
        <div className="col-md-6">
          {branches.map((branch, index) => (
            <div className="card mb-3 shadow-sm" key={index}>
              <div className="card-body">
                <h5 className="card-title">{branch.city} Branch</h5>
                <p className="card-text">{branch.address}</p>
                <p className="card-text">
                  <strong>Leader:</strong> {branch.leader}
                </p>
                <p className="card-text">
                  <strong>Contact:</strong> {branch.contact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Giant Image */}
        <div className="col-md-6 d-flex">
          <img
            src={locationMap}
            alt="Branches"
            className="img-fluid w-100 rounded shadow-sm"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hfc;
