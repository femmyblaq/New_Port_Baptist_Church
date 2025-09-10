import React from 'react'
const accounts = [
  {
    id: 1,
    accountName: "First Bank",
    accountNumber: "2023929254",
    purpose: "TITHE & OFFERING",
  },
  {
    id: 2,
    accountName: "Sterling Bank",
    accountNumber: "0022497463",
    purpose: "PROJECTS/TITHES & OFFERING",
  },
  {
    id: 3,
    accountName: "Sterling Bank",
    accountNumber: "0071567298",
    purpose: "MISSION OFFERING",
  },
  {
    id: 4,
    accountName: "Sterling Bank",
    accountNumber: "0026100589",
    purpose: "DOLLAR ACCOUNT",
  },
  {
    id: 5,
    accountName: "Sterling Bank",
    accountNumber: "0026100800",
    purpose: "POUNDS ACCOUNT",
  },
  {
    id: 6,
    accountName: "Sterling Bank",
    accountNumber: "0070486491",
    purpose: "EMPOWERMENT",
  },
];
export default function Donation() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Account Details</h2>
      <div className="row">
        {accounts.map((account) => (
          <div key={account.id} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{account.accountName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {account.accountNumber}
                </h6>
                <p className="card-text">
                  <strong>Balance:</strong> {account.balance}
                </p>
                <p className="card-text">
                  <strong>Purpose:</strong> {account.purpose}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )}
