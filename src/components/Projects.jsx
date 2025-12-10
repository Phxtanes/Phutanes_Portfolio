// src/components/Projects.jsx
import { Fragment } from 'react'

const PROJECTS = [
  // 1) Full-stack Final Project
  {
    id: 'p1',
    title: (
      <>
        UTCC Lost & Found System -
        <span className="thai-font"> ระบบบันทึกของหายภายในมหาวิทยาลัยหอการค้าไทย (Final Project)</span>
      </>
    ),
    desc:
      'Developed a web application for the Student Affairs Office to record and track lost items, enabling staff to log item check-in/check-out for easier management and verification. Planned integration of a student self-reporting form.',
    details: [
      'Category-based search and return history for transparency',
      'Admin dashboard for Student Affairs workflows',
      'Future student self-reporting integration',
    ],
    tech: ['React', 'Spring Boot', 'MongoDB'],
    icon: 'bi-search',
    gradient: ['#1e30f3', '#e21e80'],
    links: { github: 'https://github.com/Phxtanes/Unifind-jing', live: '' },
  },

  // 2) Government system (Impact สูง + ครบวงจร)
  {
    id: 'p3',
    title: (
      <>
        Employment report submission system -
        <span className="thai-font"> ระบบส่งรายงานการจ้างงาน (Government)</span>
      </>
    ),
    desc:
      'Software house engagement: worked under a project lead to deliver a government reporting system. Responsible for UX/UI design and frontend development in Vue.js (from register/login through internal modules) and contributed Lumen APIs. Collaborated with the lead to capture requirements and translate them into flows/screens. Implemented drag-and-drop document uploads, a guided employer registration workflow, and API-driven identity checks (13-digit ID → auto-fetch juristic info and show the establishment profile).',
    details: [
      'Worked under a project lead/PM at a software house (government client)',
      'Requirements sessions with the client alongside the lead → user flows, wireframes, hi-fi prototypes (Figma)',
      'Frontend (Vue.js): register/login, dashboard, employer profile, submission/status pages',
      'Drag-and-drop uploads with client-side checks and server-side validation; progress and duplicate handling',
      'Backend contribution (Lumen): REST APIs for uploads/metadata; persist attachments and forms to MySQL',
      'Employer verification: 13-digit lookup → auto-populate juristic number/name and display full establishment profile',
      'End-to-end employer registration workflow with clear states (draft → submitted → verified → completed)',
      'PDPA-minded fields and role-based access for sensitive actions',
    ],
    tech: ['Vue.js', 'Nuxt.js', 'Lumen (Laravel)', 'MySQL', 'Figma'],
    icon: 'bi-people',
    gradient: ['#0d6efd', '#6f42c1'],
    links: { github: '', live: '' },
  },

  // 3) Private sector (UX/UI + Frontend)
  {
    id: 'p2',
    title: (
      <>
        Gold Pawn System - 
        <span className='thai-font'> ระบบจำนำทอง (Private Sector)</span>
      </>
    ),
    desc:
      'Software house engagement for an employee-facing system used by gold shop staff. Worked under a project lead as UX/UI Designer and Frontend Developer: designed end-to-end flows (register/login, dashboard, customer profile, pawn deposit/withdraw, contract renewal, etc.) and implemented a subset of the frontend per assignment.',
    details: [
      'UX/UI design for: register/login, dashboard, customer profile, pawn deposit/withdraw, contract renewal, and more',
      'Frontend implemented (assigned screens): register/login, dashboard, customer profile',
      'Frontend implemented (assigned screens): pawn deposit/withdraw, identity verification photo capture (KYC), pawn history',
      'Component-based UI for reusability and consistent patterns',
      'Real-time validation for smoother form input and clearer errors',
      'Clear user flows tailored to gold-pawn operations',
    ],
    tech: ['Vue.js', 'Figma'],
    icon: 'bi-cash-stack',
    gradient: ['#198754', '#20c997'],
    links: { github: '', live: '' },
  },

  // 4) Frontend-only e-payment
  {
    id: 'p4',
    title: (
      <>
        Frontend Developer E-Payment System - 
        <span className='thai-font'> ระบบชำระเงินออนไลน์</span>
      </>
    ),
    desc:
      'Frontend-only scope: designed the UX/UI and built the Vue.js frontend that consumes Lumen APIs for onboarding and e-payments. Focused on layouts, reusable components, and visual theme to meet client requirements.',
    details: [
      'Frontend-only implementation integrated with Lumen APIs (no backend work)',
      'End-to-end registration/onboarding flow with step-by-step forms',
      'Dynamic transaction history table with search, filters, and sorting',
      'Theme customization per requirements: colors, spacing, typography',
      'UX/UI polish: inline errors, loading/empty states, confirmation & success toasts',
      'Responsive layouts for desktop/tablet/mobile',
    ],
    tech: ['Vue.js'],
    icon: 'bi-credit-card',
    gradient: ['#198754', '#20c997'],
    links: { github: '', live: '' },
  },

  // 5) Mock BI / Data-leaning
  {
    id: 'p5',
    title: (
      <>
        Dormitory/Apartment Management (Mock BI) - 
        <span className='thai-font'> ระบบจัดการหอพัก (จำลองข้อมูล BI)</span>
      </>
    ),
    desc:
    'Self-initiated, iteratively developed mock BI system for dorm/apartment operations. Not yet deployed in production; requirements are being collected and applied across iterations. Currently supports room & tenant management, leases/deposits, billing & utilities, payment tracking, and BI-style dashboards for occupancy and AR.',
    details: [
      'Room inventory & status: buildings/floors/room types, availability, move-in/out',
      'Tenant profiles: basic info, contact, emergency contacts (PDPA-minded fields)',
      'Lease & deposit management: start/end dates, extensions, deposit & refund workflow',
      'Billing & invoicing: monthly rent, service fees, configurable charges',
      'Utilities tracking: meter readings (water/electric), auto-calculated usage & costs',
      'Payments & AR: receipts logging, AR aging, overdue reminders',
      'Maintenance/housekeeping: service tickets, statuses, simple scheduling',
      'Dashboards (mock BI): occupancy rate, revenue snapshots, utilities trends',
      'Data export: CSV for finance/ops review; basic audit notes for key changes',
      'MySQL schema covers rooms, contracts, meters, invoices, payments',
    ],
    tech: ['HTML', 'Bootstrap', 'PHP', 'MySQL'],
    icon: 'bi-building',
    gradient: ['#436bb7', '#e27aa3'],
    links: {
      github: 'https://github.com/Phxtanes/Dormitory-management-system',
      live: '',
    },
  },

  // 6) Creative / Game
  {
    id: 'p6',
    title: (
      <>
        UTCC - Phobia 
        <span className='thai-font'> พัฒนาเกมส์สำหรับวิชาคอมพิวเตอร์กราฟฟิก (Horror Game)</span>
      </>
    ),
    desc:
      'Developed a 3D horror game using Unreal Engine 5 inspired by UTCC campus.',
    details: [
      'Created 3D models and textures in Unreal Engine',
      'Implemented AI enemy behavior and lighting',
      'Designed game flow and demo presentation',
    ],
    tech: ['Unreal Engine', 'Blender'],
    icon: 'bi-controller',
    gradient: ['#212529', '#495057'],
    links: { github: 'https://github.com/kritaAu/Final_Jing', live: '' },
  },
]

