import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <header>
        <img src="no-bg.png" alt="" />
        <h1>João Vitor Lunardi<span>.</span></h1>
            <p>Desenvolvedor web</p>
      </header>
      <section className="botoes-links">
            <a href="https://lunardi.vercel.app" target="_blank" className="link">
                <button>
                    <span>Portfólio</span>
                    <i class="bi bi-code-square"></i>
                </button>
            </a>
            <a href="https://www.linkedin.com/in/jv-lunardi/" target="_blank" className="link">
                <button>
                    <span>Linkedin</span>
                    <i class="bi bi-linkedin"></i>
                </button>
            </a>
            <a href="https://github.com/JawnLunardi" target="_blank" className="link">
                <button>
                    <span>Github</span>
                    <i class="bi bi-github"></i>
                </button>
            </a>
            <a href="https://lunardi.vercel.app/joaolunardi_cv.pdf" target="_blank" className="link">
                <button>
                    <span>Curriculum Vitae</span>
                    <i class="bi bi-download"></i>
                </button>
            </a>
        </section>
        <footer>
            <a href="mailto:joaovitorlm@gmail.com" target="_blank" className="btn-footer"><i class="bi bi-envelope"></i></a>
            <a href="https://wa.me/5524998172656" target="_blank" className="btn-footer"><i class="bi bi-whatsapp"></i></a>
            <a href="https://www.instagram.com/jv_lunardi/" target="_blank" className="btn-footer"><i class="bi bi-instagram"></i></a>
        </footer>

    </div>
  )
}

export default App
