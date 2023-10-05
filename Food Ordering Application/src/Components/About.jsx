import React from 'react';
import UserClass from './UserClass';


const About = () => {
  return (
    <div>
        <h1>This is About Page</h1>
        <UserClass/>
        {/* <UserClass name={"javascript developer"} location="Kolkata" /> */}
    </div>
  )
}

export default About;