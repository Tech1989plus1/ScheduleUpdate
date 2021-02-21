import React from 'react';


class NameForm extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      password: '',
      id: '',
      PH_name: 'Your name..',
      PH_password: 'Password..',
      PH_id: 'Your ID number..'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  handleSubmit(event) {
    const {cb} = this.props;

    if(this.validationHandler()) {
      cb(this.state);
    }

    event.preventDefault();
  }

  validationHandler() {
    const message = `Please provide info...`;
    const valID = /[0-9]+$/;
    var submit = true;


    Object.keys(this.state).forEach((key) => {
      const stateVal = this.state[key];

      if (stateVal === '') {
        this.setState({[`PH_${key}`]: message});
        submit = false;
      }
    });

    if (!valID.test(this.state['id'])) {
      this.setState({'PH_id': message, 'id': ''});
      submit = false;
    }

    return submit;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>First & Last Name</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder={this.state.PH_name}/>

        <label>Team ID Number</label>
        <input type="text" name="id" value={this.state.id} onChange={this.handleChange} placeholder={this.state.PH_id}/>

        <label>Password</label>
        <input type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder={this.state.PH_password}/>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;