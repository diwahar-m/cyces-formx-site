import Header from '../../features/Header/index'; 
import Footer from '../../features/Footer';
import {Container,Row, Col} from 'react-bootstrap';

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

    const refundSection2 = ()=>{
        return(
            <Container fluid>
                <Row className='mb-5 p-[3em]'>
                     
                    <Col xs={12} >
                        <div className='flex flex-col justify-between '>
                            <div className='mb-[1.5em] mx-[2em] '>
                                <h2 className='text-[#222222] text-3xl font-semibold'>A fair refund policy.</h2> 
                                <p className='text-[#555555]'>Bad refund policies are infuriating. You feel like the company is just trying to rip you off. We never want our customers to feel that way, so our refund policy is simple: If you’re ever unhappy with formX, for any reason, just contact our support team and we’ll take care of you.</p>
                            </div> 
                            <div className='mb-[1.5em] mx-[2em] '>
                                <h3 className='text-[#222222] text-2xl font-semibold'>Examples of full refunds we’d grant.</h3> 
                                <ul className='text-[#2c2c2c] list-disc'>
                                    <li >If you were just charged for your next month of formX, but you meant to cancel, we’re happy to refund that extra charge.</li>
                                    <li >If you forgot to cancel formX a couple months ago, and you haven’t used formX since then, we’ll give you a full refund for a few back months. No problem.</li>                                   
                                </ul>
                            </div> 
                            <div className='mb-[1.5em] mx-[2em] '>
                                <h3 className='text-[#222222] text-2xl font-semibold'>Examples of partial refunds or credits we’d grant.</h3> 
                                <ul className='text-[#2c2c2c] list-disc'>
                                    <li >If you forgot to cancel formX a year ago, and there’s been activity on your account since then, we’ll review your account usage and figure out a partial refund based on how many months you used it.</li>
                                    <li >If you upgraded your account a few months ago to a higher plan, but you didn’t end up using the extra features, workspaces, or storage space, although you did keep using formX in general, we’d consider applying a prorated credit towards future months.</li>                                   
                                    <li >If we had extensive downtime (multiple hours in a day, or multiple days in a month) or you emailed customer service and it took multiple days to get back to you, we’d issue a partial credit to your account.</li>                                   
                                </ul>
                            </div> 
                            <div className='mb-[1.5em] mx-[2em] '>
                                <h3 className='text-[#222222] text-2xl font-semibold'>Process of Refund.</h3> 
                                <ul className='text-[#2c2c2c] list-decimal'>
                                    <li >Get in touch with us at  support@formx.stream with details or through our support form <a href="/support" >here</a></li>
                                    <li >We will respond back to you within 24 hours.</li>                                   
                                    <li >Once refund reason is moderated and details are accepted, refund will be initiated. Refund amount will take 7-10 working days to get credited back to your account.</li>                                   
                                </ul>
                            </div>
                            
                        </div>
                        
                    </Col>
                    
                </Row>
            </Container>
        )
    } 

    const refundSection3 = () =>{
        return(
            <Container fluid>
                <Row className=' p-[2em] bg-[#042a2b]'>
                     <h2 className='text-[#f5f7fa] text-center mb-[1em]'>Get formX Beta Access Now!</h2>
                    <Col xs={12}>
                        
                        <div className='flex flex-col sm:flex-row justify-center align-center'>
                           <input type='email' placeholder='Your email address' className='w-[18em] focus:border-[#007bff] rounded-md h-11 pl-2 mb-3' /> 
                           <button type='button'  className='h-11 w-[10em] text-white cursor-pointer font-bold bg-[#ef7b45] hover:bg-[#ef7b45] p-1 rounded-lg   sm:ml-2 '>SIGN UP FOR FREE</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

    return(
        <div className='home-container w-100 min-h-screen'>
            <Header/>   
            {refundSection1()}
            {refundSection2()}
            {refundSection3()}
            
            
            <Footer/>
        </div>
    )
}