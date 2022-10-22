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
              I am a computer science graduate with experience working as a freelance web developer. I am experienced in both front-end and back-end development as well as using different frameworks such as Laravel and CodeIgniter.
              <br /><br />
              I am passionate about my work, I am capable of working and learning independently. I enjoy finding solutions to problems and I have confidence in my ability to learn new technologies and adapt to new situations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
