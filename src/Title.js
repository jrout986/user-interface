import React from 'react';
import ReactDOM from 'react-dom'

export default class Title extends React.Component{
    constructor(){
        super();
        this.state={
            name:'Joe'
        };
    }
    render(){
        return <h1>{this.props.name}</h1>;
    }
}
/*export default function Header(){
    return <header>This is a header</header>;
}*/
