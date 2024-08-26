import React from "react";

function Hero(){
    return(
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5"/>
                <h1 className="mt-5 mb-2">Invest in everyting</h1>
                <p>online platform to Invest in stocks, derivatives, mutual funds, and more</p>
                <button style={{width:"20%" ,margin:"0 auto"}} className="p-2 mb-5 fs-5 btn btn-primary">signup now</button>
            </div>
        </div>
    );
}

export default Hero;