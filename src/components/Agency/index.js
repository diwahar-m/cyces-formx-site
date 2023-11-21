import Header from '../../features/Header/index'; 
import Footer from '../../features/Footer';
import {Container,Row, Col, Button} from 'react-bootstrap';  


export default function Agency(){ 

    const agencySection1 = ()=>{
        return(
            <div> 
                <Container fluid className='bg-[#042a2b] py-5' >
                    <Row className=' flex justify-center align-center mb-[3em]'>
                        <Col sm={6}  className='mb-[1em]'>
                            
                                <div className='pl-[4em] mt-4 w-100 flex flex-col justify-center items-center ' > 
                                    <h1 className='mb-[1em] ml-auto text-left text-[#ffffff] text-[3em] '>Give your clients submissions & insights at their finger tips.</h1> 
                                    
                                    <button type='button'  className=' h-[2.3em]    mr-auto  text-white cursor-pointer
                                       font-bold bg-[#ef7b45] hover:bg-[#f25f1b] px-[1em] rounded-lg  '>Get started</button>                        
                                        
                                    
                                </div> 
                        </Col>
                        <Col sm={6} > 
                            <div className=' flex justify-center items-center mt-4 w-100 h-100 pl-[2em]'>
                                <img src={process.env.PUBLIC_URL + '/assets/formx-agency-hero.png'} alt="logo" className='w-[20em] sm:my-auto sm:w-[10em]  
                                    md:w-[26em] md:h-[20em] lg:w-[33em]' />
                            </div>   
                                    

                               

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    } 

    const agencySection2 = ()=>{
        return(
            <Container fluid className="bg-[#f2f2f2] h-100 flex"> 
                <Row className='mx-auto py-[2em]'>
                    <Col sm={12} className='flex justify-center text-center'> 
                        <div> 
                            <h2>Your very own all-in-one solution to implement form backends for all your clients</h2> 
                            <h6 className='mb-3 mt-3 text-lg text-[#666666]'>Customize formX with our
                             white-label dashboard, that both your team and your clients can access</h6>
                            <h6 className='mb-5 text-[#666666] text-lg'>#Productive #Affordable #Smart Solution for Agencies</h6>
                            
                        </div>
                        
                    </Col>
                </Row>


            </Container>

        )
    } 

    const agencySection3 = ()=>{
        return(
            <Container fluid>
                <Row className='p-[2em] flex  '> 
                    
                    <Col  xs={12} sm={6} md={4}  > 
                        <div className='min-h-[19.3em] bg-[#f2f2f2] rounded-lg flex flex-col justify-center align-center p-2 m-3
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                            <img src={process.env.PUBLIC_URL + '/assets/analysis.svg'} alt="logo" className='w-[4em] mx-auto'/>
                            <h4 className='text-center'>Wow your clients with insightful reports on form submissions</h4> 
                            <p className='text-center'>View and analyse user activity on your client’s website</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}  > 
                        <div className='min-h-[19.3em] bg-[#f2f2f2] rounded-lg flex flex-col justify-center align-center p-2 m-3
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                            <img src={process.env.PUBLIC_URL + '/assets/spam.svg'} alt="logo" className='w-[4em] mx-auto'/>
                            <h4 className='text-center'>Using emails to send leads to clients can be a nightmare!</h4> 
                            <p className='text-center'>Our sophisticated dashboard lets you manage all your leads and their website engagement.</p> 
                            <span className='font-semibold text-center text-[#666666]'>Absolutely have to use emails? Automate them.</span>
                        </div>
                    </Col>
                    <Col  xs={12} sm={6} md={4}  > 
                        <div className='min-h-[19.3em] bg-[#f2f2f2] rounded-lg flex flex-col justify-center align-center p-2 m-3
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                            <img src={process.env.PUBLIC_URL + '/assets/crm.svg'} alt="logo" className='w-[4em] mx-auto'/>
                            <h4 className='text-center'>Enough with the complex CRM web to lead workflows.</h4> 
                            <p className='text-center'>Set up a process pipeline with our in-built status flags.</p>
                        </div>
                    </Col>
                     
                    <div className='flex justify-center'>
                        <a href="" className='text-center text-[#5eb1bf] hover:text-[#00000]'>View all features</a>
                    </div>

                </Row>
            </Container>
        )
    } 

    const agencySection4 = ()=>{
        return(
            <Container>
                <Row className='flex '>

                    <Col xs={12}   className='p-[0.2em] '>  
                        <div className='flex flex-col justify-between sm:flex-row p-[2em]' id='Collect'> 
                            <div className='w-2/5 md:order-last p-[2em]' >
                                <img src={process.env.PUBLIC_URL + '/assets/agency.svg'} className=' mt-1'  alt="video-play-button"/>
                            </div>  
                            <div className='w-3/5 text-left flex flex-col justify-center items-center'>
                                <h4 className='font-semibold mb-[2em]'>How can formX help you?</h4> 
                                 
                                <ul className='list-disc text-lg'>
                                    <li className='mb-[1em]'><span className='font-semibold '>Build great client experiences:</span>,
                                    Using our solid form backend tool, collect data, organize and automate them, based on each client's use cases.
                                    </li>
                                    <li><span className='font-semibold'>Enable your clients to know their custo
                                    mers better: </span>
                                    Keep your clients in the loop. Invite them to manage and understand their data using our white-labelled dashboards.
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                    </Col> 
                </Row> 

                <Row className='flex '>
                    <Col xs={12}   className='p-[0.2em] '>  
                        <div className='flex flex-col justify-between sm:flex-row p-[2em] ' id='Monitor'> 
                            <div className=' p-[2em]' >
                                <img src={process.env.PUBLIC_URL + '/assets/collaborate.svg'} className=' mt-1'  alt="video-play-button"/>
                            </div>  
                            <div className=' text-left flex flex-col justify-center items-center'>
                                
                                <ul className='list-disc text-lg'>
                                    <li className='mb-[1em]'>
                                        <span className='font-semibold '>Manage multiple accounts: </span>,
                                        Got multiple forms for multiple clients? Store and manage them all in one place!
                                    </li>
                                    <li><span className='font-semibold'>Work with a simplified CRM-lite solution: </span>
                                    Keep track of the various ‘states’ of each form submission as they move through the process pipeline.</li>
                                   
                                </ul>
                            </div>
                        </div>
                    </Col> 
                </Row> 

                <Row className='flex'>
                    <Col xs={12}   className='p-[0.2em] '>  
                        <div id='Actions' className='flex flex-col justify-between sm:flex-row p-[2em] '> 
                            <div className='md:order-last p-[2em]' >
                                <img src={process.env.PUBLIC_URL + '/assets/beyond.svg'} className=' mt-1'  alt="video-play-button"/>
                            </div>  
                            <div className=' text-left flex flex-col justify-center items-center'>
                                <h4 className='font-semibold'>Actions (Controllable Platform)</h4> 
                                <ul className='list-disc text-lg'>
                                    <li className='mb-[1em]'>
                                        <span className='font-semibold '>Save time at every stage of the funnel:  </span>,
                                        FormX takes charge of your database, routes, API endpoints, dashboards creation and access management.
                                    </li>
                                    <li><span className='font-semibold'>Stay informed of all form activities:</span>
                                    Get regular updates and notifications of all the proceedings on your clients’ forms.</li>
                                   
                                </ul>
                            </div>
                        </div>
                    </Col> 
                </Row>  
            </Container> 
        )
    } 

    const agencySection5 = () =>{
        return(
            <Container fluid className='bg-[#cdedf6] '>
                <Row className=' h-[10rem] flex justify-center '>
                    <Col md={9} className='my-auto  '> 
                        <div className='flex flex-col  md:flex-row  justify-center align-center'>

                            <h2 className=' text-center mr-1 mx-auto'>All you have to do is go point your forms to us and we will take care of the rest!  </h2> 
                            <button type='button'  className='w-[10em]  md:w-[12em] mx-auto  text-white cursor-pointer font-bold bg-[#ef7b45] hover:bg-[#f25f1b] p-1 rounded-lg  '>Get started</button>                        
                        </div>

                        
                    </Col>
                </Row>
            </Container>
        )
    } 

    const agencySection6 = () =>{
        return(
            <Container fluid>
                <Row className='mb-5 p-[2em]'>
                    <div className='text-center mb-[3em]'>
                        <h2>Frequently Asked Questions</h2> 
                    </div> 
                    <Col xs={12} >
                        <div className='flex flex-col justify-between sm:flex-row'>
                            <div className='mb-[1.5em] sm:mr-[1em] w-2/4'>
                                <h5 className='text-[#222222]'>Why is formX simpler than solutions like Hubspot?</h5> 
                                <p className='#666666'>Hubspot is a bloated solution that would be overkill in this situation.</p>
                            </div>
                            <div className='mb-[1.5em] sm:ml-[1em]  w-2/4'>
                                <h5 className='text-[#222222]'>Can formX be integrated with other 3rd party apps?</h5> 
                                <p className='#666666'>Yes. You can connect formX with all third party integrations supported by Zapier.</p>
                            </div>
                        </div>
                        
                    </Col>
                    <Col xs={12} >
                        <div className='flex flex-col justify-between sm:flex-row'>
                            <div className='mb-[1.5em] sm:mr-[1em] w-2/4'>
                                <h5 className='text-[#222222]'>Can we integrate with wordpress and other static site generators?</h5> 
                                <p className='#666666'>Yup, it takes less than 5 minutes to integrate end to end.</p>
                            </div>
                            <div className='mb-[1.5em] sm:ml-[1em] w-2/4'>
                                <h5 className='text-[#222222]'>Do I have total control over my data?</h5> 
                                <p className='#666666'>Yup API, and a lot more. 
                                    <span ><a href="/features" className='text-[#007bff] hover:text-[#067796] hover:underline hover:decoration-[#067796]'>
                                        Know more</a>
                                    </span>
                                </p>
                            </div>
                        </div>
                        
                    </Col>
                    
                </Row>
            </Container>
        )
    }

    return(
        <div className='w-100 min-h-screen'> 
            <Header/>  
            {agencySection1()}
            {agencySection2()}
            {agencySection3()}
            {agencySection4()}
            {agencySection5()}
            {agencySection6()}
            <Footer/>

        </div>
    )
}