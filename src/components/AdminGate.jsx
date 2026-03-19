import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const AdminGate = ({ children }) => {
  const [show, setShow] = useState(true);
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState("");

 const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;
const ENABLE_GATE = import.meta.env.VITE_ENABLE_ADMIN_GATE === "true";

  // Skip gate completely if disabled
  useEffect(() => {
    if (!ENABLE_GATE) {
      setAuthorized(true);
      setShow(false);
      return;
    }

    const isAuth = sessionStorage.getItem("adminAuth");
    if (isAuth === "true") {
      setAuthorized(true);
      setShow(false);
    }
  }, [ENABLE_GATE]);

  const handleSubmit = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthorized(true);
      setShow(false);
      sessionStorage.setItem("adminAuth", "true");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <>
      {/* Modal */}
      {show && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Admin Access</h5>
              </div>
              <div className="modal-body">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                  <small className="text-danger">{error}</small>
                )}
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Protected Content */}
      {authorized ? children : !show && <h2>Access Denied</h2>}
    </>
  );
};

export default AdminGate;