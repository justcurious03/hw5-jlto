import React from "react";
import NavBar from "./NavBar";

const App=()=>{
    const [imgUrl, setUrl] = React.useState("https://cdn2.thecatapi.com/images/9ql.jpg");
    const callImg=()=> {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(res=>res.json())
    .then(data=>setUrl(data[0].url))
    }

    return (
        <>
        <div>
            <NavBar></NavBar>
            <div className = "container">
                <div className="box">
                    <h2>Random Cat Generator 😼</h2>
                    <img src={imgUrl}></img>
                    <br/><br/>
                    <button onClick= {()=> callImg()}>Click me!</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default App;