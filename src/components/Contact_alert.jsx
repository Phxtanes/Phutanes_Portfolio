import { useEffect, useRef } from "react";

export default function Contact_alert({ open = false, onClose }) {
  const backdropRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const onBackdropClick = (e) => {
    if (e.target === backdropRef.current) onClose?.();
  };

  const email = "phutanes.tri@gmail.com";
  const github = "https://github.com/Phxtanes";
  const subject = encodeURIComponent("Contact from Portfolio");
  const body = encodeURIComponent("สวัสดี คุณภูธเนศ,\n\nผม/ฉันติดต่อมาจาก Portfolio ครับ/ค่ะ…");

  return (
    <div
      ref={backdropRef}
      className="alert-container"
      role="dialog"
      aria-modal="true"
      onMouseDown={onBackdropClick}
    >
      <div className="alert-box contact-modal contact-modal--lg">
        {/* Head */}
        <div className="contact-head">
          <h4 className="m-0 fw-bolder">
            <span className="gradient-text">Let’s connect</span>
          </h4>
          <button className="contact-close" onClick={onClose} aria-label="Close">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Body */}
        <div className="contact-body">
          <ul className="contact-list">
            <li>
              <span className="contact-icon">
                <i className="bi bi-envelope"></i>
              </span>
              <a href={`mailto:${email}?subject=${subject}&body=${body}`}>{email}</a>
            </li>

            <li>
              <span className="contact-icon">
                <i className="bi bi-github"></i>
              </span>
              <a href={github} target="_blank" rel="noreferrer">
                github.com/Phxtanes
              </a>
            </li>
          </ul>

          {/* Actions: เหลือ Send Email + GitHub */}
          <div className="contact-actions">
            <a
              className="btn btn-primary"
              href={`mailto:${email}?subject=${subject}&body=${body}`}
            >
              <i className="bi bi-send"></i> Send Email
            </a>
            <a className="btn btn-outline-dark" href={github} target="_blank" rel="noreferrer">
              <i className="bi bi-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
