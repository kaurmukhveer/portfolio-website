function About() {
    return (
        <section id="about" className = "about-section">
            <div className="about-header text-center">
                <h2 className="about-title">About Me</h2>
                <p className="about-subtitle">Curious, collaborative, and driven to solve meaningful problems.</p>
            </div>

        {/* Two Column Layout: Growth Mindset vs Learning Approach */}   
        <div className="row g-5 about-content">

          {/* Left Column: Who I Am */}
            <div className="col-lg-6">
              <div className="about-content">
                <h3>My Approach to Learning</h3>
                <p>I’m driven by curiosity and a growing interest in both frontend and backend development. Through React and UI/UX design, I enjoy building clean, user-focused digital experiences while learning how modern web applications are designed and developed.</p>

                <p>
                    My exposure to enterprise IT environments and technical problem-solving has strengthened my adaptability, critical thinking, and practical approach to learning.</p>
              </div>
            </div>


          {/* Right Column: How I Learn & Work */}
          <div className="col-lg-6">
            <div className = "work-section">
            <h3 className="work-section-title">How I Work & Adapt</h3>
            
            <div className="work-cards">

              {/* Point 1: Pre-planning */}
              <div className="work-card">
              
                  <div className="work-card-content">
                    <span className="work-badge badge-blue">01</span>
                    <div>
                      <h5>Pre-planning & Task Focus</h5>
                      <p>I prefer to understand the problem scope and prioritize tasks before rushing into code, helping me approach challenges logically and efficiently.</p>
                    </div>
                  </div>
                
              </div>

              {/* Point 2: Team Collaboration */}
              <div className="work-card">
               
                  <div className="work-card-content">
                    <span className="work-badge badge-green">02</span>
                    <div>
                      <h5>Learning From Others</h5>
                      <p>I value collaborative environments that encourage constructive feedback, shared learning, and continuous improvement.</p>
                    </div>
                  </div>
                
              </div>

              {/* Point 3: Accountability */}
              <div className="work-card">
                
                  <div className="work-card-content">
                    <span className="work-badge badge-dark">03</span>
                    <div>
                      <h5>Responsibility & Adaptability</h5>
                      <p>I take ownership of my work, stay accountable to deadlines, and adapt quickly when priorities or project requirements change.</p>
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