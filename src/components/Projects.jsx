// src/components/Projects.jsx
import { Fragment } from 'react'

const PROJECTS = [
  {
    title: 'UTCC Lost & Found System (Final Project)',
    desc:
      'Developed a web application for the Student Affairs Office to record and track lost items, enabling staff to log item check-in/check-out for easier management and verification. With future plans to allow students to post lost item reports directly through the system.',
    icon: 'bi-search',
    gradient: ['#1e30f3', '#e21e80'],
    links: { github: 'https://github.com/Phxtanes/Unifind-jing', live: '' },
  },
  {
    title:
      'Disability Registration System – Fund for the Promotion of Equality for Persons with Disabilities',
    desc:
      'Responsible for UX/UI design, Frontend with Vue.js, and Backend with Lumen. Implemented drag & drop uploads with validation, and a registration workflow that verifies social security numbers and employer accounts via APIs.',
    icon: 'bi-people',
    gradient: ['#0d6efd', '#6f42c1'],
    links: { github: '', live: '' },
  },
  {
    title: 'Gold Pawn System (Private Sector)',
    desc:
      'Worked as UX/UI Designer and Frontend Developer, designing and developing user interfaces with Vue.js to ensure usability and meet user requirements. Enhanced UX and created workflow designs to support system operations.',
    icon: 'bi-cash-stack',
    gradient: ['#198754', '#20c997'],
    links: { github: '', live: '' },
  },
  {
    title: 'Frontend Developer – E-Payment System',
    desc:
      'Designed UX/UI, built frontend with Vue.js and backend with Lumen. Implemented file uploads with API validation and an end-to-end registration process for account verification.',
    icon: 'bi-credit-card',
    gradient: ['#198754', '#20c997'],
    links: { github: '', live: '' },
  },
  {
    title: 'Dormitory/Apartment Management (Mock BI)',
    desc:
      'Built mock datasets and dashboards for student dorm management: occupancy, contracts, utilities, AR aging, and payment status to support decision-making and operations.',
    icon: 'bi-building',
    gradient: ['#436bb7', '#e27aa3'],
    links: {
      github: 'https://github.com/Phxtanes/Dormitory-management-system',
      live: '',
    },
  },
  {
    title: 'UTCC - Phobia (Horror Game)',
    desc:
      'Developed a 3D horror game using Unreal Engine 5, inspired by the UTCC campus environment. Designed 3D models, gameplay mechanics, and showcased the project through a YouTube demo to highlight interactive storytelling.',
    icon: 'bi-controller',
    gradient: ['#212529', '#495057'],
    links: { github: 'https://github.com/kritaAu/Final_Jing', live: '' },
  },
]

function ProjectCard({ item }) {
  return (
    <div className="col-md-6">
      <div className="card project-card shadow rounded-4 border-0 h-100">
        <div className="card-body p-0 d-flex align-items-center">
          <div className="p-4">
            <h2 className="fw-bolder">{item.title}</h2>
            <p>{item.desc}</p>

            <div className="project-actions">
              {item.links.github ? (
                <a
                  href={item.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-github"
                  aria-label="Open GitHub"
                >
                  <i className="bi bi-github" /> View on GitHub
                </a>
              ) : null}

              {item.links.live ? (
                <a
                  href={item.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-live"
                >
                  <i className="bi bi-box-arrow-up-right" /> Live
                </a>
              ) : null}
            </div>
          </div>

          <div className="px-3">
            <div
              style={{
                width: 120,
                height: 100,
                background: `linear-gradient(135deg, ${item.gradient[0]} 0%, ${item.gradient[1]} 100%)`,
                borderRadius: '.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <i className={`bi ${item.icon}`} style={{ fontSize: '2rem', color: 'white' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container px-5 mb-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Projects & Experience</span>
          </h1>
        </div>

        <div className="row gx-5 gy-5">
          {PROJECTS.map((item, idx) => (
            <Fragment key={item.title}>
              <ProjectCard item={item} />
              {idx !== PROJECTS.length - 1 && (
                <div className="col-12">
                  <div className="project-sep" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
