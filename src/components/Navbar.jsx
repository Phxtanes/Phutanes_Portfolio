import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ปิดเมนูเมื่อเปลี่ยนขนาดจอหรือคลิกลิงก์
  useEffect(() => {
    const onResize = () => setOpen(false);
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    /* { href: "#contact", label: "Contact" }, */
  ];

  const handleLinkClick = (e, href) => {
    // smooth scroll ในหน้าเดียว
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setOpen(false);
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light py-3 custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container px-4 px-md-5 d-flex justify-content-between align-items-center">
        {/* Brand */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#top" onClick={(e)=>handleLinkClick(e,"#top")}>
          <span className="fw-bolder text-gradient">Phutanes Trisiri</span>
        </a>

        {/* Hamburger */}
        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* ไอคอน hamburger/close แบบ SVG */}
          <svg className={`hamburger ${open ? "is-open" : ""}`} width="28" height="28" viewBox="0 0 24 24" role="img">
            <path className="line line1" d="M3 6h18" />
            <path className="line line2" d="M3 12h18" />
            <path className="line line3" d="M3 18h18" />
          </svg>
        </button>

        {/* Links */}
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navItems.map((item) => (
              <li className="nav-item" key={item.href}>
                <a
                  className="nav-link px-lg-3"
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
