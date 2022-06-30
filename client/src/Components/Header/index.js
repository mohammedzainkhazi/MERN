import React from 'react';
import AuthOptions from '../../auth/AuthOptions';

// Styling
import { Jumbotron } from 'react-bootstrap';
import logo from '../../images/logo5.jpg';
import './style.css';

function Header() {
  return (
    <Jumbotron className="JumbotronStyle" fluid="true" style={{ display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",background:'#f5f5f5' , borderRadius: '5px', paddingLeft :'10px', paddingRight :'10px', paddingTop :'40px', paddingBottom :'65px', margin: '0px'}}>
      {/* Logo */}
      <div>
        <img className="logo" src={logo} alt="logo"></img>
      </div>
      <h3 className='headingText'>DiaryApp</h3>

      {/* Buttons */}
      <div>
         <AuthOptions />
      </div>   
    </Jumbotron>
  );
}

export default Header;
