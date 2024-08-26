import React from "react";

function Right_img({imageURl,productName,productDescription, link_1}){
    return(
        <div className="container">
            <div className="row p-5">
               <div className="col-1"></div>
               <div className="col-4">
                <h1 className="my-5 ">{productName}</h1>
                <p className="mb-4 ">{productDescription}</p>
                <a href="" style={{textDecoration:"none" }} className="fs-6">{link_1}</a>             
                </div>
                <div className="col-6 px-5 ">
                    <img src={imageURl}  />
                </div>
                
            </div>
        </div>
    )
}

export default Right_img;