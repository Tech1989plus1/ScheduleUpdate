import React from 'react';


class NameForm extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
      fname: '',
      lname: '',
      id: ''
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
    console.log(this.state, this.props.cd)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>First Name</label>
        <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange} placeholder="Your name.."/>

        <label>Last Name</label>
        <input type="text" name="lname" value={this.state.lname} onChange={this.handleChange} placeholder="Your last name.."/>

        <label>Team ID Number</label>
        <input type="text" name="id" value={this.state.id} onChange={this.handleChange} placeholder="Your ID number.."/>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;