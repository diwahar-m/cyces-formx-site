import React from 'react'; 
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './style.css'
 
export default function BlogItem(props){ 

    const navigate = useNavigate();
    const {card} = props;
    console.log(card)
    
    return(
        <Col xs={12}  md={6} lg={4}  id={card.id}>
            <div  className='min-h-[30em] hover:shadow-lg bg-[#f2f2f2] rounded-lg flex flex-col justify-between items-left w-[22em]  md:w-[22em] p-[2em] mx-auto mb-5'>
                <h3  className= ' text-2xl text-[#2a3848] font-bold  '>
                    <Link to={`/blog/${card.id}`}  id='link'  className= 'no-underline'>{card.title}</Link></h3> 
                <p className='text-base'>{card.description}</p> 
                <button type='button' onClick={()=>{navigate(`/blog/${card.id}`)}}  className=' h-[2.3em] mr-auto  text-white cursor-pointer font-bold bg-[#ef7b45] hover:bg-[#f25f1b] px-[1em] rounded-lg  '>More Details</button>                        
            </div> 
        </Col>
    )   
}