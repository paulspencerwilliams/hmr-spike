import React, {Component, Fragment} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {wat: 1};
  }

  tick = () => {
    this.setState({...this.state, wat: this.state.wat + 1});
  }

  render() {
    return (
      <Fragment>
        <div>{this.state.wat}</div>
        <button onClick={this.tick}>inc.</button>
      </Fragment>
    );
  }
}

export default App;
