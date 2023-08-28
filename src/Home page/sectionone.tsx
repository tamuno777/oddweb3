import React from 'react'
import '../css/sectionone.css'
import Nav from '../components/Nav'
import firstimg from '../assets/Saved Pictures/KUSAMA-GIFS_3.gif'
import secondimg from '../assets/Saved Pictures/home-vortexs (1).svg'


interface content {
    alt :string;
}
const Sectionone = () => {
  return (
    <div className='mb-5 '>
        <article>
           <Nav/>

           <div className='bg-danger img1'>
                <img src={firstimg}   />
                <div className='img1-text text-center'>
                    {/* <div > */}
                    <h1 className='hh mb-5'>ODD WEB 3 , WE ARE HERE</h1>
                    {/* </div> */}
                    <button className='buttonn mt-2'>Learn More</button>
                </div>

           </div>

                
                 
            {/* <p className="tallScreenText">The skin of king cobra is dark olive or brown with black bands and white or yellow crossbands. The head is black with two crossbars near the snout and two behind the eyes. Adult king cobras are 3.18 to 4 m (10.4 to 13.1 ft) long. The longest known individual measured 5.85 m (19.2 ft). Its belly is cream or pale yellow. It has 17 to 19 rows of smooth scales. Ventral scales are uniformly oval shaped. Dorsal scales are placed in an oblique arrangement. Males have 235 to 250 ventral scales, while females have 239 to 265. The subcaudal scales are single or paired in each row, numbering 83 to 96 in males and 77 to 98 in females.</p>
            <p className="tallScreenText">Juveniles are shiny black with narrow yellow bands (can be mistaken for a banded krait, but readily identified with its expandable hood). The head of a mature snake can be quite massive and bulky in appearance, though like all snakes, it can expand its jaws to swallow large prey items. It has proteroglyph dentition, meaning it has two short, fixed fangs in the front of the mouth, which channel venom into the prey like hypodermic needles. The average lifespan of a wild king cobra is about 20 years.</p>
            <div className="footer">
                <p>All the text on the articles in this page have been copy-pasted from Wikipedia :)</p>
            </div> */}
        </article>
        <article className='px-5 py-5'>
            <div className='scalable px-5'>
                <h1>
                    THE SCALABLE, LOREM IPSUM DOLOR SIT LOREM IPSUM DOLOR SITLOREM IPSUM DOLOR SIT
                </h1>
            </div>
            <div className='scalable2 px-5  '>
                <p >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque et eius repellendus sit deleniti. Natus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque et eius repellendus sit deleniti. Natus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque et eius repellendus sit deleniti. Natus.
                </p>
            </div>
        </article>
        <section className='secondimg'>
            <img src={secondimg} alt="" />
        </section>
        <article className='px-3'>
            <div className='origin px-5'>
            <h1>
                Origin of Odd-web
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt alias iusto laborum inventore voluptatibus reprehenderit quia ducimus libero quod 
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam possimus quae similique assumenda necessitatibus doloribus, placeat, animi ab fugit laborum dicta rerum voluptatum aut consequatur adipisci quo maiores. Facere, molestiae.
            </p>
            </div>
        </article>
        <article className='mb-5 d-flex '>
        
        <div className='second-box text-left '>
        <h1>What is Odd-Web?</h1>
            <p>Odd-Web is Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit quisquam quas numquam debitis quo veniam quasi asperiores, fugiat exercitationem. Tempora ex id, voluptas tempore laboriosam cumque amet. Amet, voluptatum.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam unde dolore similique omnis.</p>
            
        </div>
        <div className='what-is p-5  '>
               
        </div>
            
            
        </article>


    </div>
  )
}

export default Sectionone