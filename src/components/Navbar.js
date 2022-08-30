import React from 'react'
import {
  Link,
} from 'react-router-dom';

// <i className="bi bi-exclamation-triangle" />
export default function Navbar() {
  return (
    <>
      <div className="navbar justify-content-center justify-content-md-end">
        <div className="col-auto my-1">
          <Link className="navbar-btn" to="/">
            ABOUT ME
          </Link>
        </div>
        <div className="col-auto my-1">
          <Link className="navbar-btn" to="/skills">
            SKILLS
          </Link>
        </div>
        <div className="col-auto my-1">
          <Link className="navbar-btn" to="/">
            PROJECTS
          </Link>
        </div>
        <div className="col-auto my-1">
          <Link className="navbar-btn" to="/">
            CONTACT
          </Link>
        </div>
      </div>
    </>
  )
}