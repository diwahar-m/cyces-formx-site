import Header from '../../features/Header/index'; 
import Footer from '../../features/Footer';
import {Container,Row, Col, Button} from 'react-bootstrap';  
import './style.css'

export default function Home(){


    const homeSection1 = ()=>{
        return(
            <div> 
                <Container fluid className='bg-[#042a2b] py-5' >
                    <Row className=' flex justify-center align-center'>
                        <Col sm={6} >
                            
                                <div className='mt-4 w-100 pl-[5em]'> 
                                    <h1 className='text-left text-[#ffffff] mb-[1em] text-[45px]'>Powerful form backend  software to handle your submissions.</h1> 
                                    <h5 className='text-left text-[#cdedf6] mb-[3em]'> You design the forms, we power them!</h5>
                                    <div className='mt-3 flex- flex-col'>

                                        <div className='flex flex-col flex-lg-row justify-start  w-[5/6] h-25'>
                                            
                                            <input type="text" id="email" class="w-[16em] md:w-[20em] mb-1 h-[3.3em]  bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                            rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:border-[#07ded3]
                                            block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                            dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Your Email Address" required/> 
                                            <button type='button'  className='w-[11em] h-[3em] md:ml-1  text-white cursor-pointer font-bold bg-[#ef7b45] hover:bg-[#ef7b45] p-1 rounded-lg   ml-lg-1 '>SIGN UP FOR FREE</button>
                                        </div> 
                                        <p className=" text-[#5eb1bf]">No credit card required. No strings attached.</p>
                                    </div>
                                </div> 
                        </Col>
                        <Col sm={6} className=' flex justify-center'> 
                               
                                    <img src={process.env.PUBLIC_URL + '/assets/home-image.png'} alt="logo" className='w-[27em]'/>

                               

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    const homeSection2 = ()=>{
        return(
            <Container fluid className="bg-[#f2f2f2] h-100 flex"> 
                <Row className='mx-auto py-[2em]'>
                    <Col sm={12} className='flex justify-center text-center'> 
                        <div> 
                            <h2>Get formX running in minutes</h2> 
                            <h6 className='mb-5 text-[#666666]'>Harness the power of analytics, while integrating with the apps you love</h6>
                            
                        </div>
                        
                    </Col>
                
                    <Col sm={3} className="flex justify-center mb-3">
                        <img src={process.env.PUBLIC_URL + '/assets/slack.svg'} className='w-3/5' alt="slack"/>
                    </Col> 
                    <Col sm={3} className="flex justify-center mb-3">
                        <img src={process.env.PUBLIC_URL + '/assets/trello.png'} className='w-3/5' alt="slack"/>
                    </Col>
                    <Col sm={3} className="flex justify-center mb-3">
                        <img src={process.env.PUBLIC_URL + '/assets/sheets.png'} className='w-2/5' alt="slack"/>
                    </Col> 
                    <Col sm={3} className="flex justify-center mb-3">
                        <img src={process.env.PUBLIC_URL + '/assets/salesforce.png'} className='w-2/5' alt="slack"/>
                    </Col>
                
                    <Col sm={12} className='text-center'>
                        <div>                           
                            <a className='mt-2 text-[#042a2b]' target='_blank' href="https://www.youtube.com/watch?v=TEhmeJdezbk">
                                <strong className='flex justify-center '>
                                    <img src={process.env.PUBLIC_URL + '/assets/video-play-button.png'} className='playbutton-image mt-1'  alt="video-play-button"/>
                                    <p className='text-xl ml-2 hover:underline decoration-[#007bff]'>Watch a quick 1 min product tour
                                    </p>
                                </strong>                               
                            </a> 
                        </div>
                    </Col>
                    
                </Row>


            </Container>

        )
    } 

    const homeSection3 = ()=>{
        return(
            <Container fluid>
                <Row className='mx-auto'> 
                    <Col xs={12} className='flex justify-center '>
                        <h2 className='mt-[2em]'> What can you do with FormX?</h2>
                    </Col>
                    <Col xs={12} sm={4} className='flex justify-center'>
                        <div className='flex flex-col justify-between  mb-[3em]'>
                            <img src={process.env.PUBLIC_URL + '/assets/workflow.svg'} alt='workflow'  className='w-1/5 mb-1 mx-auto mt-[2em]'/>
                            <p className='text-center'>
                                <span className='font-bold'>Streamline </span>
                                your data collection forms securely and scalably
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={4} className='flex justify-center'>
                        <div className='flex flex-col justify-between  mb-[3em]'>
                            <img src={process.env.PUBLIC_URL + '/assets/dashboard.svg'} alt='dashboard'  className='w-1/5 mb-1 mx-auto mt-[2em]'/>
                            <p className='text-center'>
                                <span className='font-bold'>Manage </span>
                                all the responses you receive with our powerful dashboard
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={4} className='flex justify-center'>
                        <div className='flex flex-col justify-between mb-[3em]'>
                            <img src={process.env.PUBLIC_URL + '/assets/collaboration.svg'} alt='collaboration'  className='w-1/5 mb-1 mx-auto mt-[2em]'/>
                            <p className='text-center'>
                                <span className='font-bold'>Collaborate </span>
                                and amplify your work productivity across all devices from anywhere, any time
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    } 

    const homeSection4 = ()=>{
        return(
            <Container fluid className='bg-[#cdedf6] '>
                <Row className=' h-[10rem] flex justify-center '>
                    <Col md={4} className='my-auto  flex flex-col  md:flex-row  justify-center align-center'> 
                        
                            <h2 className='text-center mr-1 mx-auto'>Try out formX</h2> 
                            <button type='button'  className='w-[10em]  md:w-[12em] mx-auto  text-white cursor-pointer font-bold bg-[#ef7b45] hover:bg-[#f25f1b] p-1 rounded-lg  '>SIGN UP FOR FREE</button>                        

                        
                    </Col>
                </Row>
            </Container>
        )
    } 

    const homeSection5 = ()=>{
        return(
            <Container fluid>
                <Row className='p-[2em] flex  '> 
                    <h2 className='text-center mb-5'>What do we have?</h2>
                    <Col xs={12} sm={6} md={4} lg={3} > 
                        <div className='min-h-[15em]  hover:shadow-lg bg-[#f2f2f2] rounded-lg flex flex-col justify-center align-center p-2 m-3
                         transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '>
                            <img src={process.env.PUBLIC_URL + '/assets/shield.svg'} alt="logo" className='w-[3.5em]  mx-auto'/>
                            <h4 className='text-center'>Flexibility & Security</h4> 
                            <p className='text-center'>Take full control of how you collect data via JS or POST. Security by design.</p>
                        </div>
                    </Col>
                    <Col  xs={12} sm={6} md={4} lg={3} > 
                        <div className='min-h-[15em] bg-[#f2f2f2] rounded-lg flex flex-col justify-center align-center p-2 m-3
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                            <img src={process.env.PUBLIC_URL + '/assets/message.svg'} alt="logo" className='w-[4em] mx-auto'/>
                            <h4 className='text-center'>Auto Responders</h4> 
                            <p className='text-center'>Let your submitters know you're listening. Automate confirmation mails with just one click</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} > 
                        <div className='min-h-[15em] bg-[#f2f2f2] rounded-lg flex flex-col justify-center align-center p-2 m-3
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                            <img src={process.env.PUBLIC_URL + '/assets/notification.svg'} alt="logo" className='w-[4em] mx-auto'/>
                            <h4 className='text-center'>Instant Notifications</h4> 
                            <p className='text-center'>Stay updated with submissions through email. Slack and other channels of your choice.</p>
                        </div>
                    </Col>
                    <Col  xs={12} sm={6} md={4} lg={3} > 
                        <div className='min-h-[15em] bg-[#f2f2f2] rounded-lg flex flex-col justify-center align-center p-2 m-3
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                            <img src={process.env.PUBLIC_URL + '/assets/spam.svg'} alt="logo" className='w-[4em] mx-auto'/>
                            <h4 className='text-center'>Spam Filtering</h4> 
                            <p className='text-center'>Wasting valuable tie scanning through spam? Use Google reCaptcha to weed them out.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}  > 
                        <div className='min-h-[15em] bg-[#f2f2f2] rounded-lg flex flex-col justify-center align-center p-2 m-3
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                            <img src={process.env.PUBLIC_URL + '/assets/analysis.svg'} alt="logo" className='w-[4em] mx-auto'/>
                            <h4 className='text-center'>User Submission Insights</h4> 
                            <p className='text-center'>Keep track of submitters' activity to ensure increased conversions.</p>
                        </div>
                    </Col>
                    <Col  xs={12} sm={6} md={4} lg={3} > 
                        <div className='min-h-[15em] bg-[#f2f2f2] rounded-lg flex flex-col justify-center align-center p-2 m-3
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                            <img src={process.env.PUBLIC_URL + '/assets/crm.svg'} alt="logo" className='w-[4em] mx-auto'/>
                            <h4 className='text-center'>Simplified Management</h4> 
                            <p className='text-center'>Organize your submissions based on their progress.</p>
                        </div>
                    </Col>
                    <Col  xs={12} sm={6} md={4} lg={3} > 
                        <div className='min-h-[15em] bg-[#f2f2f2] rounded-lg flex flex-col justify-center align-center p-2 m-3
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                            <img src={process.env.PUBLIC_URL + '/assets/users.svg'} alt="logo" className='w-[4em] mx-auto'/>
                            <h4 className='text-center'>Multi-User Access</h4> 
                            <p className='text-center'>Your entire team can access your dashboard, for improved collaboration and productivity.</p>
                        </div>
                    </Col>
                    <Col  xs={12} sm={6} md={4} lg={3} > 
                        <div className='min-h-[15em] bg-[#f2f2f2] rounded-lg flex flex-col justify-center align-center p-2 m-3 
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                            <img src={process.env.PUBLIC_URL + '/assets/promotion.svg'} alt="logo" className='w-[4em] mx-auto'/>
                            <h4 className='text-center'>more to come</h4> 
                            <p className='text-center'>Coming Up: Field based submission routing, branded thank you pages.</p>
                        </div>
                    </Col> 
                    <div className='flex justify-center'>
                        <a href="" className='text-center text-[#5eb1bf] hover:text-[#00000]'>View all features</a>
                    </div>

                </Row>
            </Container>
        )
    } 

    const homeSection6= ()=>{
        return(
            <Container fluid>
                <Row className='p-[2em] flex bg-[#cdedf6]  '>
                    <div className='text-center'>
                        <h2>Where can you use formX?</h2>
                        <p className='text-[#555555]'>Best suited for static, lead generation forms, surveys, contact forms, newsletters, marketing signups and sharing lead-gen materials.</p>
                    </div>
                    
                    <Col xs={12} sm={6} md={4} >
                        <div className='hover:bg-[#ffffff] p-2 text-center'>
                            <img src={process.env.PUBLIC_URL + '/assets/promotion.svg'} alt="logo" className='w-[4em] mx-auto'/>
                            <h5>Marketers</h5> 
                            <p>Enable data collection with the freedom of design. No need to call in the IT team.</p>
                        </div>
                    </Col>
                    <Col  xs={12} sm={6} md={4}>
                        <div className='hover:bg-[#ffffff] p-2 text-center'>
                            <img src={process.env.PUBLIC_URL + '/assets/support.svg'} alt="logo" className='w-[4em] mx-auto'/>
                            <h5>Support specialists</h5> 
                            <p>All your support data in one place, organized and automated. Reports just the way you want.</p>
                        </div>
                    </Col>
                    <Col  xs={12} sm={6} md={4}>
                        <div className='hover:bg-[#ffffff] p-2 text-center'>
                            <img src={process.env.PUBLIC_URL + '/assets/design.svg'} alt="logo" className='w-[4em] mx-auto'/>
                            <h5>Designers and developers</h5> 
                            <p>Have more productive time to concentrate on what's needed. We wil take care of your backed.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    } 

    const homeSection7 = ()=>{
        return(
            <Container fluid>
                <Row className='mb-5 p-[2em]'>
                    <div className='text-center mb-[3em]'>
                        <h2>Want to know more?</h2>
                    </div>
                    <Col xs={12} sm={6} md={4}> 
                        <div className='h-[9em] transition-all duration-300 hover:shadow-2xl hover:ml-[2px] hover:mt-[2px] hover:mr-[-2px] hover:mb-[3em]   bg-[#042a2b] rounded-lg flex  justify-between items-center overflow-hidden mb-[3em]'>
                           <img src={process.env.PUBLIC_URL + '/assets/docs.png'} alt="logo" className='w-[4em] self-start ml-[-15px] mt-[-10px]' />
                            <a href="" >
                                <h3 className=' text-[#5eb1bf] mr-[1em]'>Pricing</h3>
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}> 
                        <div className='h-[9em] transition-all duration-300 hover:shadow-2xl hover:ml-[2px] hover:mt-[2px]  hover:mr-[-2px] hover:mb-[3em]   bg-[#5eb1bf] rounded-lg flex  justify-between items-center overflow-hidden mb-[3em]'>
                           <img src={process.env.PUBLIC_URL + '/assets/map.png'} alt="logo" className='w-[4em] self-start ml-[-15px] mt-[-10px]' />
                            <a href="" >
                                <h3 className=' text-[#fffff] mr-[1em]'>Guides</h3>
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}> 
                        <div className='h-[9em] transition-all duration-300 hover:shadow-2xl hover:ml-[2px] hover:mt-[2px]  hover:mr-[-2px] hover:mb-[3em]   bg-[#f2f2f2] rounded-lg flex  justify-between items-center overflow-hidden mb-[3em]'>
                           <img src={process.env.PUBLIC_URL + '/assets/question.png'} alt="logo" className='w-[4em] self-start ml-[-15px] mt-[-10px]' />
                            <a href="" >
                                <h3 className=' text-[#5eb1bf] mr-[1em]'>FAQs</h3>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    } 

    const homeSection8 = ()=>{
        return(
            <Container fluid>
                <Row className=' p-[2em] bg-[#042a2b]'>
                     <h2 className='text-[#f5f7fa] text-center mb-[1em]'>Sound good?</h2>
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
            {homeSection1()} 
            {homeSection2()} 
            {homeSection3()} 
            {homeSection4()} 
            {homeSection5()}
            {homeSection6()}
            {homeSection7()}
            {homeSection8()}
            
            <Footer/>
        </div>
        

      
    )
}