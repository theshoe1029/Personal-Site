import React from 'react';
import ReactDOM from 'react-dom';


var projects = [
  {
    id: "hype-shark",
    title: "Hype Shark",
    src: "/images/hype-shark.png",
    description: "Hype Shark is an affordable bot that allows users to buy shoes that are in high demand",
    link: "https://www.hypeshark.net",
    languages: "CSS, HTML, JavaScript, Python",
    tools: "Electron, Express, Heroku, MongoDB, Nightmare.js, Selenium"
  },
  {
    id: "circuitry",
    title: "Circuitry",
    src: "/images/circuitry.png",
    description: "Circuitry is a game that allows students to review their knowledge of electricity",
    link: "https://cs2n.org",
    languages: "HTML, JavaScript",
    tools: "CouchDB, Docker, Express, Phaser"
  },
  {
    id: "hello-world",
    title: "Hello World",
    src: "/images/hello-world.png",
    description: "Hello World is an app that translates customer service calls in real time",
    link: "https://github.com/theriley106/capital-one-vocal-identification",
    languages: "CSS, HTML, JavaScript, Python",
    tools: "Beautiful Soup, Express, Flask"
  },
  {
    id: "power-wheels",
    title: "Power Wheels",
    src: "/images/power-wheels.png",
    description: "For this project I worked with Polygon Robotics to develop an autonomous toy car for the Pittsburgh Maker Faire",
    link: "https://youtu.be/P3KU7waaMcw",
    languages: "Arduino, Python",
    tools: "3D Printer, Laser Cutter, Lidar, PyGame"
  },
  {
    id: "dispatched",
    title: "Dispatched",
    src: "/images/dispatched.png",
    description: "Dispatched is a website for visualizing emergency call data",
    link: "https://github.com/theshoe1029/Dispatched",
    languages: "CSS, HTML, JavaScript",
    tools: "Chart.js, D3.js, Google Maps API"
  }
]

class Project extends React.Component {
  createProjects = () =>{
    var row = []
    var output = []

    while (projects.length > 0){
      var column = []

      column.push(<img className="project-image" data-toggle="modal" data-target={"#"+projects[0].id} src={projects[0].src}></img>)
      column.push(<p className="project-title">{projects[0].title}</p>)
      column.push(
                  <div className="modal fade project-modal" id={projects[0].id} tabindex="-1" role="dialog" aria-labelledby={projects[0].id+"-label"} aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id={projects[0].id+"-label"}>{projects[0].title}</h4>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <img className="modal-img" src={projects[0].src}></img>
                          <p className="modal-description">
                            {projects[0].description}<br/>
                            <a href={projects[0].link}>{projects[0].link}</a>
                          </p>

                          <div className="modal-languages">
                            <h5>Languages Used</h5>
                            <p>
                              {projects[0].languages}
                            </p>
                          </div>

                          <div className="modal-languages">
                            <h5>Tools and Frameworks Used</h5>
                            <p>
                              {projects[0].tools}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>)
      row.push(<div className="col-sm-4">{column}</div>)
      projects.splice(0,1)

      if(row.length%3 == 0 || projects.length == 0){
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
