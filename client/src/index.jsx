const React = require('react');
const {render} = require('react-dom');




require('../styles/main.scss');

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'hey there'
    }
  }
  render(){
    document.title = this.state.title
    return (
      <h1> It works </h1>
    )
  }
}

render(<App />, document.getElementById('react-root'));
