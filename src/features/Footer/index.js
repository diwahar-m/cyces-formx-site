import {Container,Row, Col} from 'react-bootstrap';
import './style.css'
export default function Footer(){


    return(
        <Container fluid className='bg-[#042a2b] '>
            <Row className='text-center py-5 flex flex-col justify-evenly '>
                <Col sm={12} className="flex justify-center">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/assets/formx-white.png'} alt="logo" style={{width: '120px'}}/>
                    </div>
                </Col> 
                <Col sm={12} >
                    <p >Call us for any queries at <a>+91 9500154950</a></p>
                </Col>

                {/* links */} 
                <Col>
                    <div className='flex flex-col md:flex-row justify-evenly mb-5 text-xl'>
                        <a  >Badge Program</a> 
                        <a>About Our Company</a> 
                        <a>Contact Us</a> 
                        <a>Support</a> 
                        <a>GDPR</a> 
                        <a>Terms of service</a> 
                        <a href="/privacy" className='no-underline'>Privacy Policy</a> 
                        <a href="/refund" className='no-underline'>Refund Policy</a>
                    </div>
                </Col>

                {/* copyright */} 
                <Col >
                    <div>
                        <span className='copyright mr-2'>&#169;</span>
                        <span className='text-white mr-2'>Cyces Innovations Labs LLP.</span>
                        <span className='copyright'>All Rights Reserved</span>
                    </div>
                    
                </Col>

               
            </Row>
        </Container>

    )
}