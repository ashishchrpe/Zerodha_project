import React from "react";

function Education(){
    return(
        <div className="container">
            <div className="row p-5">
                <div className="col-6">
                    <img src="media/images/education.svg"/>
                </div>
                <div className="col-6">
                <h1 className="my-5 ">Free and open market education </h1>
                <p className="mb-2">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="" style={{textDecoration:"none"}}>Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                <p className="mb-2 mt-4">TradingQ&A, the most active trading and investment community in india for all your market related queries.</p>
                <a href="" style={{textDecoration:"none"}}>TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Education;