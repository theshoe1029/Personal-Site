import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {page:'projects',hover:false}

    this.toggleHover = this.toggleHover.bind(this)
  }

  toggleHover(){
    this.setState({hover:!this.state.hover})
  }

  handleClick(page){
    this.setState({page:page})
  }

  render() {
    return (
      <div>
        <a id="resume-link" href="https://drive.google.com/file/d/1Yc14-pB_1-PVFkxMnM71S74sO6Z2bGUr/view?usp=sharing" target="_">
          <nav className="navbar" id="navigation">
            <h2 className="mx-auto text-center">
              <img src="images/header.gif"></img>
            </h2>
          </nav>
        </a>

        <div id="projects" className="container">

        </div>

        <footer id="footer">
          <div id="footer-div">
            <a href="https://drive.google.com/file/d/1Yc14-pB_1-PVFkxMnM71S74sO6Z2bGUr/view?usp=sharing">Resume</a>
            <a href="mailto:as174@rice.edu">Email</a>
            <a href="https://www.linkedin.com/in/adam-schueller/">Linkedin</a>
            <a href="https://github.com/theshoe1029">Github</a>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
