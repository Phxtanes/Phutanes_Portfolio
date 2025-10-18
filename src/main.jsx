import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// ✅ นำเข้า Bootstrap CSS ก่อน
import 'bootstrap/dist/css/bootstrap.min.css'
console.log('✅ Bootstrap loaded')
// ❗ ถ้าใช้ JavaScript ของ Bootstrap (ไม่จำเป็นในโค้ดนี้)
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// ✅ นำเข้า CSS ของคุณ (เช่นที่มี text-gradient, btn-gradient, ฯลฯ)
import './app.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)