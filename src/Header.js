import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import CreateEmployee from "./CreateEmployee";

export default class Header extends React.Component{
    constructor(){
        super();
        this.state={
            name:'Joe'
        };
    }
    render(){
        return (<Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Employees</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="/createEmp">Add Employee</NavDropdown.Item>
            <NavDropdown.Item href="/deleteEmp">Delete Employee</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Reports</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>);
    }
}
/*export default function Header(){
    return <header>This is a header</header>;
}*/
