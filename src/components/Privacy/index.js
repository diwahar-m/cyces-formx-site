import Header from '../../features/Header/index'; 
import Footer from '../../features/Footer';
import {Container,Row, Col} from 'react-bootstrap'; 

export default function Privacy() { 

    const privacySection1 = ()=>{
        return(
            <Container fluid>
                <Row>
                    <Col className='bg-[#042a2b]'>
                        <div className='flex flex-col justify-center items-center text-center w-100  p-[2em]'>
                            <h1 className='text-[#faf6f5] mb-[1em] mt-[1.5em] text-5xl'>Privacy Policy</h1> 
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    } 

    const privacySection2 = ()=>{
        return(
            <Container fluid>
                <Row className='mb-5 p-[3em]'>
                     
                    <Col xs={12} >
                        <div className='flex flex-col justify-between md:px-[2em]'>
                            <div className='mb-[1.5em] '>
                                <h1 className='text-[#222222] text-4xl font-semibold mb-[1em]'>Privacy Policy</h1> 
                                
                                    <p className='text-[#555555]  mb-[1em] text-base' >Cyces Innovation Labs LLP ("us", "we", or "our") operates the http://formx.stream/ website (the "Service").</p>
                                    <p className='text-[#555555]  mb-[1em] text-base'>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy for Cyces Innovation Labs LLP is managed through 
                                        <a className='text-[#5eb1bf]' href='https://www.freeprivacypolicy.com/free-privacy-policy-generator/'>Free Privacy Policy</a>
                                    </p>                                   
                                    <p className='text-[#555555]  mb-[1em] text-base'>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from http://formx.stream/</p>                                   
                                
                            </div>  

                            <div className='mb-[1.5em] '>
                                <h2 className='text-[#222222] text-3xl font-semibold mb-[1em]'>Information Collection And Use</h2> 
                                
                                    <p className='text-[#555555]  mb-[1em] text-base' >We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                                    
                            </div>  

                            <div className='mb-[1.5em]  '>
                                <h3 className='text-[#222222] text-3xl font-semibold mb-[1em]'>Types of Data Collected</h3> 
                                <h4 className='text-[#222222] text-2xl font-semibold mb-[1em]'>Personal Data</h4> 
                                <p className='text-[#555555]  mb-[1em] text-base' >While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
                                <ul className='text-[#2c2c2c] list-disc text-base'>
                                    <li className='mb-[0.6em]' >Email address</li>
                                    <li className='mb-[0.6em]'>First name and last name</li>                                   
                                    <li className='mb-[0.6em]'>Cookies and usage data</li>                                   
                                </ul> 
                            </div> 
                            <div className='mb-[1.5em]  '>
                                <h2 className='text-[#222222] text-3xl font-semibold mb-[1em]'>Usage Data</h2> 
                                <p className='text-[#555555]  mb-[1em] text-base' >We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                                 
                            </div> 
                            <div className='mb-[1.5em]  '>
                                <h4 className='text-[#222222] text-2xl font-semibold mb-[1em]'>Tracking & Cookies Data</h4> 
                                <p className='text-[#555555]  mb-[1em] text-base' >We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
                                <p className='text-[#555555]  mb-[1em] text-base' >Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>
                                <p className='text-[#555555]  mb-[1em] text-base' >You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
                                <p className='text-[#555555]  mb-[1em] text-base' >Examples of Cookies we use:</p> 
                                <ul className='text-[#2c2c2c] list-disc text-base'>
                                    <li className='mb-[0.6em]'>
                                        <span className='text-base text-[#2c2c2c] font-semibold' >Session Cookies. </span>
                                        We use Session Cookies to operate our Service.
                                    </li>
                                    <li className='mb-[0.6em]'>
                                        <span className='text-base text-[#2c2c2c] font-semibold' >Preference Cookies. </span>
                                        We use Preference Cookies to remember your preferences and various settings.
                                    </li>
                                    <li >
                                        <span className='text-base text-[#2c2c2c] font-semibold' >Security Cookies. </span>
                                        We use Security Cookies for security purposes.
                                    </li>
                                                           
                                </ul>
                                 
                            </div>  

                            <div className='mb-[1.5em]  '>
                                <h2 className='text-[#222222] text-3xl font-semibold mb-[1em]'>Use of Data</h2> 
                                <p className='text-[#555555]  mb-[1em] text-base' >Cyces Innovation Labs LLP uses the collected data for various purposes:</p>
                                <ul className='text-[#2c2c2c] list-disc text-base'>
                                    <li className='mb-[0.6em]'>To provide and maintain the Service</li>
                                    <li className='mb-[0.6em]'>To notify you about changes to our Service</li>                                   
                                    <li className='mb-[0.6em]' >To allow you to participate in interactive features of our Service when you choose to do so</li>                                   
                                    <li className='mb-[0.6em]'>To provide customer care and support</li>
                                    <li className='mb-[0.6em]' >To provide analysis or valuable information so that we can improve the Service</li>                                   
                                    <li className='mb-[0.6em]' >To monitor the usage of the Service</li>                                   
                                    <li className='mb-[0.6em]'>To detect, prevent and address technical issues</li>                                   
                                </ul> 
                            </div>  

                            <div className='mb-[1.5em] '>
                                <h2 className='text-[#222222] text-3xl font-semibold mb-[1em]'>Transfer of Data</h2> 
                                <p className='text-[#555555]  mb-[1em] text-base' >Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
                                <p className='text-[#555555]  mb-[1em] text-base' >If you are located outside India and choose to provide information to us, please note that we transfer the data, including Personal Data, to India and process it there.</p>
                                <p className='text-[#555555]  mb-[1em] text-base' >Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
                                <p className='text-[#555555]  mb-[1em] text-base' >Cyces Innovation Labs LLP will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
                                 
                            </div>  

                            <div className='mb-[1.5em] '>
                                <h2 className='text-[#222222] text-3xl font-semibold mb-[1em]'>Disclosure Of Data</h2> 
                                <h3 className='text-[#222222] text-2xl font-semibold mb-[1em]'>Legal Requirements</h3> 
                                <p className='text-[#555555]  mb-[1em] text-base' >Cyces Innovation Labs LLP may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                                <ul className='text-[#2c2c2c] list-disc text-base'>
                                    <li className='mb-[0.6em]'>To comply with a legal obligation</li>
                                    <li className='mb-[0.6em]'>To protect and defend the rights or property of Cyces Innovation Labs LLP</li>                                   
                                    <li className='mb-[0.6em]' >To prevent or investigate possible wrongdoing in connection with the Service</li>                                   
                                    <li className='mb-[0.6em]'>To protect the personal safety of users of the Service or the public</li>
                                    <li className='mb-[0.6em]' >To protect against legal liability</li>                                   
                                                                     
                                </ul> 
                            </div> 

                            <div className='mb-[1.5em] '>
                                <h2 className='text-[#222222] text-3xl font-semibold mb-[1em]'>Security of Data</h2> 
                                <p className='text-[#555555]  mb-[1em] text-base' >The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
                                
                            </div>  

                            <div className='mb-[1.5em] '>
                                <h2 className='text-[#222222] text-3xl font-semibold mb-[1em]'>Service Providers</h2> 
                                <p className='text-[#555555]  mb-[1em] text-base' >We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
                                <p className='text-[#555555]  mb-[1em] text-base' >These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
                                
                            </div>  

                            <div className='mb-[1.5em]  '>
                                <h3 className='text-[#222222] text-3xl font-semibold mb-[1em]'>Analytics</h3> 
                                 
                                <p className='text-[#555555]  mb-[1em] text-base' >We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
                                <ul className='text-[#2c2c2c] list-disc text-base'>
                                    <li className='mb-[0.6em] font-bold'>Google Analytics</li>
                                                                    
                                </ul> 
                                <ul className='text-[#2c2c2c] list-none text-base'>
                                    <li className='mb-[0.6em]'>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</li>
                                    <li className='mb-[0.6em]'>You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.</li>                                   
                                    <li className='mb-[0.6em]'>For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page:
                                        <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a></li>                                   
                                </ul> 
                            </div> 

                            <div className='mb-[1.5em] '>
                                <h2 className='text-[#222222] text-3xl font-semibold mb-[1em]'>Links To Other Sites</h2> 
                                    <p className='text-[#555555]  mb-[1em] text-base' >Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
                                    <p className='text-[#555555]  mb-[1em] text-base' >We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                            </div> 

                            <div className='mb-[1.5em] '>
                                <h2 className='text-[#222222] text-3xl font-semibold mb-[1em]'>Children's Privacy</h2> 
                                    <p className='text-[#555555]  mb-[1em] text-base' >Our Service does not address anyone under the age of 18 ("Children").</p>
                                    <p className='text-[#555555]  mb-[1em] text-base' >We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>
                            </div> 

                            <div className='mb-[1.5em] '>
                                <h2 className='text-[#222222] text-3xl font-semibold mb-[1em]'>Changes To This Privacy Policy</h2> 
                                    <p className='text-[#555555]  mb-[1em] text-base' >We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                                    <p className='text-[#555555]  mb-[1em] text-base' >We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
                                    <p className='text-[#555555]  mb-[1em] text-base' >You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                            </div> 

                            <div className='mb-[1.5em] '>
                                <h2 className='text-[#222222] text-3xl font-semibold mb-[1em]'>Contact Us</h2> 
                                <p className='text-[#555555]  mb-[1em] text-base' >If you have any questions about this Privacy Policy, please contact us:</p>
                                <ul className='text-[#2c2c2c] list-disc text-base'>
                                    <li className='mb-[0.6em] '>By email: 
                                        <span className='font-bold'> support@formx.stream</span>
                                    </li>
                                                                    
                                </ul>     
                            </div> 
                        </div>
                        
                    </Col>
                    
                </Row>
            </Container>
        )
    }  

    const privacySection3 = () =>{
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

    return (
        <div className="w-100 min-h-screen">
            <Header/> 
                {privacySection1()}
                {privacySection2()}
                {privacySection3()}
            <Footer/>
        </div>
    )
}