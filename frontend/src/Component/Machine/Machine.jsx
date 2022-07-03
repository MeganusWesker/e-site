import React from 'react'
import "./machine.css"
import Product from '../../Home/Product'
import pic1 from "../../images/1.png"
import pic2 from "../../images/2.png"
import pic3 from "../../images/3.png"
import pic4 from "../../images/4.png"




let machine =[
  {name:"MODEL :2D",isMachine:true, _id:"623b2d5f3723174d01db71f7", price:"14000", rating:5 ,images:[pic1]},
  {name:"MODEL : 3D",isMachine:true, _id:"623b2d5f3723174d01db61e3", price:"18000", rating:5,images:[pic2]} ,
  {name:"MODEL : 4D",isMachine:true, _id:"623b2d5f3723174d01db52k2", price:"22000", rating:5,images:[pic3] },
  {name:"MODEL : 2D MAGIC (HOT)",isMachine:true, _id:"623b2d5f3723174d01db91m5", price:"12000", rating:5,images:[pic4]},
  
]






const Machine = () => {




  return (
    <>

    <div className="machine-center">
        <div className='machine-heading-div'>
          <h1 className='machine-heading'>Machines </h1>
        </div>
    </div>
    <div className='machine'> 
    
                   {machine &&
             machine.map((m) => (
                <Product key={m._id} product={m} />
              ))}
    </div>

    </>
  )
}

export default Machine