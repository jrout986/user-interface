import { Button } from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import CreateForm from './Component/CreateForm';
import Title from './Title';

export default class CreateEmployee extends React.Component{
    constructor(){
        super();
        this.state={
            name:'Joe'
        };
    }
    render(){
        return (<div align="center">
            <Title name="Create New Employee"></Title>
            <CreateForm></CreateForm>
        </div>);
    }
}
/*export default function Header(){
    return <header>This is a header</header>;
}*/
