export default function About() {
  return (
    <section id="about" className="bg-light py-5">
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-xxl-8">
            <div className="text-center my-5">
              <h2 className="display-5 fw-bolder">
                <span className="text-gradient d-inline">About Me</span>
              </h2>
              <p className="lead fw-light mb-4">
                Computer Science student passionate about creating user-centered digital experiences.
              </p>
              <p className="text-muted">
               I am currently a Bachelor's degree in Computer Science at the
                  University of the Thai Chamber of Commerce (UTCC) with a GPAX
                  of 3.52. During my second year, I gained real-world experience
                  in UX/UI design and frontend development through a
                  self-initiated internship with a software house company. In my
                  third year, I expanded my expertise to backend and full-stack
                  development by contributing to real-world projects for both
                  government and private sector organizations. These experiences
                  have strengthened my ability to design user-friendly
                  interfaces and develop stable, scalable web applications. I
                  have hands-on experience working with modern technologies such
                  as Vue.js, React, Node.js, and PHP.
              </p>
              <div className="d-flex justify-content-center fs-2 gap-4 mt-4">
                <a className="text-gradient" href="https://github.com/Phxtanes" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                <a className="text-gradient" href="https://mail.google.com/mail/?view=cm&fs=1&to=phutanes.tri@gmail.com" target="_blank" rel="noreferrer"><i className="bi bi-envelope"></i></a>
                {/* <a className="text-gradient" href="tel:094-418-6852"><i className="bi bi-telephone"></i></a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
