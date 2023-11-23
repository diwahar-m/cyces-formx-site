import Header from '../../features/Header/index'; 
import Footer from '../../features/Footer';
import {Container,Row, Col, Navbar} from 'react-bootstrap';   
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"; 
import {useState} from 'react';


const featuresNavbar = ['Collect','Monitor','Actions','Collaborate','Notifications','Analytics','Agency','Beyond']


export default function Features(){  

    const [toggler,updateToggler]= useState(false) 

    let updateToggle = () =>{
        updateToggler(!toggler);
    }

    const navbar =()=>{

        return(
            <Navbar expand="lg" sticky="top" className='bg-[#3a6061]'  > 
                <Container fluid    >
                    <Row className=' w-100'>

                        <Col xs={12} className='md:hidden h-[2.5em]' >
                            <div className='flex justify-between items-center'>
                                <h2 className='text-[#cdedf6]'>Features</h2> 
                                {!toggler && 
                                    <button type='button' onClick={updateToggle}>
                                        <IoIosArrowDown color='#cdedf6' />
                                    </button>
                                }
                                {
                                    toggler && 
                                    <button type='button' onClick={updateToggle} >
                                        <IoIosArrowUp color='#cdedf6' />
                                    </button>
                                }
                                

                                

                            </div>
                        </Col>  
                        
                        {toggler &&
                            <Col className='md:hidden'>
                                <div className='flex flex-col justify-between items-start pl-2 h-[16em] mt-[1em] pb-[1em]'>
                                    { featuresNavbar.map(each =>{
                                        return <a key={each} href ={'#'+each} className='text-[#042a2b] hover:text-[#20c997] no-underline cursor-pointer'>{each}</a>
                                    })}
                                </div>
                            </Col>
                        
                        }
                    


                        <Col className='hidden md:block  '>
                            <div className='h-[2.5em]  flex  justify-between items-center'>
                                    { featuresNavbar.map(each =>{
                                        return <a  className='hover:border-[#cdedf6] hover:border-b-4 cursor-pointer hover:text-[#cdedf6] h-[1.7em] text-base pb-[2.3em] mt-[1em] no-underline ' key={each} href ={'#'+each}>{each}</a>
                                    })}
                            </div>
                        </Col>
                    </Row>

                </Container>
            </Navbar>
           
        )
    } 

    const featureSection1 = ()=>{
        return(
            <Container fluid>
                <Row>
                    <Col className='bg-[#042a2b]'>
                        <div className='flex flex-col justify-center items-center text-center  p-[2em]'>
                            <h1 className='text-[#faf6f5] mb-[1em]'>Get boring from backends out of your to-do list!</h1> 
                            <p className='text-[#5eb1bf]'>Get data submissions, organize and automate them.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    } 

    const featureSection2 = () =>{
        return(
            <Container>
                <Row>
                <Col sm={12} className='text-center p-[4em]'>
                        <div>                           
                            <a className='mt-2 text-[#042a2b]'  href="https://www.youtube.com/watch?v=TEhmeJdezbk">
                                <strong className='flex justify-center '>
                                    <img src={process.env.PUBLIC_URL + '/assets/video-play-button.png'} className='playbutton-image mt-1'  alt="video-play-button"/>
                                    <p className='text-2xl ml-2 hover:underline decoration-[#007bff]'>Watch a quick 1 min product tour
                                    </p>
                                </strong>                               
                            </a> 
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    } 

    const featureSection3 = () =>{
        return(
            <Container>
                <Row className='flex'>
                    <Col xs={12}   className='p-[1em] '>  
                        <div className='flex flex-col justify-between sm:flex-row p-[4em]' id='Collect'> 
                            <div className='md:order-last p-[2em]' >
                                <img src={process.env.PUBLIC_URL + '/assets/collect.svg'} className=' mt-1'  alt="video-play-button"/>
                            </div>  
                            <div className=' text-left flex flex-col justify-center items-center'>
                                <h4 className='font-semibold'>Collect (Data Collection and Manipulation)</h4> 
                                <p className='text-xl my-3'>Understand your visitors using a contact form and collect their information effortlessly to determine your target audiences.</p> 
                                <ul className='list-disc text-lg'>
                                    <li>Take full control of how you collect data: formX support both<span className='font-semibold'> POST and JS based setup</span>,
                                        & be always AJAX ready!
                                    </li>
                                    <li><span className='font-semibold'>Avoid spam using pattern identification intelligence.</span> don’t waste valuable time sorting through spam. Enable google re-captcha and honeypots to weed them out.
                                    </li>
                                    <li>Let your submitters know you’re listening: send <span className='font-semibold' > customised auto-responders,</span> automate confirmation emails with a single click, and interact passively with your submitters!</li>
                                    <li> <span className='font-semibold'>Simplified file upload </span>with the latest beta feature: Your visitors will be able to upload files and images to your forms (beta).</li>
                                </ul>
                            </div>
                        </div>
                    </Col> 
                </Row> 

                <Row className='flex'>
                    <Col xs={12}   className='p-[1em] '>  
                        <div className='flex flex-col justify-between sm:flex-row p-[4em] ' id='Monitor'> 
                            <div className=' p-[2em]' >
                                <img src={process.env.PUBLIC_URL + '/assets/monitor.svg'} className=' mt-1'  alt="video-play-button"/>
                            </div>  
                            <div className=' text-left flex flex-col justify-center items-center'>
                                <h4 className='font-semibold'>Monitor (Intuitive Dashboard)</h4> 
                                <p className='text-xl my-3'>Our powerful CRM-friendly dashboard does more than just help manage metrics and insights. Use our intelligent workflows and increase productivity! It is completely customizable to all your requirements.</p> 
                                <ul className='list-disc text-lg'>
                                    <li>Access your dashboard anytime, anywhere: use our powerful readable view to access your dashboard across all platforms without any interruptions.</li>
                                    <li>Effective state management: 
                                        <span className='font-semibold'> tag or label submissions based on their state</span>
                                        (received, completed, in-progress, mark as read, spam etc.)
                                    </li>
                                    <li>Filter, search and sort your submissions at one place: use filters such as 
                                        <span className='font-semibold' > activity score</span> , state and other basic criteria such as date, name, email, status etc.</li>
                                    <li>Manage submissions with just a single click: make use of our one-click reply function to save time and double your productivity rates.</li>
                                </ul>
                            </div>
                        </div>
                    </Col> 
                </Row> 

                <Row className='flex'>
                    <Col xs={12}   className='p-[1em] '>  
                        <div id='Actions' className='flex flex-col justify-between sm:flex-row p-[4em] '> 
                            <div className='md:order-last p-[2em]' >
                                <img src={process.env.PUBLIC_URL + '/assets/actions.svg'} className=' mt-1'  alt="video-play-button"/>
                            </div>  
                            <div className=' text-left flex flex-col justify-center items-center'>
                                <h4 className='font-semibold'>Actions (Controllable Platform)</h4> 
                                <p className='text-xl my-3'>Keep track of your actions with a completely controllable platform.</p> 
                                <ul className='list-disc text-lg'>
                                    <li>Ensure better customer engagement:<span className='font-semibold'> schedule reminders and make notes </span>,
                                        about a submission while taking action.
                                    </li>
                                    <li>Maintain an activity score for all your users: Score each user depending on their timeline and activity log.
                                    </li>
                                    <li>Build workspaces and create forms on multiple domains: formX offers <span className='font-semibold' >multiple-domain management </span>
                                        where you can add several workspaces to your account.</li>
                                    <li> <span className='font-semibold'>Redirect your submitters </span>to another page: If you have a specific page you want your submitters to see, you can redirect them there using our auto-direct feature.</li>
                                </ul>
                            </div>
                        </div>
                    </Col> 
                </Row>  

                <Row className='flex'>
                    <Col xs={12}   className='p-[1em] '>  
                        <div id='Collaborate' className='flex flex-col justify-between sm:flex-row p-[4em] '> 
                            <div className=' p-[2em]' >
                                <img src={process.env.PUBLIC_URL + '/assets/collaborate.svg'} className=' mt-1'  alt="video-play-button"/>
                            </div>  
                            <div className=' text-left flex flex-col justify-center items-center'>
                                <h4 className='font-semibold'>Collaborate (Integrations)</h4> 
                                <p className='text-xl my-3'>Connect with other third-party apps to amplify your performance with formX. Use your preferred apps and get instant notifications and alerts.</p> 
                                <ul className='list-disc text-lg'>
                                    <li>Connect with all your favorite apps using Zapier: being Zapier-enabled, formX allows you to automate actions in several versatile apps.</li>
                                    <li>Receive notifications directly on your Slack account: enable incoming webhooks and get notified whenever you receive a submission.
                                    </li>
                                    <li>API</li>
                                    <li>Export your data in CSV format: view and analyze your form data in a CSV file.</li>
                                </ul>
                            </div>
                        </div>
                    </Col> 
                </Row>  

                <Row className='flex'>
                    <Col xs={12}   className='p-[1em] '>  
                        <div id='Notifications' className='flex flex-col justify-between sm:flex-row p-[4em] '> 
                            <div className='md:order-last p-[2em]' >
                                <img src={process.env.PUBLIC_URL + '/assets/notifications.svg'} className=' mt-1'  alt="video-play-button"/>
                            </div>  
                            <div className=' text-left flex flex-col justify-center items-center'>
                                <h4 className='font-semibold'>Notifications</h4> 
                                <p className='text-xl my-3'>Stay ahead of the game with instant notifications and alerts.</p> 
                                <ul className='list-disc text-lg'>
                                    <li>Use push notifications: enable your notes and scheduled reminders as popups in applications.</li>
                                    <li>Keep the entire team in the loop: send CCs of reminder emails and push notifications.</li>
                                    <li>Get notified about new submissions: monitor the frequency of submissions with e-mail updates on every submission.</li>
                                    <li>Get custom reports to gauge performance: have insights emailed to you instantly at any time!</li>
                                </ul>
                            </div>
                        </div>
                    </Col> 
                </Row>  

                <Row className='flex'>
                    <Col xs={12}   className='p-[1em] '>  
                        <div id='Analytics' className='flex flex-col justify-between sm:flex-row p-[4em] '> 
                            <div className=' p-[2em]' >
                                <img src={process.env.PUBLIC_URL + '/assets/analytics.svg'} className=' mt-1'  alt="video-play-button"/>
                            </div>  
                            <div className=' text-left flex flex-col justify-center items-center'>
                                <h4 className='font-semibold'>Analytics</h4> 
                                <p className='text-xl my-3'>Know your visitors in real-time with comprehensive analytics and make informed decisions based on their behavior.</p> 
                                <ul className='list-disc text-lg'>
                                    <li><span className='font-semibold'>Track your visitors :</span>Get a chronological timeline of submitters’ visits, track and facilitate visitor conversions.</li>
                                    <li><span className='font-semibold'> UTM Parameters Capture :</span>
                                        Track where your users come from and other metrics with our UTM support.
                                    </li>
                                    <li>Use geo-intelligence to know where your submitters are from: with formX, build business zones for improved operations.</li>
                                    <li>Get more customers by tracking form conversions: increase the number of leads and measure conversion rates.</li>
                                </ul>
                            </div>
                        </div>
                    </Col> 
                </Row> 

                <Row className='flex'>
                    <Col xs={12}   className='p-[1em] '>  
                        <div id='Agency' className='flex flex-col justify-between sm:flex-row p-[4em] '> 
                            <div className='md:order-last p-[2em]' >
                                <img src={process.env.PUBLIC_URL + '/assets/agency.svg'} className=' mt-1'  alt="video-play-button"/>
                            </div>  
                            <div className=' text-left flex flex-col justify-center items-center'>
                                <h4 className='font-semibold'>Agency</h4> 
                                <p className='text-xl my-3'><a href='/' className='text-[#5eb1bf] hover:underline'>Are you an agency? </a>Get add-ons to improve your functionality and boost performance.</p> 
                                <ul className='list-disc text-lg'>
                                    <li>Assign roles and access privileges to team members and admins: give your team access to your dashboard via multiple account management, for improved productivity and progress.</li>
                                    <li>Use formX for your clients with our multi-client access feature: help your clients reach their business goals through effective collaboration and improved communication.</li>
                                    <li>UTM Parameters Capture: Track where your users come from. Get to know their location amongst other metrics.</li>
                                    <li>Strict data privacy code: your information will never be disclosed to anyone, as per the GDPR.</li>
                                </ul>
                            </div>
                        </div>
                    </Col> 
                </Row> 
            </Container>
        )
    } 

    const featureSection4 = () =>{
        
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

    const featureSection5 = () =>{
        return(
            <Container fluid>
                <Row className='mb-5 p-[2em]'>
                    <div className='text-center mb-[3em]'>
                        <h2>Want to know more?</h2>
                    </div>
                    <Col xs={12} sm={6} md={4}> 
                        <div className='h-[9em] transition-all duration-300 hover:shadow-2xl hover:ml-[2px] hover:mt-[2px] hover:mr-[-2px] hover:mb-[3em]   bg-[#042a2b] rounded-lg flex  justify-between items-center overflow-hidden mb-[3em]'>
                           <img src={process.env.PUBLIC_URL + '/assets/docs.png'} alt="logo" className='w-[4em] self-start ml-[-15px] mt-[-10px]' />
                            <a href="/pricing" >
                                <h3 className=' text-[#5eb1bf] mr-[1em]'>Pricing</h3>
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}> 
                        <div className='h-[9em] transition-all duration-300 hover:shadow-2xl hover:ml-[2px] hover:mt-[2px]  hover:mr-[-2px] hover:mb-[3em]   bg-[#5eb1bf] rounded-lg flex  justify-between items-center overflow-hidden mb-[3em]'>
                           <img src={process.env.PUBLIC_URL + '/assets/map.png'} alt="logo" className='w-[4em] self-start ml-[-15px] mt-[-10px]' />
                            <a href="/" >
                                <h3 className=' text-[#fffff] mr-[1em]'>Guides</h3>
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}> 
                        <div className='h-[9em] transition-all duration-300 hover:shadow-2xl hover:ml-[2px] hover:mt-[2px]  hover:mr-[-2px] hover:mb-[3em]   bg-[#f2f2f2] rounded-lg flex  justify-between items-center overflow-hidden mb-[3em]'>
                           <img src={process.env.PUBLIC_URL + '/assets/question.png'} alt="logo" className='w-[4em] self-start ml-[-15px] mt-[-10px]' />
                            <a href="/" >
                                <h3 className=' text-[#5eb1bf] mr-[1em]'>FAQs</h3>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    } 

    const featureSection6 = () =>{
        return(
            <Container fluid>
                <Row className='mb-5 p-[2em]'>
                    <div className='text-center mb-[3em]'>
                        <p className='text-[#666666] text-xl font-normal'>Find our apps on</p>
                    </div>
                    <Col xs={12} sm={6} className='flex justify-center md:justify-end '> 
                        <div className='mb-4'>
                           
                            <a href="/" >
                                <img src={process.env.PUBLIC_URL + '/assets/App_Store_Badge_Eng.svg'} alt="logo" className='w-[17em]  sm:ml-auto' />
                            </a>
                        </div>
                    </Col> 
                    <Col xs={12} sm={6} className='flex justify-center md:justify-start'> 
                        <div className='mb-4'>
                           
                            <a href="/" >
                            <img src={process.env.PUBLIC_URL + '/assets/google-play-badge.png'} alt="logo" className='w-[17em] md:w-[19em]' />
                            </a>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        )
    } 

    const featureSection7 = ()=>{
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

        <div className='w-100 min-h-screen'>
            <Header/>
            {navbar()} 
            {featureSection1()}
            {featureSection2()}
            {featureSection3()}  
            {featureSection4()}
            {featureSection5()}
            {featureSection6()}
            {featureSection7()}
            <Footer/>

        </div>
    )
}