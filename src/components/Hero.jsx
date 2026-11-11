import profile from '../assets/profile_img.png'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Hero(){
    return (

    <section className="hero-section py-5">

        <div className="container">

        <div className="row align-items-center hero-layout">

        {/* Left Column: Profile Image */}

        <div className="col-md-5">
          <img src={profile} alt="Mukhveer Kaur" className="img-fluid rounded-circle shadow-lg profile-image" style={{ maxWidth: '300px' }} />
        </div>

        {/* Right Column: Introduction and Call to Action */}

        <div className="col-md-7 hero-content">

          <p className="hero-intro">
            Hello, I’m
          </p>

          <h1 className="hero-title">
            Mukhveer Kaur
          </h1>

          <h3 className="hero-subtitle">
            Computer Science Graduate |
            Software Development &amp; QA
          </h3>

          <p className="hero-description">
            I build clean, responsive and user-friendly web applications, and I test them carefully. This site shows my React and UI/UX design work.
          </p>

          <p className="hero-description">
            For my backend, testing and CI projects, see my{' '}
            <a href="https://kaurmukhveer.github.io/mukhveer-kaur-portfolio/" target="_blank" rel="noopener noreferrer">main portfolio</a>.
          </p>

          {/* Call to Action Buttons */}
          <div className="hero-buttons d-flex gap-3 mt-4 justify-content-center">

          <a href="#projects" className="btn hero-btn-primary"> View My Work </a>
          <a href="mailto:nijjarmukhveer@gmail.com" className="btn hero-btn-secondary"> Contact Me </a>

          </div>

          {/* Social Media Icons */}
          <div className="social-icons d-flex gap-3 mt-4 justify-content-center">
            <a href="https://github.com/kaurmukhveer" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              Github <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mukhveerkaur/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              Linkedin <FaLinkedin size={24} />
            </a>
            <a href="mailto:nijjarmukhveer@gmail.com" className="text-decoration-none">
              Email <FaEnvelope size={24} />
            </a>
          </div>

          </div>
        </div>
    </div>
    </section>
    )
}


export default Hero
