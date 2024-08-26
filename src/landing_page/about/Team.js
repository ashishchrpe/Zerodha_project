import React from "react";

function Team(){
    return(
        <div className="container">
                <div className="row">
                <div className="text-center m-5">
                    <h1 className="fs-2 p-3" style={{color:"rgb(70,70,70)"}}>Peopel</h1>
                </div>
                <div className="row mb-5 pb-5">
                   <div className="col-2"></div>
                    <div className="col-4 text-center">
                        <img src="media/images/ashish img 2.jpg" style={{width:"50%", borderRadius:"40%"}}/>
                        <h2 className="fs-5 my-3 text-muted">Ashish Charpe</h2>
                        <p>MCA (TIT Bhopal)</p>
                    </div>
                    <div className="col-4 text-muted">
                        <p>I enjoy building awesome software that solves practical problems . I work with Java Script , Embedded JavaScript (EJS), React, NodeJS, Bootstrap , Express etc.</p>

                        <p>Aspiring for a challenging career in Software development as to use my learned skills and experience
                        for best results.</p>

                        <p>Playing cricket & chess .</p>

                        <p>Connect on <a href="https://www.linkedin.com/in/ashish-charpe-b50552263/" style={{textDecoration:"none"}}>Linkdin</a>  </p>

                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </div>
    )
}

export default Team;