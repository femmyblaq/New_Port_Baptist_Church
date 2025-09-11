
import tithe from '../assets/donationIcon/tithe.png'
import projects from '../assets/donationIcon/project.png'
import dollar from '../assets/donationIcon/dollar.png'
import pounds from '../assets/donationIcon/pound.png'
import mission from '../assets/donationIcon/mission.png'
import empowerment from '../assets/donationIcon/emp.png'
const accounts = [
  {
    id: 1,
    accountName: "First Bank",
    accountNumber: "2023929254",
    purpose: "TITHE & OFFERING",
    img: tithe,
  },
  {
    id: 2,
    accountName: "Sterling Bank",
    accountNumber: "0022497463",
    purpose: "PROJECTS/TITHES & OFFERING",
    img: projects,
  },
  {
    id: 3,
    accountName: "Sterling Bank",
    accountNumber: "0071567298",
    purpose: "MISSION OFFERING",
    img: mission,
  },
  {
    id: 4,
    accountName: "Sterling Bank",
    accountNumber: "0026100589",
    purpose: "DOLLAR ACCOUNT",
    img: dollar
  },
  {
    id: 5,
    accountName: "Sterling Bank",
    accountNumber: "0026100800",
    purpose: "POUNDS ACCOUNT",
    img: pounds,
  },
  {
    id: 6,
    accountName: "Sterling Bank",
    accountNumber: "0070486491",
    purpose: "EMPOWERMENT",
    img: empowerment,
  },
];
const style = {
  img: {
    width: '40px',
    height: '40px',
  }
}
export default function Donation() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Account Details</h2>
      <div className="row">
        {accounts.map((account) => (
          <div key={account.id} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">

                    <h5 className="card-title">{account.accountName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {account.accountNumber}
                    </h6>
                  </div>
                  <div className="col-6 text-end">
                    <img src={account.img} style={style.img} alt={account.purpose}  className="img-fluid" />
                  </div>
                </div>
                <p className="card-text">
                  <strong>Purpose:</strong> {account.purpose}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
