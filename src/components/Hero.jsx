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
              <div className="fs-3 fw-light text-muted">Hi, I'm Phutanes Trisiri</div>
              <h1 className="display-3 fw-bolder mb-5">
                <span className="text-gradient d-inline">Computer Science Student & Developer</span>
              </h1>

              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
              <a
                className="btn btn-primary btn-lg px-5 py-3 fw-bolder"
                href="/assets/Phutanes Trisiri - Resume.pdf"
                download="Phutanes Trisiri - Resume.pdf"
              >
                <i className="bi bi-download me-2 pr-2" style={{ paddingRight: 10 }}></i>
                Download Resume
              </a>

                {/* เปลี่ยนเป็นปุ่มและเรียก modal */}
                {/* <button
                  type="button"
                  className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                  onClick={() => setShowContact(true)}
                >
                  Contact Me <i className="bi bi-arrow-right-short ms-2"></i>
                </button> */}
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
