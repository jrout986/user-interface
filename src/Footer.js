import React from 'react';
import ReactDOM from 'react-dom'

export default class Footer extends React.Component{
    constructor(){
        super();
        this.state={
            name:'Joe'
        };
    }
    render(){
        return <footer>footer for Sample React UI designed by {this.state.name}</footer>;
    }
}
/*export default function Header(){
    return <header>This is a header</header>;
}*/
