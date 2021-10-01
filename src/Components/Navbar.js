import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

export default function NavElement(){
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar  light expand="md" className="text-light" style={{zIndex:3 ,backgroundColor:"black"}}>
        <NavbarBrand href="/" className="text-light">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <div className="ml-3 " >
          <Nav className="mr-auto " navbar >
            <NavItem >
              <NavLink href="/projects" className="text-light">Projects</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="/about" className="text-light">About</NavLink>
            </NavItem>
          </Nav>
          </div>
        </Collapse>
        <Nav className="mr-auto " navbar >
           <span className="mr-3">Contact :</span>
           
           <span><i class="fa fa-envelope-o" aria-hidden="true"></i>  abhijeetvarude123@gmail.com</span>            
          </Nav>
      </Navbar>
    </div>
  );

}