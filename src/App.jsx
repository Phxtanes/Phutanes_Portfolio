import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

import "./styles.css";
import "./animations.css";

// === Effects ย้ายจาก animations.js & scripts.js มาแบบ React ===
// - smooth scroll เมื่อคลิก anchor ภายในหน้า
// - auto reveal on scroll
// - ripple effect บน .btn/.ripple
// - navbar shrink/scrolled เมื่อเลื่อนจอ
export default function App() {
  useEffect(() => {
    // smooth scroll (อ้างอิง logic เดิม) :contentReference[oaicite:9]{index=9}
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const target = document.querySelector(a.getAttribute('href'))
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.addEventListener('click', onClick)

    // reveal on scroll (ย้ายจาก animations.js) :contentReference[oaicite:10]{index=10}
    const els = new Set()
    ;['section','.card','.container > *','.row > *','h1','h2','h3','.lead','p']
      .forEach(sel => document.querySelectorAll(sel).forEach(el => els.add(el)))
    els.forEach(el => el.classList.add('reveal'))
    let io
    try {
      io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      }, { threshold: 0.15 })
      els.forEach(el => io.observe(el))
    } catch (_) {}

    // ripple (ย้ายจาก animations.js) :contentReference[oaicite:11]{index=11}
    const onRipple = (e) => {
      const btn = e.target.closest('.ripple, .btn')
      if (!btn) return
      const rect = btn.getBoundingClientRect()
      const circle = document.createElement('span')
      circle.className = 'ripple-effect'
      const size = Math.max(rect.width, rect.height)
      circle.style.width = circle.style.height = size + 'px'
      circle.style.left = (e.clientX - rect.left - size / 2) + 'px'
      circle.style.top = (e.clientY - rect.top - size / 2) + 'px'
      btn.appendChild(circle)
      setTimeout(() => circle.remove(), 700)
    }
    document.addEventListener('click', onRipple, { passive: true })

    // navbar scrolled (อ้างอิง scripts.js + animations.js) :contentReference[oaicite:12]{index=12} :contentReference[oaicite:13]{index=13}
    const nav = document.querySelector('.navbar')
    const onScroll = () => {
      const trigger = 50
      if (!nav) return
      if (window.scrollY > trigger) nav.classList.add('scrolled', 'shrink')
      else nav.classList.remove('scrolled', 'shrink')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('click', onRipple)
      window.removeEventListener('scroll', onScroll)
      io && io.disconnect()
    }
  }, [])

  return (
    <>
      <Navbar />
      <main className="flex-shrink-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
