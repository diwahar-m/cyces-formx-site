import Header from '../../features/Header/index'; 
import Footer from '../../features/Footer';
import {Container,Row, Col, Button} from 'react-bootstrap';

export default function Refund(){ 

    const refundSection1 = ()=>{
        return(
            <Container fluid>
                <Row>
                    <Col className='bg-[#042a2b]'>
                        <div className='flex flex-col justify-center items-center text-center w-100  p-[2em]'>
                            <h1 className='text-[#faf6f5] mb-[1em] mt-[1.5em] text-5xl'>Refund Policy</h1> 
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    }

    return(
        <div className='home-container w-100 min-h-screen'>
            <Header/>   
            {refundSection1}
            
            
            <Footer/>
        </div>
    )
}