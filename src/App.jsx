import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs  from './components/programs/programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testmonials';
const App =()=>{
  return (

    <div>
<Navbar/>
<Hero/>
<div className='container'></div>
<Title subTitle='Our Program' title='What we Offer'/>
 <Programs/>
 <About/>
 <Title subTitle='Gallery' title='Campus Photos'/>
 <Campus/>
 <Title subTitle='TESTIMONIALS' title='What Student Says'/>
 <Testimonials/>
    </div>
  )
}
export default App;