import profile from '../assets/profile_img.png'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Hero(){
    return (

    <section className="hero-section py-5">

        <div classname= "container">

        <div className="row align-items-center hero-layout">

        {/* Left Column: Profile Image */}

        <div className="col-md-5">
          <img src={profile} alt="Profile" className="img-fluid rounded-circle shadow-lg profile-image" style={{ maxWidth: '300px' }} />
        </div>

        {/* Right Column: Introduction and Call to Action */}

        <div className="col-md-7 hero-content">

          <p className="hero-intro">
            Hello, I’m 
          </p>

          <h1 className="hero-title">
            Mukhveer
          </h1>

          <h3 className="hero-subtitle">
            Computer Science Student |
            Aspiring Software Engineer
          </h3>

          <p className="hero-description">
            I build clean, responsive, secure and user-friendly web applications. Currently exploring React, UI/UX Design and modern web development practices.
          </p>

          <p className="hero-description">
            
          </p>

          {/* Call to Action Buttons */}
          <div className="hero-buttons d-flex gap-3 mt-4 justify-content-center">

          <a href="#projects" className="btn hero-btn-primary"> View My Work </a>
          <a href="mailto:mmukh079@uottawa.ca" className="btn hero-btn-secondary"> Contact Me </a>
          
          </div>

          {/* Social Media Icons */}
          <div className="social-icons d-flex gap-3 mt-4 justify-content-center">
            <a href="https://github.com/kaurmukhveer" className="text-decoration-none">
              Github <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mukhveerkaur/" className="text-decoration-none">
              Linkedin <FaLinkedin size={24} />
            </a>
            <a href="mailto:mmukh079@uottawa.ca" className="text-decoration-none">
              Email<FaEnvelope size={24} />
            </a>
          </div>

          </div>
        </div>
    </div>
    </section>    
    )
}


export default Hero