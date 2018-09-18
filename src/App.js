import React from 'react';
import Style from 'style-it';

var themes = [
  {colorLight:'#ff4747', colorDark:'#d81313'},
  {colorLight:'#00a508', colorDark:'#008206'},
  {colorLight:'#cc6bff', colorDark:'#b523ff'}
]

var theme = themes[Math.floor(Math.random() * (themes.length))];

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
      backgroundColor: theme.colorLight,
      borderBottom: '0.25rem solid ' + theme.colorDark
    }

    var linkStyle = {color: theme.colorLight}

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
            <a href="https://twitter.com/theshoe1029" style={linkStyle}><i className="fab fa-twitter align-middle"></i></a>
            <a href="https://github.com/theshoe1029" style={linkStyle}><i className="fab fa-github-alt align-middle"></i></a>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
