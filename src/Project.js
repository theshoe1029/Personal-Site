import React from 'react';
import ReactDOM from 'react-dom';


var projects = [
  {
    title: "Hype Shark",
    src: "/images/hello-world.png"
  },
  {
    title: "Circuitry",
    src: "/images/hello-world.png"
  },
  {
    title: "Hello World",
    src: "/images/hello-world.png"
  },
  {
    title: "Power Wheels",
    src: "/images/hello-world.png"
  },
  {
    title: "Dispatched",
    src: "/images/hello-world.png"
  }
]

class Project extends React.Component {
  createProjects = () =>{
    var row = []
    var output = []

    while (projects.length > 0){
      var column = []

      column.push(<img className="project-image" data-toggle="modal" data-target="#exampleModal" src={projects[0].src}></img>)
      column.push(<p className="project-title">{projects[0].title}</p>)
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
