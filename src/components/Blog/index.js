import Header from '../../features/Header/index'; 
import Footer from '../../features/Footer';
import {Container,Row, Col} from 'react-bootstrap';  
import {v4 as uuidv4} from 'uuid'; 
import BlogItem from '../../features/BlogItem/index.js';

const blogList = [
    {
        id:uuidv4(),
        title:'How To Choose The Right Colour For A Call-To-Action Button', 
        description:'Does button CTA colour play a role in getting clicks? An eye-catching, high-contrast button is key to getting your users’ attention, but that’s not all. The colour of the button is actually an important consideration in driving users to click. One..'
    },
    {
        id:uuidv4(),
        title:'7 Ways To Increase Your Conversion Rates By Simply Altering Your CTA Placement', 
        description:'Why is CTA placement important for conversions Why is CTA placement important for conversions? CTAs are the cornerstone of any successful marketing campaign. They’re the final step, where you try to convert your audience into an actual customer by asking..'
    },
    {
        id:uuidv4(),
        title:'How To Brainstorm For CTA Copy Using AI Writing Tool (And Save So Much Time)', 
        description:'We all know why CTAs (calls-to-action) work. They’re a core part of any marketing campaign. It’s when you start trying to write them – that’s where the problems begin.  Has your brain ever just gone numb from all of the copywriting..'
    },
    {
        id:uuidv4(),
        title:'How To Write Attention-Grabbing, Irresistible CTAs', 
        description:'Why the CTA button copy needs more attention  It’s the last thing your user sees before closing the deal. It’s what either makes or breaks them. And sometimes, it’s the only thing that matters. Your CTA button copy is more important than..'
    },
    {
        id:uuidv4(),
        title:'A Complete Guide To CTAs, The Ultimate Weapon To Increase Conversion Rates', 
        description:'No website (or form) is complete without a strong CTA. The CTA is the final step in your conversion process. It should represent the culmination of your marketing plan and what you’re ultimately hoping to achieve through your marketing efforts. When..'
    },
    {
        id:uuidv4(),
        title:'Why You Should Build Static Websites: Use-cases And Benefits', 
        description:'Static sites are great when you’re starting a business and want a domain name, but don’t want to spend a ton of money on your website until you know if your idea can be profitable or not. You may also like static sites if you’re already..'
    },
    {
        id:uuidv4(),
        title:'How To Quickly Add Contact Form To Your Static Website', 
        description:'Why adding a contact form to a static website can be tricky One of the biggest complaints about static websites is that they don’t allow you to easily collect user data—like when a visitor wants to sign up for your newsletter, or email you a question...'
    },

]


export default function Blog(){     

    const blogSection1 = ()=>{
        return(
            <Container fluid>
                <Row>
                    <Col className='bg-[#042a2b]'>
                        <div className='flex flex-col justify-center items-center text-center w-100  p-[2em]'>
                            <h1 className='text-[#faf6f5] mb-[1em] mt-[1.5em] text-5xl'>Blog</h1> 
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    }  

    const homeSection5 = ()=>{
        return(
            <Container fluid>
                <Row className='p-[2em] flex  '> 
                   
                    <Col xs={12} sm={6} md={4} lg={3} > 
                        <div className='min-h-[15em]  hover:shadow-lg bg-[#f2f2f2] rounded-lg flex flex-col justify-center align-center p-2 m-3
                         transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '>
                            <img src={process.env.PUBLIC_URL + '/assets/shield.svg'} alt="logo" className='w-[3.5em]  mx-auto'/>
                            <h4 className='text-center'>Flexibility & Security</h4> 
                            <p className='text-center'>Take full control of how you collect data via JS or POST. Security by design.</p>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        )
    } 

    return(
        <div className='home-container w-100 min-h-screen'>
            <Header/>  
            
            {blogSection1()}
            
            <Container fluid>
                <Row className='p-[2em] flex  '> 
                    {blogList.map(each =>(
                        <BlogItem key={each.id} card={each}/>
                    ))}
                </Row>
            </Container>
                
            <Footer/>
        </div>
    )
} 

