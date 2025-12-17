import { useState } from "react";
import Contact_alert from "./Contact_alert";

export default function Hero() {
  const [showContact, setShowContact] = useState(false);

  return (
    <header className="hero-section">
      <div className="container px-5 h-100">
        <div className="row gx-5 align-items-center h-100">
          <div className="col-xxl-7">
            <div className="text-center text-xxl-start">
              <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                <div className="text-uppercase">Frontend · Backend · Fullstack</div>
              </div>
              <div className="fs-3 fw-light text-muted text-name" style={{ transition: 'all 0.4s ease'}}>Hi, I'm Phutanes Trisiri</div>
              <h1 className="display-3 fw-bolder mb-5">
                <span className="text-occupation text-gradient d-inline">Computer Science Student & Developer</span>
              </h1>

              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
              <a
                href={`${import.meta.env.BASE_URL}assets/Phutanes_Trisiri_Resume.pdf`}
                download="Phutanes_Trisiri_Resume.pdf"
                className="btn btn-primary btn-lg px-5 py-3 fw-bolder"
                style={{ border: "none" }}
              >
                <i className="bi bi-download me-2" style={{ paddingRight: 10 }} />
                Download Resume
              </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-5">
            <div className="d-flex justify-content-center mt-5 mt-xxl-0">
              <div className="profile bg-gradient-primary-to-secondary">
                <img src="assets/S__9773060.jpg" alt="Profile" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact_alert open={showContact} onClose={() => setShowContact(false)} />
    </header>
  );
}
