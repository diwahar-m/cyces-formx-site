import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {Button} from 'react-bootstrap'; 
import './style.css'; 
import { LiaBarsSolid } from "react-icons/lia";



export default function Header(){

    return(
        <Navbar expand="lg" className="bg-[#042a2b] ">
            <Container>
                <Navbar.Brand href="/">
                    
                        <img src={process.env.PUBLIC_URL + '/assets/formx-white.png'} alt="logo" style={{width: '120px'}}/>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white" id="navbar1"   />
                    
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/features" >Features</Nav.Link>
                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                    <Nav.Link href="/support">Support</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/">Instant Demo</Nav.Link>
                    <Nav.Link href="/agency">Agency</Nav.Link> 
                    <Nav.Link href="/login">Login</Nav.Link> 
                    <button type='button'  className=' h-[2.3em]   mr-auto  text-white cursor-pointer font-bold bg-[#ef7b45] hover:bg-[#f25f1b] px-[1em] rounded-lg  '>Get started</button>                        
                </Nav>
                
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}