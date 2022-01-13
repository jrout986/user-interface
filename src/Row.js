import React from 'react';
import ReactDOM from 'react-dom'

export default class Row extends React.Component{
    constructor(){
        super();
        this.state={
            name:'Joe'
        };
    }
    render(){
        return <tr key={this.props.id}><td>{this.props.id}</td><td>{this.props.name}</td><td>{this.props.address}</td></tr>;
    }
}
/*export default function Header(){
    return <header>This is a header</header>;
}*/
