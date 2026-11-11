import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const EMAIL = 'nijjarmukhveer@gmail.com'

function Footer(){
    const [copied, setCopied] = useState(false)

    function copyEmail(){
        navigator.clipboard.writeText(EMAIL).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
    }

    return (
    <footer id="contact" className="py-5 mt-5 border-top">
        <div className="container text-center">

            <h2 className="mb-3">Contact</h2>
            <p className="mb-4">
                I’m looking for entry-level roles in software development, QA / test automation and technical systems.
                The best way to reach me is email or LinkedIn.
            </p>

            <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center mb-4">
                <span className="fw-semibold">{EMAIL}</span>
                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={copyEmail}>
                    {copied ? 'Copied' : 'Copy email'}
                </button>
            </div>

            <div className="d-flex gap-4 justify-content-center mb-4">
                <a href={`mailto:${EMAIL}`} className="text-decoration-none">
                    <FaEnvelope size={22} /> Email
                </a>
                <a href="https://www.linkedin.com/in/mukhveerkaur/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <FaLinkedin size={22} /> LinkedIn
                </a>
                <a href="https://github.com/kaurmukhveer" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <FaGithub size={22} /> GitHub
                </a>
            </div>

            <p className="mb-1">
                Main portfolio (backend, testing and CI projects):{' '}
                <a href="https://kaurmukhveer.github.io/mukhveer-kaur-portfolio/" target="_blank" rel="noopener noreferrer">
                    kaurmukhveer.github.io/mukhveer-kaur-portfolio
                </a>
            </p>
            <p className="text-muted small mb-0">© 2026 Mukhveer Kaur · Ottawa, Canada</p>

        </div>
    </footer>
    )
}

export default Footer
