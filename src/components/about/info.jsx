import React from 'react'

const info = () => {
  return (
    <div className="about-info grid">
      <div className="about-box">
        <i className="bx bx-award about-icon"></i>
        <h3 className="about-title">Experience</h3>
        <span className="about-subtitle">8+ Years Working</span>
      </div>
      <div className="about-box">
        <i className="bx bx-briefcase-alt about-icon"></i>
        <h3 className="about-title">Completed</h3>
        <span className="about-subtitle">12+ Projects</span>
      </div>
      <div className="about-box">
        <i className="bx bx-support about-icon"></i>
        <h3 className="about-title">Support</h3>
        <span className="about-subtitle">Online 24/7</span>
      </div>
    </div>
  )
}

export default info