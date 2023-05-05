import React from 'react';
import NavBar from './NavBar';

function Home() {
  return (
    <div>
        <NavBar></NavBar>
        <h1 className="test">Home</h1>
        <div className="container">
            <img src="https://media.tenor.com/xsTSMptWuYYAAAAC/dog-nichijou.gif" />
        </div>
    </div>
  )
}

export default Home