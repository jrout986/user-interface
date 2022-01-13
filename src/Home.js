import React from 'react';
import ReactDOM from 'react-dom'
import Title from "./Title";
import TableData from "./TableData";


export default class Home extends React.Component{
    constructor(){
        super();
        this.state={
            name:'Joe'
        };
    }
    render(){
        return (<div align="center">
        <Title name="User Details"></Title>
      <TableData></TableData> </div>);
    }
}
/*export default function Header(){
    return <header>This is a header</header>;
}*/
