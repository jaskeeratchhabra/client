import React, { useState,useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import UserContext from '../Context/UserContext';
// import logo from './logo.png'; // Assuming you have a logo file named logo.png in the same directory




function NavbarComponent() {

  const location = useLocation();
  const [darkTheme, setDarkTheme] = useState(false);

  const {userName}=useContext(UserContext)

  const user=JSON.parse(localStorage.getItem('userName'));
  
  const [isOpen, setIsOpen] = useState(false);
  
  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeToggle = (e) => {
      setDarkTheme(!darkTheme);
      
      if (!darkTheme) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
      }
    };

  return (
    <>
      <Navbar className='bg-gray-800'>
        <Container className="justify-between">
          <Navbar.Brand href="/home" className='text-white'>
            <img 
              src="https://i.pinimg.com/originals/f4/fa/ec/f4faec1798f199132d27ed903701818b.png"
              className="d-inline-block align-top mr-2 h-10 w-10 rounded-lg"
              alt="PgDekho Logo"
            />
            PgDekho.com
          </Navbar.Brand>
          {location.pathname === '/home' && (
            <Nav className="d-flex flex-grow-1 justify-content-center ">
              <input type="text" placeholder="Search..." className="form-control mr-2 rounded-lg" />
            </Nav>
            
          )}
          {location.pathname === '/home' && (
          <Nav className="align-items-center">
          <label className="mr-4 text-white">
            <input className="rounded-xl" type="checkbox" checked={darkTheme===true} onChange={handleThemeToggle} />
            <span className="">Toggle</span>
          </label>
          <div className="flex justify-between items-center py-2 ml-auto relative">

             <h1 className="ml-auto absolute ">
               <span className="cursor-pointer text-black bg-white rounded-sm flex" onClick={handleDropdown}>
                 <span>👤</span>
                 {user}
                 <span>&#9660;</span>
               </span>
             </h1>
             {isOpen && (
               <div className="absolute top-16 bg-white shadow-md rounded w-36 py-2 z-10">
                 <Link to="/myaccount" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                   My Account
                 </Link>
                 <Link to="/">
                   <button
                     className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 focus:outline-none"
                   >
                     Logout
                 </button>
                </Link>
              </div>
            )}
          </div>
        </Nav>
          )}
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent;
