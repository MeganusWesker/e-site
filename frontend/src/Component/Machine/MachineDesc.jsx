import React, { Fragment } from 'react'
import "./machineDetails.css"
import pic2 from "../../images/2.avif"
import { useHistory } from "react-router-dom";
import MetaData from '../layout/MetaData'
import ReactStars from 'react-rating-stars-component'








  

   
   
   






const MachineDesc = () => {

   
    let history = useHistory();
    
    


 

    

   

    

    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: '#ffa500',
        size: window.innerWidth < 600 ? 20 : 25,
        value: 5,
        readOnly: true,
        isHalf: true,
      };

      const sendInquiryHandler = () =>{
        history.push('/sendinquiry')
      }



  return (

    <Fragment>
    <MetaData title={` MODEL :3D -- Ecommerce`}/>

     <div className="ProductDetails">
   
       <div>
           <img
                 className="CarouselImage"
                 src={pic2}
                 alt="MODEL :3D"
               />
       </div>

       <div>
         <div className="detailsBlock-1">
           <h2>MODEL :3D</h2>
           {/* <p>Product # {product._id}</p> */}
         </div>
         <div className="detailsBlock-2">
             Reviews
           <ReactStars {...options} />
           {/* <span className="detailsBlock-2-span">
             {" "}
             ({product.numOfReviews} Reviews)
           </span> */}
         </div>
         <div className="detailsBlock-3">
           <h1>{`₹ 18000 MRP`}</h1>
           <div className="detailsBlock-3-1">

             <button
               onClick={sendInquiryHandler}
             >
              Send Inquiry
             </button>
           </div>

           <p>
             Status:
             <b className="greenColor">
               InStock  
             </b>
           </p>
         </div>

         <div className="detailsBlock-4">
         <p className='machineDesc'> <b className='machinedes-bold' > Description </b>: Dimensoin(L×W×H): 43×27×52 cm</p>
            <p className='machineDesc'> No. of Selection:Three</p>
            <p className='machineDesc'> No. of Hoppers:Three with easy fitting</p>
            <p className='machineDesc'> Premix Capacity:1kg</p>
            <p className='machineDesc'> Boiler Capacity:4Liters</p>
            <p className='machineDesc'> Startup Time:8-10Mins</p>
            <p className='machineDesc'> Dispensing Rate:7-8 Cups per min</p>
            <p className='machineDesc'> Auto Flus : Yes</p>
            <p className='machineDesc'> Water Filling Type : Manual/Pump</p>
            <p className='machineDesc'> Electrical Load : 2.5KVA/50Hv/220V</p>
            <p className='machineDesc'> Temperature locking : Yes</p>
            <p className='machineDesc'> Heating Element  : 2KVa</p>
            <p className='machineDesc'> Water Tank  : SS</p>
            <p className='machineDesc'> Water Low Level Sensor : Yes</p>
            <p className='machineDesc'> Digital Counters : Yes(Each selection)</p>
            <p className='machineDesc'> Hot Water : Yes (Sepreate line for purity)</p>
            <p className='machineDesc'> Cup Lock Facility : Yes</p>
            <p className='machineDesc'> Password lock : Yes</p>
            <p className='machineDesc'> Half Cup Facility : Yes</p>
            <p className='machineDesc'> Weight : 16kg(Approx)</p>
            <p className='machineDesc'> Machine Body : Gi Sheet</p>
            <p className='machineDesc'> Dip Tray  : ABS Injected(with no residue left on top)</p>
            <p className='machineDesc'> Body Paint :Powder Coated (Extra Durable)</p>
            <p className='machineDesc'> Waranty  : 1 year  from date of Manufacturing</p>
         </div>

       </div>
     </div>

     </Fragment>

  )
}

export default MachineDesc 