import React from 'react';
import back from '../Images/logoart.png';
import mylogo from '../Images/logo_odyssey.png';
import '../App.css';

class About extends React.Component {
    render() { 
        return <div style={{width:"100%", height:"210vh",position:"absolute"}}>
            <div style={{width:'100%', height:"210vh", position:"absolute", zIndex:"-10000", backgroundColor:"black"}}></div>
            <div className="myabout-images">
            <a href="/"><img src={mylogo} style={{margin:"auto",marginTop:"5vw",position:"relative",zIndex:"100000"}} alt="#"/></a>
            <img src={back} alt="#" style={{width:"50%", margin:"auto",marginTop:"15%"}}/>
            </div>
            <div className="about-content-text">
                <span className="fs-1">About</span>
                <p className="mb-5">This is a fictional firm made just to show you how design and animations are handled in Adobe XD. All of this is made to help those who have a desire to learn web design and animation design.</p>
                <p>All renders are made in the Adobe Dimensions 3D program and are free to use. </p>
                <span className="mb-3">Learn more about the Adobe Dimensions program at this address:</span>
                <p className="w-25">https://www.adobe.com/products
                /dimension.html#:~:text=Buy
                %20now-,Adobe%20Dimension%20is
                %20the%20fastest%20way20to20bring
                20your20designs,models2C%
                20materials2C20and%20lighting.</p>
                <span className="mb-3">3D Bike Model</span>
                <p className="mb-1">https://www.cgtrader.com/free-3d-models/vehicle/bicycle/soka-electric-bike</p>
                <span>Eddie Mauro on cgtrader</span><br/>
                <span className="mb-1">Thanks for WATCHING!</span>
                <p>Developed by Markos</p>
            </div>
        </div>;
    }
}
 
export default About;