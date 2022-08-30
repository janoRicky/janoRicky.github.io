import React from 'react'


export default function Contact() {
  return (
    <div className="container-fluid contact">

      <div className="row justify-content-center pb-4">
        <div className="col-12 label">
          <div className="row">
            <div className="col">
              <hr className="label-title-hr" />
            </div>
            <div className="col-auto">
              <h2 className="label-title">
                CONTACT
              </h2>
            </div>
            <div className="col">
              <hr className="label-title-hr" />
            </div>
          </div>
        </div>
      </div>

      {/*==============================================================*/}
      <div className="row justify-content-center contact-row">
        <div className="col-12 label">
          <div className="row">
            <div className="col">
              <hr className="label-hr" />
            </div>
            <div className="col-auto color-3">
              <a className="contact-link">
                <i className="bi bi-envelope" /> janorickyjohn@gmail.com
              </a>
            </div>
            <div className="col">
              <hr className="label-hr" />
            </div>
          </div>
        </div>
      </div>
      {/*==============================================================*/}

      {/*==============================================================*/}
      <div className="row justify-content-center contact-row">
        <div className="col-12 label">
          <div className="row">
            <div className="col">
              <hr className="label-hr" />
            </div>
            <div className="col-auto color-3">
              <a className="contact-link" target="_blank" rel="noopener noreferrer" href="https://ph.linkedin.com/in/ricky-john-jano-088679146">
                <i className="bi bi-linkedin" /> Ricky John Jano
              </a>
            </div>
            <div className="col">
              <hr className="label-hr" />
            </div>
          </div>
        </div>
      </div>
      {/*==============================================================*/}

      {/*==============================================================*/}
      <div className="row justify-content-center contact-row">
        <div className="col-12 label">
          <div className="row">
            <div className="col">
              <hr className="label-hr" />
            </div>
            <div className="col-auto color-3">
              <a className="contact-link" target="_blank" rel="noopener noreferrer" href="https://github.com/janoRicky">
                <i className="bi bi-github" /> janoRicky
              </a>
            </div>
            <div className="col">
              <hr className="label-hr" />
            </div>
          </div>
        </div>
      </div>
      {/*==============================================================*/}
    </div>
  )
}