// ---------------- ProjectCard: แสดง Tech เป็นบรรทัดข้อความใต้ desc ----------------
function ProjectCard({ item }) {
  return (
    <div className="col-md-10">
      <div className="project-card shadow rounded-4 border-0 h-100">
        <div className="card-body p-0 d-flex align-items-center">
          <div className="p-4">
            <h2 className="fw-bolder">{item.title}</h2>
            <p>{item.desc}</p>

            {item.tech?.length > 0 && (
              <p className="text-muted small m-0">
                <strong>Tech:</strong> {item.tech.join(', ')}
              </p>
            )}

            {item.details && (
              <ul className="project-details text-muted small mt-2">
                {item.details.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            )}

            <div className="project-actions mt-3">
              {item.links.github && (
                <a
                  href={item.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'brightness(1.08)';
                    e.currentTarget.style.boxShadow = '0 10px 26px rgba(0,0,0,.18)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'none';
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,.12)';
                  }}
                  style={{
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '.5rem',
                    background: '#111',
                    color: '#fff',
                    border: 0,
                    borderRadius: '.75rem',
                    padding: '.65rem 1.05rem',
                    letterSpacing: '.2px',
                    boxShadow: '0 6px 18px rgba(0,0,0,.12)',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease', 
                  }}
                >
                  <i className="bi bi-github" style={{ fontSize: '1.1rem' }} /> View on GitHub
                </a>

              )}
              {item.links.live && (
                <a
                  href={item.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-live ms-2"
                >
                  <i className="bi bi-box-arrow-up-right" /> Live
                </a>
              )}
            </div>
          </div>

          <div className="px-3" />
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container-fluid px-5 mb-5"> 
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Projects & Experience</span>
          </h1>
        </div>

        <div className="row gx-5 gy-5 justify-content-center">
          {PROJECTS.map((item, idx) => (
            <Fragment key={item.id}>
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
