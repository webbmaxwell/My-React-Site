import React from 'react';
import NavBar from './NavBar.js';


function Bio() {
  let today = new Date();
  const bd = new Date(1992, 9, 11);
  let myAge = today.getFullYear() - bd.getFullYear();
  let mo = today.getMonth() - bd.getMonth();
  if (mo < 0 || (mo === 0 && today.getDate() < bd.getDate())) {
          myAge--;
      };

  return (
    <div className="App">
      <div className="Header">
        <NavBar />
      </div>
     <h1 className="Page-title">Bio</h1>
     <img
      src="./family-picture.jpg"
      alt="Our Happy Family"
      id="family-picture"
     />
     <br/>
     <section className="bio-content">
       <p className="bio-p">Welcome to my page! This application was created with "create-react-app." Feel free to inspect my code!</p>
       <br />
       <p className="bio-p">My name is Max Webb and I am a Front-End React developer. I have been studying at Lambda School and I am looking to use my skills to begin my career in web-development.</p>
       <br />
       <p className="bio-p">I am {myAge} years old and was born and raised in Utah. I have been married since 2018, and our first daughter was born in October 2019</p>
     </section>
    </div>
  );
}

export default Bio;
