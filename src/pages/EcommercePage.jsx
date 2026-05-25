import React from 'react'
import { Link } from 'react-router-dom'
function EcommercePage() {

  return (

    <section className="placeholder-page">

      <div className="container text-center">

        <h1>E-commerce Website Project</h1>

        <p>
          This project will be developed later in the semester.
        </p>
         <Link
          to="/"
          className="project-btn mt-4"
        >
          Back to Home
        </Link>

      </div>

    </section>
  )
}

export default EcommercePage