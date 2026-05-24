function About() {
    return (
        <section id="about" className = "container text-center mt-5">
            <div className="container">
                <h2 className="fw-bold mb-4">About Me</h2>
                <p className="text-muted fs-5">Computer Science Student | Aspiring Software Engineer</p>
            </div>

        {/* Two Column Layout: Growth Mindset vs Learning Approach */}   
        <div className="row g-5 align-items-stretch mt-4">

          {/* Left Column: Who I Am */}
            <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h3 className="fw-bold mb-4">My Approach to Learning</h3>
                <p className="text-muted leading-relaxed">I am a Computer Science Student, driven by curiosity and committed to 
                    continuous growth. While my long-term curiosity is to understand working of
                    <strong> backend systems</strong> and applications, I am currently building my 
                    skills in frontend development using React and Bootstrap.</p>

                <p className="text-muted leading-relaxed">
                    I am an adaptable learner who enjoys the process of picking up new technologies. I thrive in team environments where I can collaborate on collective plans, take on personal responsibility for my tasks, and actively learn from the perspectives and skills of my peers.
                </p>
            </div>


          {/* Right Column: How I Learn & Work */}
          <div className="col-lg-6">
            <h3 className="fw-bold mb-4 text-primary">How I Work & Adapt</h3>
            
            <div className="row g-3">
              {/* Point 1: Pre-planning */}
              <div className="col-12">
                <div className="card p-3 border-0 shadow-sm">
                  <div className="d-flex gap-3 align-items-start">
                    <span className="badge bg-primary p-2 fs-6">01</span>
                    <div>
                      <h5 className="fw-bold mb-1">Pre-planning & Task Focus</h5>
                      <p className="text-muted mb-0 small">I prefer to understand the problem scope and prioritize tasks before rushing into code, helping me break down new academic challenges logically into manageable steps.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Point 2: Team Collaboration */}
              <div className="col-12">
                <div className="card p-3 border-0 shadow-sm">
                  <div className="d-flex gap-3 align-items-start">
                    <span className="badge bg-success p-2 fs-6">02</span>
                    <div>
                      <h5 className="fw-bold mb-1">Learning From Others</h5>
                      <p className="text-muted mb-0 small">I value collaborative group settings because they offer a shared environment to exchange constructive feedback and grow together.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Point 3: Accountability */}
              <div className="col-12">
                <div className="card p-3 border-0 shadow-sm">
                  <div className="d-flex gap-3 align-items-start">
                    <span className="badge bg-dark p-2 fs-6">03</span>
                    <div>
                      <h5 className="fw-bold mb-1">Responsibility & Adaptability</h5>
                      <p className="text-muted mb-0 small">I take ownership of my assigned work, stay accountable to deadlines, and adapt quickly when project goals pivot or require new tools.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

    
    </section>
  );
}

export default About