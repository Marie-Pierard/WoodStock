import React from 'react';
import logo from './components/assets/img/logo.jpg';
import './App.css';
import Menu from './components/menu';
import Woodstock from './components/woodstock';
import Aboutus from './components/aboutus';
import Creativeteam from './components/creativeTeam';
import Contactus from './components/contactus';
import Footer from './components/footer';






const App = () => {
  return (
    <div className='App'>
      <Menu/>
      <Woodstock />
      <Aboutus />
      <Creativeteam/>
      <Contactus/>
      <Footer/>
    </div>
  );
}

export default App;