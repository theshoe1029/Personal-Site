import React from 'react';
import Style from 'style-it';

var colorLight = '#cc6bff'
var colorDark = '#b523ff'

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

    var navStyle = {
      backgroundColor: colorLight,
      borderBottom: '0.25rem solid ' + colorDark
    }

    var linkStyle = {color: colorLight}

    return (
      <div>
        <a id="resume-link" href="/Resume.pdf" target="_">
          <nav className="navbar" id="navigation" style={navStyle}>
            <h2 className="mx-auto">Adam Schueller</h2>
          </nav>
        </a>

        <div id="projects" className="container">

        </div>

        <footer className="bg-light" id="footer">
          <div id="footer-div">
            <a href="mailto:as174@rice.edu" style={linkStyle}><i className="far fa-envelope align-middle"></i></a>            
            <a href="https://www.linkedin.com/in/adam-schueller/" style={linkStyle}><i className="fab fa-linkedin-in align-middle"></i></a>
            <a href="https://github.com/theshoe1029" style={linkStyle}><i className="fab fa-github-alt align-middle"></i></a>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
