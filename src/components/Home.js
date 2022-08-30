import React from 'react'


export default function Home() {
  return (
    <div className="container-fluid about-me">
      <div className="row justify-content-start">
        <div className="col-auto fullname">
          <div className="col-12">
            <span className="i-am color-5">I am</span>
          </div>
          <div className="col-12">
            <span className="name color-1">Ricky John</span><span className="name color-3"> Jano</span>
          </div>
          <div className="col-12">
            <span className="title color-5">Web Developer</span>
          </div>
        </div>
        <div className="col justify-content-center">
          <div className="desc mx-4 mx-md-auto">
            <h2 className="desc-title">
              About Me
            </h2>
            <p className="desc-content">
              I am a computer science graduate with a passion to learn anything related to technology. Through my studying and experience working as a freelance web developer, I have gained significant knowledge and skills on web-based technologies.
              <br /><br />
              I enjoy finding solutions to problems and I am confident in my ability to learn new things.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
