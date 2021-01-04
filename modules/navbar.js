import React from 'react';
import {Navbar} from 'react-bootstrap'

class Navbar extends React.Component{
    render(){
        return(
        <Navbar>
            <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                Signed in as: Developper
                </Navbar.Text>
            </Navbar.Collapse>
            </Navbar>

        )
    }
};

export default Navbar;
