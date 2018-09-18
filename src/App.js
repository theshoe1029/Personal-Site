import React from 'react';
import Style from 'style-it';

var colorLight = '#ff4747';
var colorDark = '#d81313';

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
    switch(this.state.page){
      case 'projects':
        colorLight = '#ff4747'
        colorDark = '#d81313'
        break
      case 'about':
        colorLight = '#00a508'
        colorDark = '#008206'
        break
      case 'contact':
        colorLight = '#cc6bff'
        colorDark = '#b523ff'
        break
    }

    var navStyle = {
      backgroundColor: colorLight,
      borderBottom: '0.25rem solid ' + colorDark
    }

    var linkStyle = {color: colorLight}

    return (
      <div>
        <nav className="navbar" id="navigation" style={navStyle}>
          <h2>Adam Schueller</h2>

          <ul className="nav justify-content-end">
            <li className="nav-item">
              <p className="nav-link" onClick={()=>this.handleClick("projects")}>Projects</p>
            </li>
            <li className="nav-item">
              <p className="nav-link" onClick={()=>this.handleClick("about")}>About</p>
            </li>
            <li className="nav-item">
              <p className="nav-link" onClick={()=>this.handleClick("contact")}>Contact</p>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Resume.pdf" target="_">Resume</a>
            </li>
          </ul>
        </nav>

        <div className="container">

        </div>

        <footer className="bg-light" id="footer">
          <div id="footer-div">
            <a href="mailto:as174@rice.edu" style={linkStyle}><i className="far fa-envelope align-middle"></i></a>
            <a href="https://twitter.com/theshoe1029" style={linkStyle}><i className="fab fa-twitter align-middle"></i></a>
            <a href="https://github.com/theshoe1029" style={linkStyle}><i className="fab fa-github-alt align-middle"></i></a>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
