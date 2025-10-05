export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3">
      <div className="container px-5 d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
          <span className="fw-bolder text-gradient">Phutanes Trisiri</span>
        </a>
        <div className="navbar-nav">
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#projects">Projects</a>
          {/* <a className="nav-link" href="#contact">Contact</a> */}
        </div>
      </div>
    </nav>
  )
}
