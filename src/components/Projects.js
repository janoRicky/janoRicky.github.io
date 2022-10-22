import React from 'react'
import {
  Link,
} from 'react-router-dom';


export default function Projects() {
  return (
    <div className="container-fluid projects">

      <div className="row justify-content-center pb-4">
        <div className="col-12 label">
          <div className="row">
            <div className="col">
              <hr className="label-title-hr" />
            </div>
            <div className="col-auto">
              <h2 className="label-title">
                PROJECTS
              </h2>
            </div>
            <div className="col">
              <hr className="label-title-hr" />
            </div>
          </div>
        </div>
      </div>

      {/*==============================================================*/}
      <div className="row justify-content-center mt-1 mb-5">

        <div className="col-12 col-sm-11 col-md-9 col-lg-8 mx-auto">
          <div className="project-block">

            <div className="row align-items-center">
              <div className="col-12 col-xl-auto text-center">
                <div className="row justify-content-center">
                  <div className="col">
                    <img className="project-block-img" src="/img/projects/pern-notepad-1.jpg" />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col pt-3 pb-1">
                    <a className="project-block-btn rounded-pill" target="_blank" rel="noopener noreferrer" href="https://github.com/janoRicky/pern_note_taker">
                      <i className="bi bi-github" /> REPO
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl">
                <div className="row justify-content-center my-2">
                  <div className="col project-block-head">
                    PERN Notepad
                  </div>
                </div>
                <div className="row justify-content-center my-2">
                  <div className="col project-block-desc">
                    A simple app for note taking.
                    <br />
                    Has simple CRUD functions. A simple project made as a learning introduction to the PERN stack.
                  </div>
                </div>
                <div className="row justify-content-center my-2">
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      PostgreSQL
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      Express.js
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      React.js
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      Node.js
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      {/*==============================================================*/}

      {/*==============================================================*/}
      <div className="row justify-content-center mt-1 mb-5">

        <div className="col-12 col-sm-11 col-md-9 col-lg-8 mx-auto">
          <div className="project-block">

            <div className="row align-items-center">
              <div className="col-12 col-xl-auto text-center">
                <div className="row justify-content-center">
                  <div className="col">
                    <img className="project-block-img" src="/img/projects/hermes-4.jpg" />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col pt-3 pb-1">
                    <a className="project-block-btn rounded-pill" target="_blank" rel="noopener noreferrer" href="https://github.com/janoRicky/hermes_chat">
                      <i className="bi bi-github" /> REPO
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl">
                <div className="row justify-content-center my-2">
                  <div className="col project-block-head">
                    Hermes Chat
                  </div>
                </div>
                <div className="row justify-content-center my-2">
                  <div className="col project-block-desc">
                    A simple chat app where users can request to converse with other users.
                    <br />
                    Has functions for sending messages, viewing conversations, sending invitations, user authentication, updating user details, etc.
                    <br />
                    No plugins were used in the development of this project. This project is an attempt to imitate the functions of the Code Igniter 3 PHP Framework and Bootstrap.
                  </div>
                </div>
                <div className="row justify-content-center my-2">
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      PHP
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      HTML
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      JavaScript
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      CSS
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      SQL
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      {/*==============================================================*/}

      {/*==============================================================*/}
      <div className="row justify-content-center mt-1 mb-5">

        <div className="col-12 col-sm-11 col-md-9 col-lg-8 mx-auto">
          <div className="project-block">

            <div className="row align-items-center">
              <div className="col-12 col-xl-auto text-center">
                <div className="row justify-content-center">
                  <div className="col">
                    <img className="project-block-img" src="/img/projects/tf2sc-1.jpg" />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col pt-3 pb-1">
                    <a className="project-block-btn rounded-pill" target="_blank" rel="noopener noreferrer" href="https://github.com/janoRicky/tf2_school_project">
                      <i className="bi bi-github" /> REPO
                    </a>
                    <a className="project-block-btn rounded-pill" target="_blank" rel="noopener noreferrer" href="tf2_school_project">
                      <i className="bi bi-window" /> VIEW
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl">
                <div className="row justify-content-center my-2">
                  <div className="col project-block-head">
                    Team Fortress 2 Fan Project
                  </div>
                </div>
                <div className="row justify-content-center my-2">
                  <div className="col project-block-desc">
                    A small website created based on the game Team Fortress 2.
                    <br />
                    Features animations and other functionalities using jQuery.
                  </div>
                </div>
                <div className="row justify-content-center my-2">
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      HTML
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      JavaScript
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      CSS
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      jQuery
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      Bootstrap
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      {/*==============================================================*/}

      {/*==============================================================*/}
      <div className="row justify-content-center mt-1 mb-5">

        <div className="col-12 col-sm-11 col-md-9 col-lg-8 mx-auto">
          <div className="project-block">

            <div className="row align-items-center">
              <div className="col-12 col-xl-auto text-center">
                <div className="row justify-content-center">
                  <div className="col">
                    <img className="project-block-img" src="/img/projects/angeliclay-2.jpg" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl">
                <div className="row justify-content-center my-2">
                  <div className="col project-block-head">
                    AngeliClay Ordering System
                  </div>
                </div>
                <div className="row justify-content-center my-2">
                  <div className="col project-block-desc">
                    An ordering website with an admin area for the AngeliClay clay and figure making business.
                    <br />
                    Includes basic ordering functions, admin area includes customer support chat, CRUD functions for products, types, orders, user accounts, admin accounts, config, etc.
                  </div>
                </div>
                <div className="row justify-content-center my-2">
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      PHP
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      HTML
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      JavaScript
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      CSS
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      SQL
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      CodeIgniter
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      jQuery
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      Bootstrap
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      {/*==============================================================*/}

      {/*==============================================================*/}
      <div className="row justify-content-center mt-1 mb-5">

        <div className="col-12 col-sm-11 col-md-9 col-lg-8 mx-auto">
          <div className="project-block">

            <div className="row align-items-center">
              <div className="col-12 col-xl-auto text-center">
                <div className="row justify-content-center">
                  <div className="col">
                    <img className="project-block-img" src="/img/projects/dulo-1.jpg" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl">
                <div className="row justify-content-center my-2">
                  <div className="col project-block-head">
                    Dulo By The A's Ordering System
                  </div>
                </div>
                <div className="row justify-content-center my-2">
                  <div className="col project-block-desc">
                    An ordering website with an admin area for the Dulo By The A's Restaurant.
                    <br />
                    Includes basic ordering functions with advanced functionalities like facebook login, account verification, etc.
                  </div>
                </div>
                <div className="row justify-content-center my-2">
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      PHP
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      HTML
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      JavaScript
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      CSS
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      SQL
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      CodeIgniter
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      jQuery
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      Bootstrap
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      {/*==============================================================*/}

      {/*==============================================================*/}
      <div className="row justify-content-center mt-1 mb-5">

        <div className="col-12 col-sm-11 col-md-9 col-lg-8 mx-auto">
          <div className="project-block">

            <div className="row align-items-center">
              <div className="col-12 col-xl-auto text-center">
                <div className="row justify-content-center">
                  <div className="col">
                    <img className="project-block-img" src="/img/projects/PIMS-2.jpg" />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col pt-3 pb-1">
                    <a className="project-block-btn rounded-pill" target="_blank" rel="noopener noreferrer" href="https://github.com/janoRicky/PIMS">
                      <i className="bi bi-github" /> REPO
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl">
                <div className="row justify-content-center my-2">
                  <div className="col project-block-head">
                    Pharmacy Inventory Management System
                  </div>
                </div>
                <div className="row justify-content-center my-2">
                  <div className="col project-block-desc">
                    A simple CRUD app.
                    <br />
                    Has user authentication and CRUD functions for items and users, also has search and print functions.
                    <br />
                    No plugins were used in the development of this project. This project is an attempt to imitate the functions of the Code Igniter 3 PHP Framework and Bootstrap.
                  </div>
                </div>
                <div className="row justify-content-center my-2">
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      PHP
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      HTML
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      JavaScript
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      CSS
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      SQL
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      {/*==============================================================*/}

      {/*==============================================================*/}
      <div className="row justify-content-center mt-1 mb-5">

        <div className="col-12 col-sm-11 col-md-9 col-lg-8 mx-auto">
          <div className="project-block">

            <div className="row align-items-center">
              <div className="col-12 col-xl-auto text-center">
                <div className="row justify-content-center">
                  <div className="col">
                    <img className="project-block-img" src="/img/projects/flappy-1.jpg" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl">
                <div className="row justify-content-center my-2">
                  <div className="col project-block-head">
                    Flappy Bird Clone
                  </div>
                </div>
                <div className="row justify-content-center my-2">
                  <div className="col project-block-desc">
                    A simple clone of the popular mobile game "Flappy Bird".
                    <br />
                    The Corona SDK and Lua programming language was used in the development of this game.
                  </div>
                </div>
                <div className="row justify-content-center my-2">
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      Lua
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      Corona SDK
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      {/*==============================================================*/}

      {/*==============================================================*/}
      <div className="row justify-content-center mt-1 mb-5">

        <div className="col-12 col-sm-11 col-md-9 col-lg-8 mx-auto">
          <div className="project-block">

            <div className="row align-items-center">
              <div className="col-12 col-xl-auto text-center">
                <div className="row justify-content-center">
                  <div className="col">
                    <img className="project-block-img" src="/img/projects/climb-1.jpg" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl">
                <div className="row justify-content-center my-2">
                  <div className="col project-block-head">
                    Heave Ho Clone
                  </div>
                </div>
                <div className="row justify-content-center my-2">
                  <div className="col project-block-desc">
                    A simple clone of a game called "Heave-Ho" for mobile devices.
                    <br />
                    The game has a simple menu and dual joystick controls.
                    <br />
                    Unity and C# was used in the development of this game.
                  </div>
                </div>
                <div className="row justify-content-center my-2">
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      C#
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="skill-block sb-1">
                      Unity
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      {/*==============================================================*/}
    </div>
  )
}
