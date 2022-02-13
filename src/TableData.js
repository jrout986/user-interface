import React from 'react';
import ReactDOM from 'react-dom';
import TableHeader from './TableHeader';
import Row from "./Row";
import UserData from './UserData';

export default class TableData extends React.Component{
    constructor(){
        super();
        this.state={
            users:[]
        };
    }
    componentDidMount(){
        UserData.getUsers().then((response) => {
            //console.log(response);
            this.setState({users:response.data});
        }).catch(function (error) {
            if(error.response){
                console.log(error.response)
            }else if(error.request){
                console.log(error.request)
            }
        });
    }
    render(){
        return <table className="table table-hover">
            <thead>
            <TableHeader></TableHeader></thead>
            <tbody>
                {
                    this.state.users.map(user => 
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                        </tr>
                        /*<Row id={user.id} name={user.name} address={user.address}></Row>*/
                        )
                }
            </tbody>
        </table>;
    }
}
/*export default function Header(){
    return <header>This is a header</header>;
}*/
