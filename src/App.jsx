import React, { use } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs  from './components/program/program';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testmonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import VideoPlayer from './components/videoPlayer/videoPlayer';
const App =()=>{


  const [playState , setPlayState]=React.useState(false);
  return (

    <div>
<Navbar/>
<Hero/>
<div className='container'>
<Title subTitle='Our Program' title='What we Offer'/>
 <Programs/>
 <About setPlayState={setPlayState}/>
 <Title subTitle='Gallery' title='Campus Photos'/>
 <Campus/>
 <Title subTitle='TESTIMONIALS' title='What Student Says'/>
 <Testimonials/>
 <Contact></Contact>
 <Footer></Footer>
    </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}
export default App;