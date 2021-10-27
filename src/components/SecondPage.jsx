import React from 'react';
import logo from '../Images/bikeweb_05-Current-View.png';
import '../App.css';
import Thirdpage from './ThirdPage';

class SecondPage extends React.Component {
    handleup = (e) => {
        console.log(e.target.parentElement.parentElement);
        e.preventDefault();
        e.target.parentElement.parentElement.parentElement.firstElementChild.style.top = "20vh";
        e.target.parentElement.parentElement.style.top = "-1500px";
    }
    handledown = (e) =>{
        console.log(e.target.parentElement.parentElement.parentElement.childNodes[2]);
        e.preventDefault();
        e.target.parentElement.parentElement.parentElement.childNodes[2].style.top = "0px"; 
        e.target.parentElement.parentElement.style.top = "150vh";
    }
    render() { 
        return <div className="mysecondcontainer">
            <Thirdpage handledown={this.handledown}/>
            <div style={{width: "100%", height:"100vh", position: "absolute", zIndex: "-1000", backgroundColor: "black"}}></div>
        <div className="col-8 float-end position-absolute"style={{height: "50vh", left: "33%", marginTop: "150px", zIndex : "0"}}>
            <div className="text-white col-10">
                <span style={{fontSize: "3vw" , fontFamily:"pilat"}}>The best Brakes</span><br/>
                <span style={{fontSize: "3vw" , fontFamily:"pilat"}}>in the world</span>
                <h1 style={{fontSize: "5vw", fontFamily:"pilat",textTransform:"uppercase", color: "#51E8EF",fontWeight:"800"}}>SRAM Code R</h1>
                <p style={{fontSize: "0.9vw" , fontFamily:"Rajdhani", float:"left", width:"40%",marginRight:"30px",color:"#918F8F"}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                <p style={{fontSize: "0.9vw" , fontFamily:"Rajdhani", float:"left", width:"40%",color:"#918F8F"}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            </div>

            <img src={logo} alt="#" className="col-10 bg-image position-absolute" style={{zIndex:"-100", height: "60vh", top: "80%", left : "0px"}}/>
            <div className="col-6 lastdiv">
            <i className="fas fa-play" onClick={(e) => this.handleup(e)}></i>
                <p>
                    Nonumy eirmod tempor invidunt utsed diam voluptua.
                </p>
            </div>
        </div>
        <i className="fas fa-angle-left" onClick={(e) => this.props.handleleft(e)}></i>
        </div>;
    }
}
 
export default SecondPage;