import React from 'react';
var $ = require('jquery')

var projects = [
  {
    id: "outer-space",
    title: "Outer Space",    
    src: "/images/outer-space.png",
    description: "Outer space is a social network developed as the final project for Rice class COMP 431 - Web Development.",
    projectLink: "https://outer-space-frontend-final.surge.sh",
    codeLink: null,
    languages: "JavaScript, HTML, CSS",
    tools: "Angular, Express, Node.js, MongoDB, Passport, Cloudinary"
  },
  {
    id: "hype-shark",
    title: "Hype Shark",
    src: "/images/hype-shark.png",
    description: "Hype Shark is an affordable bot that allows users to buy shoes that are in high demand.",
    projectLink: "http://www.hypeshark.net",
    codeLink: null,
    languages: "JavaScript, Python, HTML, CSS",
    tools: "Electron, Express, Heroku, MongoDB, Nightmare.js, Selenium, Stripe"
  },
  {
    id: "circuitry",
    title: "Circuitry",
    src: "/images/circuitry.png",
    description: "Circuitry is a game that allows students to review their knowledge of electricity.",
    projectLink: "https://circuit-game.cs2n.org",
    codeLink: null,
    languages: "JavaScript, HTML",
    tools: "CouchDB, Docker, Express, Phaser"
  },
  {
    id: "hello-world",
    title: "Hello World",
    src: "/images/hello-world.png",
    description: "Hello World is an app that translates customer service calls in real time.",
    projectLink: null,
    codeLink: "https://github.com/theriley106/capital-one-vocal-identification",
    languages: "JavaScript, Python, HTML, CSS",
    tools: "Beautiful Soup, Express, Flask, Node.js"
  },
  {
    id: "power-wheels",
    title: "Power Wheels",
    src: "/images/power-wheels.png",
    description: "Power Wheels is an autonomous toy car designed to navigate a maze.",
    projectLink: "https://youtu.be/P3KU7waaMcw",
    codeLink: "https://github.com/theshoe1029/Power-Wheels-Team",
    languages: "Arduino, JavaScript, Python",
    tools: "3D Printer, Laser Cutter, Lidar, Node.js, PyGame, Socket.io"
  },
  {
    id: "dispatched",
    title: "Dispatched",
    src: "/images/dispatched.png",
    description: "Dispatched is a website for visualizing emergency call data.",
    projectLink: null,
    codeLink: "https://github.com/theshoe1029/Dispatched",
    languages: "JavaScript, HTML, CSS",
    tools: "Chart.js, D3.js, Google Maps API"
  }
]

class Project extends React.Component {

  openModal = (id) => {
    document.getElementById(id).style.display="block"

    $(document).keyup(function(e){
       if (e.keyCode === 27) {
         document.getElementById(id).style.display="none"
      }
    });
  }

  closeModal = (id) => {
    document.getElementById(id).style.display="none"
  }

  createProjects = () =>{
    var row = []
    var output = []

    while (projects.length > 0){
      var column = []
      var project = projects[0]

      var projectLinks = null
      if (project.projectLink != null && project.codeLink != null) {
        projectLinks =
          <div className="modal-bottom modal-p mx-auto text-center">
            <div className = "row">
              <div className = "left-link col-md-6 project-link">
                <a className="project-link" href={project.projectLink}>View Project</a>
              </div>
              <div className = "col-md-6 code-link">
                <span class="lg-view"><a className="project-link" href={project.codeLink}>Github Repository</a></span>
                <span class="sm-view"><a className="project-link" href={project.codeLink}>Github</a></span>
              </div>
            </div>
          </div>
      }
      else if(project.projectLink != null && project.codeLink == null){
        projectLinks =
        <div className="modal-bottom modal-p mx-auto text-center">
          <a className="project-link" href={project.projectLink}>View Project</a>
        </div>
      }
      else{
        projectLinks =
         <div className="modal-bottom modal-p mx-auto text-center">
          <a className="project-link" href={project.codeLink}>Github Repository</a>
         </div>
      }

      column.push(
        <div className="project-square" onClick={this.openModal.bind(this, project.id)}>
          <img className="project-image" data-toggle="modal" src={project.src} id={project.id+"-image"} alt=""></img>
          <p className="project-title">{project.title}</p>
        </div>
      )

      column.push(
        <div className="project-modal" id={project.id} onClick={this.closeModal.bind(this, project.id)}>
          <div className="animated zoomIn">
            <div className="mx-auto text-center">
              <img className="modal-img" src={project.src} alt=""></img>
            </div>
            <div className="modal-p-container mx-auto">
              <p className="modal-p modal-description mx-auto">
                <span className="modal-h text-muted">Description</span><br/>
                {project.description}
              </p>
            </div>
            <div className="modal-p-container mx-auto">
              <p className="modal-p mx-auto">
                <span className="modal-h text-muted">Languages</span><br/>
                {project.languages}
              </p>
            </div>
            <div className="modal-p-container mx-auto">
              <p className="modal-p mx-auto">
                <span className="modal-h text-muted">Tools & Frameworks</span><br/>
                {project.tools}
              </p>
            </div>
            <div className="modal-p-container mx-auto">
              {projectLinks}
            </div>
          </div>
        </div>
      )


      row.push(<div className="col-sm-4">{column}</div>)
      projects.splice(0,1)

      if(row.length%3 === 0 || projects.length === 0){
        output.push(<div className="row">{row}</div>)
        row = []
      }
    }
    return output
  }

  render() {
    return (
      <div>
        {this.createProjects()}
      </div>
    );
  }
}

export default Project;
