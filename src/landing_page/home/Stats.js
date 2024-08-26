import React from "react";

function Stats(){
    return(
        <div className="container mx-5 mt-5 row p-5">
            <div className="col-7 p-5 ">
                <h1 className="mb-5 ">Trust with confidence</h1>
                <h2 className="fs-4">Customer-first always</h2>
                <p className="text-muted">This's why 1.3+crore customers trust Zerodha with  ₹3.5+lakh crores of equity investments.</p>
               
                <h2 className="fs-4">No spam ot gimmicks</h2>
                <p className="text-muted">No gimmicks, spam, "gamigication", or annoying push notifications. High quality apps that you use at your pace, the way you like. </p>
                
                <h2 className="fs-4">The Zerodha universe</h2>
                <p className="text-muted">Not just an app, but a whole ecosystem Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                
                <h2 className="fs-4">Do better with money</h2>
                <p className="text-muted">With initialives like Nudge and kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>                
            </div>
            <div className="col-5 p-5">
                <img style={{width:"110%"}} src="media/images/ecosystem.png"/>
                <div className="text-center">
                    <a href="" className="mx-5" style={{textDecoration:"none"}}>Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href="" style={{textDecoration:"none"}}>Try kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Stats;