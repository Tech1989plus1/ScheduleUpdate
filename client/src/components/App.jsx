import React from 'react';

import NameForm from './NameForm.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.postClientInfo = this.postClientInfo.bind(this);
  }

  postClientInfo(insert) {
    console.log(insert);
    
  }  

  render() {
    return (
      <div className="window">
        <h3>Sign in</h3>
        <div className ="formWindow">
          <NameForm cb={this.postClientInfo}/>
        </div>
      </div>
    );
  }
}

export default App;