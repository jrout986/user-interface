import React from 'react';
import ReactDOM from 'react-dom'

export default class TableHeader extends React.Component{
    constructor(){
        super();
        this.state={
            name:'Joe'
        };
    }
    render(){
        return <tr><th>Id</th><th>Name</th><th>Address</th></tr>;
    }
}
/*export default function Header(){
    return <header>This is a header</header>;
}*/
