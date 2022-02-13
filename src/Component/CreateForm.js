import React from "react";
import ReactDom from "react-dom";
import UserData from "../UserData";
import { BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
class CreateForm extends React.Component {
  constructor(){
    super();
    this.state={name:""};
  }

  handleSubmit(e){
    //console.log(this.state);
    e.preventDefault();
    const data=this.state;
    console.log(data);
    UserData.saveNewUser(data).then(response=>{
      this.setState({users:response.data});
      console.log(this.state);
      this.props.history.push("/");
    });

    
  }
  handleChange(event){
    //event.preventDefault();
    this.setState({[event.target.name]:event.target.value});
  }

  render(){
    return (<div className="container">
      <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label>Name:</label>
            <input className="form-control" name="name" onChange={this.handleChange.bind(this)}/>
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input className="form-control" name="age" onChange={this.handleChange.bind(this)} />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <input className="form-control" name="gender" onChange={this.handleChange.bind(this)} />
          </div>
          <input type="submit" className="btn btn-info" value="Create"/>
        </form>
    </div>);
  }
}
export default withRouter(CreateForm);