import React from "react";
import ReactDom from "react-dom";
import UserData from "../UserData";
import { BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import TableHeader from "../TableHeader";
class DeleteForm extends React.Component {
  constructor(){
    super();
    this.state={empId:"",users:[]};
  }

  componentDidMount(){
    UserData.getUsers().then(response=>{
        this.setState({users: response.data});
    });
  }

  render(){
    return (<div align="center"><table className="table table-hover">
    <thead>
    <TableHeader></TableHeader></thead>
    <tbody>
        {
            this.state.users.map(user => 
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.address}</td>
                    <td><input type="checkbox"/></td>
                </tr>
                /*<Row id={user.id} name={user.name} address={user.address}></Row>*/
                )
        }
    </tbody>
</table>
<button className="btn btn-danger">Delete</button></div>);
  }
}
export default withRouter(DeleteForm);