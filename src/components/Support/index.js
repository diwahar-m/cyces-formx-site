import {useState} from 'react';
import Header from '../../features/Header/index.js';
import Footer from '../../features/Footer/index.js';
import {Container,Row, Col} from 'react-bootstrap';


export default function Support(){  

    const [form, updateForm] = useState({}); 

        let updateHandler = (event)=>{
            updateForm({...form , [event.target.id] : event.target.value}) 
           
        } 

        const submitHandler = (event) =>{
            event.preventDefault();
            console.log(form); 
            updateForm({})
        }

    const supportSection1 = ()=>{
        return(
            <Container fluid>
                <Row>
                    <Col className='bg-[#042a2b]'>
                        <div className='flex flex-col justify-center items-center text-center  p-[4em]'>
                            <h1 className='text-[#faf6f5] mb-[1em] text-3xl md:text-5xl'>The support team is here to help.</h1> 
                           
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    }  

    const supportSection2 = ()=>{


        

        return(
            <Container fluid>
                <Row className='mx-auto'> 
                    <Col xs={12} className='flex justify-center '>
                        <div className='flex flex-col text-center mb[2em]'>
                            <h2 className='mt-[1em]'>Fill in the support form below we will get back to you.</h2>
                            <h4 className='mt-[1em] '>Our current response time is about 30 minutes.</h4>
                        </div>
                    </Col> 

                    <Col xs={12} className='flex justify-center '>
                        <div className='flex flex-col mb-[2em] lg:px-[17em] md:px-[5em] sm:px-[2em] w-100 '>
                            <form onSubmit={submitHandler}>
                                <div className='flex flex-col mb-[1em]' >
                                    <label htmlFor='name' className='text-left text-base text-[#2c2c2c] mb-[0.5em]'>Your Name</label> 
                                    <input value={form.name} onChange={updateHandler} type='text' id='name' placeholder='Your First Name' className=' h-[2.5em] pl-[0.5em] border-1 border-[#ced4da]
                                     text-base rounded-md 
                                     focus:shadow-[#8bf7f6] focus:outline-none focus:ring focus:ring-blue-300 focus:border-[#2ac7c4] focus:shadow-md ' />
                                </div> 

                                <div className='flex flex-col mb-[1em]' >
                                    <label htmlFor='email' className='text-left text-base text-[#2c2c2c] mb-[0.5em]'>Registeres Email Address</label> 
                                    <input value={form.email} onChange={updateHandler} type='email' id='email' placeholder='Your email address' className=' h-[2.5em] pl-[0.5em] border-1 border-[#ced4da]
                                     text-base rounded-md 
                                     focus:shadow-[#8bf7f6] focus:outline-none focus:ring focus:ring-blue-300 focus:border-[#2ac7c4] focus:shadow-md ' />
                                </div>  

                                <div className='flex flex-col mb-[1em]' >
                                    <label htmlFor='subject' className='text-left text-base text-[#2c2c2c] mb-[0.5em]'>Subject</label> 
                                    <select value={form.subject} onChange={updateHandler} name='subject' id='subject' placeholder='Choose One:' className=' h-[2.5em] pl-[0.5em] pr-[1em] border-1 border-[#ced4da]
                                     text-base rounded-md 
                                     focus:shadow-[#8bf7f6] focus:outline-none focus:ring focus:ring-blue-300 focus:border-[#2ac7c4] focus:shadow-md ' > 
                                        <option  value='' >Choose One:</option>
                                        <option value='General Customer Service'>General Customer Service</option>
                                        <option value='Suggestions'>Suggestions</option>
                                        <option value='Product Support'>Product Support</option>
                                    </select>
                                
                                </div>  

                                <div className='flex flex-col mb-[1em]' >
                                    <label htmlFor='priority' className='text-left text-base text-[#2c2c2c] mb-[0.5em]'>Priority</label> 
                                    <select value={form.priority} onChange={updateHandler} name='priority' id='priority' placeholder='Choose One:' className=' h-[2.5em] pl-[0.5em] pr-[1em] border-1 border-[#ced4da]
                                     text-base rounded-md 
                                     focus:shadow-[#8bf7f6] focus:outline-none focus:ring focus:ring-blue-300 focus:border-[#2ac7c4] focus:shadow-md ' > 
                                        <option  value=''>Choose One:</option>
                                        <option value='High'>High</option>
                                        <option value='Medium'>Medium</option>
                                        <option value='Low'>Low</option>
                                    </select>
                                
                                </div>  

                                <div className='flex flex-col mb-[1em]' >
                                    <label htmlFor='message' className='text-left text-base text-[#2c2c2c] mb-[0.5em]'>Message</label> 
                                    <textarea value={form.message} onChange={updateHandler} rows="8" id='message'  className='h-[13em] p-[0.5em] border-1 border-[#ced4da] text-base rounded-md 
                                     focus:shadow-[#8bf7f6] focus:outline-none focus:ring focus:ring-blue-300 focus:border-[#2ac7c4] focus:shadow-md ' ></textarea>
                                </div>   
                                <div className='flex justify-center items-center'>
                                    <button type='submit'  className=' h-[2.3em]  w-[7em] mx-auto  text-white cursor-pointer font-bold bg-[#ef7b45] hover:bg-[#f25f1b] p-1 rounded-lg  '>Send</button>                        
                                </div>


                            </form>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        )
    }

    return(
        <div className='w-100 min-h-screen'>
            <Header/>
            {supportSection1()} 
            {supportSection2()} 
            
            <Footer/>

        </div>
    )
}