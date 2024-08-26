import React from "react";

function Hero(){
    return(
        <div className="container ">
            <div className="row text-center m-5 p-5">
                <h1 className="mt-5" style={{color:"rgb(70,70,70)" }}>Technology</h1>
                <h2 className="fs-4 my-4 text-muted">Sleek, modern, and intuitive trading platforms</h2>
                <p>Check out our <a href="" style={{textDecoration:"none"}}>investment offerings →</a> </p>
            </div>
        </div>
    )
}

export default Hero;