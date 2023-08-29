import React from 'react'
import '../css/sectionfour.css'
import vs from '../assets/Saved Pictures/substrate-playground.png'
import { Container } from 'react-bootstrap'

export default function Sectionfour() {
  return (
    <Container className='my-5'>
        <div className='bg-ganger'>
        <div className="d-flex m-5 " style={{ justifyContent:"space-between"}}>
            <div style={{display:"flex",flexWrap:"wrap",width:"400px"}} >
                <h1 >
                    Odd web chain and applic
                </h1>
            </div>
            <div className=' text-left ps-5' style={{width:"500px"}}>
                <p>Gaming and sports</p>
                <p>Lorem, ipsum.</p> 
                <p>Lorem.</p>
                <p>Lorem, ipsum.</p>
                <p>Lorem.</p>
                <p>Lorem.</p>
                <p>Lorem, ipsum.</p>
            </div>
            </div>
            <div className='text-center'>
            <button className='p-2 bbb'> Join thr chain</button>

            </div>
            
            </div>
        <div>
        <div className="d-flex m-5 py-5" style={{justifyContent:"space-between"}}>
            <div style={{display:"flex",flexWrap:"wrap",width:"400px"}} >
                <h1 >
                    Odd web toren utilization
                </h1>
            </div>
            <div className=' text-left ps-5 ' style={{width:"500px"}}>
                <p>Validate the network</p>
                <p>Lorem, ipsum.</p> 
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
                
                <p>Lorem, ipsum.</p>
            </div>
        </div>
        </div>
        <div>
        <div className="d-flex m-5" style={{justifyContent:"space-between",gap:"200px"}}>
            <div>
                <h1>
                    Build with confidence
                </h1>
            </div>
            <div>
                <div style={{width:"550px"}}>
                <img src={vs} alt="" style={{width:"100%"}} />
                </div>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi corrupti beatae temporibus qui at.</p>
               <div className='d-flex '>
                <button className='border px-3 py-2 bb2 'style={{border:"3px solid white"}}>Learn More</button>
                <button className=' px-3 py-2 bbb mx-3'>Playground</button>
               </div>
            </div>
        </div>
        
        </div>



        <section className='my-5'>
            <h1 className='text-center ddd '> Take Flight</h1>
        <div className='d-flex    ' style={{justifyContent:"space-between"}}>
        <div className="d-flex px-5 " >
            <article className='mb-5 d-flex mmm '>
            
        
            <div className='fourbox text-left  d-block ps-5'>
            <h1>BUILD</h1>
                <div className='p mt-4'>
                <p>ODD Docs </p>
                <p>Learn ODD.</p>
                </div>
                
            </div>
            <div className='what p-5  '>
                   
            </div>
                
                
            </article>            
           
          
        </div>
        <div className="d-flex px-5" >
            <article className='mb-5 d-flex mmm '>
            
        
            <div className=' pt-3  fourbox2 text-center  d-block '>
            <h1>VALIDATE</h1>
                <div className='p mt-4'>
                <p>ODD Docs </p>
                <p>Learn ODD.</p>
                </div>
                
            </div>
            <div className='what p-5  '>
                   
            </div>
                
                
            </article>            
           
          
        </div>
        <div className="d-flex px-5" >
            <article className='mb-5 d-flex mmm'>
            
        
            <div className='fourbox3 text-center  d-block '>
            <h1>SET</h1>
                <div className='p mt-4'>
                <p>ODD Docs </p>
                <p>Learn ODD.</p>
                </div>
                
            </div>
            <div className='what p-5  '>
                   
            </div>
                
                
            </article>            
           
          
        </div>
        </div>
        </section>
        <section className='d-flex' style={{justifyContent:"center"}}>
            <div className='stay'>
                <h1>Stay in the loop</h1>
                <p className='px-5'>Subscribe Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, libero.
                </p>
                <button className='p-2'>Subscribe</button>
                <p className='texpx-5'><small>Lorem ipsum dolor sit amet. dolor <span className='texte'>sit amet.</span></small></p>
            </div>
        </section>
        <section className='d-flex text-center container px-5 my-5' style={{justifyContent:"space-between",flexDirection:"row",flexWrap:"wrap"}}>
            <div>
                <h1>DEVELOPERS</h1>
                <div className='dev'>
                    <p>Guide</p>
                    <p>Github</p>
                    <p>Guide</p>
                    <p>Github</p>
                    <p>Guide</p>
                    <p>Github</p>
                </div>
                </div>
            <div>
                <h1>Community</h1>
                <div className='dev'>
                    <p>Guide</p>
                    <p>Github</p>
                    <p>Guide</p>
                    <p>Github</p>
                    <p>Guide</p>
                    <p>Github</p>
                </div>
                </div>

            <div>
                <h1>Social</h1>
                <div className='dev'>
                    <p>Guide</p>
                    <p>Github</p>
                    <p>Guide</p>
                    <p>Github</p>
                    <p>Guide</p>
                    <p>Github</p>
                </div>
                </div>

            <div>
                <h1>Info</h1>
                <div className='dev'>
                    <p>Guide</p>
                    <p>Github</p>
                    <p>Guide</p>
                    <p>Github</p>
                    <p>Guide</p>
                    <p>Github</p>
                </div>
            </div>
        </section>
        <section className='text-center'>
        <small className="tex"><span className='text-secondary'>© 2023 Kusama ·</span> 
                        <a >Legal Disclosures ·</a>
                        <a >Privacy  Policy</a> ·
                         <a >Disclaimer</a>
                    </small>
        </section>

    </Container>
  )
}
