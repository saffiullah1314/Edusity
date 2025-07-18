import React, { useEffect,useState } from 'react'
import './Navbar.css'
import logo from '../../asset/logo.png'
import { Link } from 'react-scroll';
import menuicon from '../../asset/menu-icon.png'

const Navbar = () => {
  const[scrol ,setScrol ] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll' , ()=>{
      if( window.scrollY > 50){
        setScrol(true);
      }
      else{
        setScrol(false);
      }
    })
  }, []);
  

  const[mobileMenu , setMobileMenu ] = useState(false);
  const toggleshift = () =>{
    mobileMenu? setMobileMenu(false) :setMobileMenu(true);
  }

  return (
    <>
      <nav className={`container ${scrol? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'':'mobile_menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={toggleshift} >Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500} onClick={toggleshift} >Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={toggleshift} >About US</Link></li>
            <li><Link to='gallery' smooth={true} offset={-260} duration={500} onClick={toggleshift} >Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}  onClick={toggleshift}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn' onClick={toggleshift}>Contact us</Link></li>
        </ul>
        <img src={menuicon} alt="" className='hidden' onClick={toggleshift}/>
      </nav>
    </>
  )
}

export default Navbar
