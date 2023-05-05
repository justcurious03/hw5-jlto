import React from "react";
import NavBar from './NavBar';

const Dog=()=>{
    const [imgUrl, setUrl] = React.useState("https://cdn2.thedogapi.com/images/d1BTZDNE8.png");
    const callImg=()=> {
    fetch("https://api.thedogapi.com/v1/images/search")
    .then(res=>res.json())
    .then(data=>setUrl(data[0].url))
    }

    return (
        <>
        <div>
            <NavBar></NavBar>
            <div className = "container">
                <div className="box">
                    <h2>Random Dog Generator 🐶</h2>
                    <img src={imgUrl}></img>
                    <br/><br/>
                    <button onClick= {()=> callImg()}>Click me!</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Dog;