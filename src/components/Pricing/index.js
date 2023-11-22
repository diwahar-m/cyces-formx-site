import Header from '../../features/Header/index'; 
import Footer from '../../features/Footer';
import {Container,Row, Col, Button} from 'react-bootstrap';   
import { FaDollarSign } from "react-icons/fa6";

export default function Pricing(){ 

    const pricingSection1 = () =>{
        return(
            <Container fluid>
                <Row>
                    <Col className='bg-[#042a2b]'>
                        <div className='flex flex-col justify-center items-center text-center w-100  p-[2em]'>
                            <h1 className='text-[#faf6f5] mb-[1em] mt-[1.5em] text-5xl'>Pricing</h1> 
                            <h5 className='text-[#faf6f5] mb-[1em] font-bold'>
                                <a href="" className="hover:no-underline font-bold">Start a free trial today, </a>
                                pick a plan after getting 100 form submissions (Free Forever).
                                </h5> 
                            
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    } 

    const pricingSection2 = () =>{
        return(
            <Container fluid className="bg-[#f2f2f2] h-100 flex"> 
                <Row className='mx-auto py-[2em]'>
                    <Col xs={12} md={4} className='flex justify-center'> 
                        <div className='price-card  w-[18em] md:w-[25em]  m-[1em] bg-[#ffffff] pb-[1em]
                            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-lg '> 
                            <div className='title h-[8em] bg-[#5eb1bf] mb-[1em] flex justify-center items-center'>
                                <h3 className='text-4xl font-semibold text-[#ffffff]'>Starter</h3>
                            </div> 
                            <div className='price flex flex-col justify-center items-center mb-1'>
                                <div className='flex '>
                                    <span classname='text-sm '><FaDollarSign color="#666666"/></span> 
                                    <h2 className='text-5xl'>4.99</h2> 
                                </div>
                               
                                <span classname='text-base mt-1 text-[#666666]'>per month</span>
                            </div> 
                            <div className='flex  justify-center items-center mt-[1em] mb-2'>
                                <button type='button'  className=' h-[2.3em]   mx-auto  text-white cursor-pointer font-bold bg-[#ef7b45] 
                                hover:bg-[#f25f1b] px-[1em] rounded  '>SIGN UP FOR FREE</button>
                            </div>
                            <ul className='description text-[#2c2c2c] flex flex-col justify-between h-[13em] mt-[2em] '>
                                <li className='font-semibold'>Unlimited Forms</li>
                                <li>1 Domain Allowed</li>
                                <li>Email Notifications</li>
                                <li>Auto Responders</li>
                                <li>Auto Redirects</li>
                                
                            </ul>

                        </div>
                        
                    </Col> 

                    <Col xs={12}  md={4}  className='flex justify-center'> 
                        <div className=' w-[18em]  md:w-[25em]  m-[1em] bg-[#cdedf6] pb-[1em] 
                            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-lg'> 
                            <div className='title h-[8em] bg-[#5eb1bf] mb-[1em] flex justify-center items-center'>
                                <h3 className='text-4xl font-semibold text-[#ffffff] text-center'>SMBs & Freelancers</h3>
                            </div> 
                            <div className='price flex flex-col justify-center items-center mb-1 '>
                                <div className='flex '>
                                    <span classname='text-sm '><FaDollarSign color="#666666"/></span> 
                                    <h2 className='text-5xl'>49.99</h2> 
                                </div>
                               
                                <span classname='text-base mt-1 text-[#666666]'>per month</span>
                            </div> 
                            <div className='flex  justify-center items-center mt-[1em] mb-2 '>
                                <button type='button'  className=' h-[2.3em]   mx-auto  text-white cursor-pointer font-bold bg-[#ef7b45] 
                                hover:bg-[#f25f1b] px-[1em] rounded  '>SIGN UP FOR FREE</button>
                            </div>
                            <ul className='description text-[#2c2c2c] flex flex-col justify-between h-[13em] mt-[2em]  '>
                                <li className='font-semibold'>Everything in Starter Plan plus,</li>
                                <li>10 Domains Allowed</li>
                                <li>Spam Protection</li>
                                <li>Custom Reports</li>
                                <li>Slack & Zapier Integration</li> 
                                <li>Worflow & State Management</li>
                                
                            </ul>

                        </div>
                        
                    </Col> 

                    <Col xs={12}  md={4}  className='flex justify-center'> 
                        <div className='price-card w-[18em] md:w-[25em]  m-[1em] bg-[#ffffff] pb-[1em] 
                            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-lg'> 
                            <div className='title h-[8em] bg-[#5eb1bf] mb-[1em] flex justify-center items-center'>
                                <h3 className='text-4xl font-semibold text-[#ffffff] text-center'>Business & Agency</h3>
                            </div> 
                            <div className='price flex flex-col justify-center items-center mb-1'>
                                <div className='flex '>
                                    <span classname='text-sm '><FaDollarSign color="#666666"/></span> 
                                    <h2 className='text-5xl'>99.99</h2> 
                                </div>
                               
                                <span classname='text-base mt-1 text-[#666666]'>per month</span>
                            </div> 
                            <div className='flex  justify-center items-center mt-[1em] mb-2'>
                                <button type='button'  className=' h-[2.3em]   mx-auto  text-white cursor-pointer font-bold bg-[#ef7b45] 
                                hover:bg-[#f25f1b] px-[1em] rounded  '>SIGN UP FOR FREE</button>
                            </div>
                            <ul className='description text-[#2c2c2c] flex flex-col justify-between h-[13em] mt-[2em] '>
                                <li className='font-semibold'>Everything in Freelancer Plan plus,</li>
                                <li><span className='font-semibold'>UNLIMITED</span> Domains Allowed</li>
                                <li>Multi User Access Mangement</li>
                                <li>Client Management</li>
                                <li>White Labelled Client Dashboards</li>
                                
                            </ul>

                        </div>
                        
                    </Col> 
                    <Col xs={12}>
                        <div className='flex flex-col justify-between items-center mt-[3em] '>
                            <p className='text-[#222222] text-lg font-normal'>Voila! That means, we never restrict you on the number of submissions you recieve, or on the number of forms.</p> 
                            <p className='text-[#222222] text-lg font-normal'>Avail all the above plans on 
                                <span className='text-lg font-bold'> Yearly Pre-Paid plan</span> to get 
                                <span className='text-lg font-bold'> 2 Months FREE</span> upfront. Save nearly 17% on your yearly bill.</p>
                        </div>
                    </Col>
                </Row>


            </Container>

        )
    } 

    const pricingSection3 = () =>{
        return(
            <Container fluid className='bg-[#cdedf6] '>
                <Row className=' h-[10rem] flex justify-center '>
                    <Col md={9} className='my-auto  '> 
                        <div className='flex flex-col  md:flex-row  justify-center align-center'>

                            <h2 className=' text-center mr-1 mx-auto'>Are you an agency? We have something for you here.</h2> 
                            <button type='button'  className='w-[10em]  md:w-[12em] mx-auto  text-white cursor-pointer font-bold bg-[#ef7b45] hover:bg-[#f25f1b] p-1 rounded-lg  '>Become a Partner</button>                        
                        </div>

                        
                    </Col>
                </Row>
            </Container>
        )
    } 

    const pricingSection4 = ()=>{
        return(
            <Container fluid>
                <Row className='mb-5 p-[3em]'>
                    <div className='text-center mb-[3em]'>
                        <h2>Frequently Asked Questions</h2> 
                    </div> 
                    <Col xs={12} >
                        <div className='flex flex-col justify-between sm:flex-row'>
                            <div className='mb-[1.5em] sm:mr-[1em] w-2/4'>
                                <h5 className='text-[#222222]'>How does the 14 day trial work?</h5> 
                                <p className='text-[#666666]'>After you signup you get access to all the features of formX for 14 days. We want to make sure that you can get formX working to your satisfaction before we ask you for your credit card.</p>
                            </div>
                            <div className='mb-[1.5em] sm:ml-[1em]  w-2/4'>
                                <h5 className='text-[#222222]'>Do we pay extra for more people?</h5> 
                                <p className='text-[#666666]'>No. Unlike most group software, we don't charge you based on how many users you add. 5 users or 50, the price is the same.</p>
                            </div>
                        </div>
                        
                    </Col>
                    <Col xs={12} >
                        <div className='flex flex-col justify-between sm:flex-row'>
                            <div className='mb-[1.5em] sm:mr-[1em] w-2/4'>
                                <h5 className='text-[#222222]'>What if we need more than 14 days?</h5> 
                                <p className='text-[#666666]'>We'll give you time. Just let us know at support@formx.stream and we'll happily extend your trial.</p>
                            </div>
                            <div className='mb-[1.5em] sm:ml-[1em] w-2/4'>
                                <h5 className='text-[#222222]'>Will we be charged when our trial is up?</h5> 
                                <p className='text-[#666666]'>No. We don't ask for your credit card up front, so you'll only be charged when you decide. If you want to continue after your trial, we'll ask for payment details. If not — cancel with a click, no questions asked.</p>
                               
                            </div>
                        </div>
                        
                    </Col> 
                    <Col xs={12} >
                        <div className='flex flex-col justify-between sm:flex-row'>
                            <div className='mb-[1.5em] sm:mr-[1em] w-2/4'>
                                <h5 className='text-[#222222]'>Do you have any contracts or cancellation fees?</h5> 
                                <p className='text-[#666666]'>No. formX is a pay-as-you-go service. We do not have contracts or cancellation fees. You can cancel whenever you want. If you cancel, you’ll be billed for the current month, but you won’t be billed again. 
                                    <span ><a href="/refund" className='text-[#007bff] hover:text-[#067796] hover:underline hover:decoration-[#067796]'>
                                        Check our refund policy</a>
                                    </span>
                                </p>
                            </div>
                            <div className='mb-[1.5em] sm:ml-[1em] w-2/4'>
                                <h5 className='text-[#222222]'>Can I upgrade or downgrade anytime?</h5> 
                                <p className='text-[#666666]'>Yes. formX is a pay-as-you-go service and you can upgrade, downgrade or cancel at any time. Click on the My Account link to find options to change your plan.</p>
                            </div>
                        </div>
                        
                    </Col> 
                </Row>
            </Container>
        )
    } 

    const pricingSection5 = ()=>{
        return(
            <Container fluid>
                <Row className=' p-[2em] bg-[#042a2b]'>
                     <h2 className='text-[#f5f7fa] text-center mb-[1em]'>Try formX free for 14 days! No credit card required.</h2>
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
        <div className='w-100 min-h-screen'> 
            <Header/>  
            {pricingSection1()}
            {pricingSection2()}
            {pricingSection3()}
            {pricingSection4()}
            {pricingSection5()}
            
            <Footer/>

        </div>
    )
}