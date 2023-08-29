import React from 'react'
import Sectionone from '../Home page/sectionone'
import Sectiontwo from '../Home page/sectiontwo'
import Sectionthree from '../Home page/sectionthree'
import Sectionfour from '../Home page/sectionfour'

const Home = () => {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
        <Sectionone/>
        <Sectiontwo/>
        <Sectionthree/>
        <Sectionfour/>
    </div>
  )
}

export default Home