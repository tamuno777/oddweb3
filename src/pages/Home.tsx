import React from 'react'
import Sectionone from '../Home page/sectionone'
import Sectiontwo from '../Home page/sectiontwo'

const Home = () => {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
        <Sectionone/>
        <Sectiontwo/>
    </div>
  )
}

export default Home