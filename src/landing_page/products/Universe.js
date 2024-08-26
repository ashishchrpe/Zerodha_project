import React from "react";

function Universe(){
    return(
        <div>
            <div className="row text-center mb-5">
              <div>
                <h5 className="text-muted my-5">Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech </a>blog.</h5>
                <h1 className="fs-2 pt-5 pb-4 " style={{color:"rgb(70,70,70)" }}>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
              </div>
              <div className="my-2">
                   <img src="media/images/smallcaseLogo.png" className="px-5"  style={{width:"17%"}}/> 
                   <img src="media/images/streakLogo.png" className="px-5" style={{width:"15%"}}/> 
                   <img src="media/images/dittoLogo.png" className="px-5" style={{width:"14%"}}/> 
              </div>
              <div className="mb-5 mt-3">
                   <img src="media/images/sensibullLogo.svg" className="px-5" style={{width:"17%"}}/> 
                   <img src="media/images/goldenpiLogo.png" className="px-5" style={{width:"14%"}}/> 
                   <img src="media/images/zerodhaFundhouse.png" className="px-5" style={{width:"15%"}}/> 
              </div>
              <button style={{width:"20%" ,margin:"0 auto"}} className="p-2 mb-5 mt-23 fs-5 btn btn-primary">signup now</button>
            </div>
            
        </div>
    )
}

export default  Universe;