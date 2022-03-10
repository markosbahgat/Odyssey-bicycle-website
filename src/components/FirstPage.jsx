import React from 'react';

import '../App.css';

import logo from '../Images/bikeweb_03-Current-View.png';
import logo1 from '../Images/logo_odyssey.png';
import logo2 from '../Images/Features block.png';
import logo4 from '../Images/ico.png';
import SecondPage from './SecondPage.jsx';



class FirstPage extends React.Component {

    changepage = (event) =>{
        event.preventDefault();
        console.log(event.target.parentElement.parentElement.childNodes[0].lastElementChild);
        event.target.parentElement.parentElement.childNodes[2].style.left ="-550px";
        event.target.parentElement.parentElement.childNodes[3].style.left ="-55vw";
        event.target.parentElement.parentElement.childNodes[4].style.left ="-550px";
        event.target.parentElement.parentElement.childNodes[5].style.left ="-550px";
        event.target.parentElement.parentElement.childNodes[6].style.left ="-550px";
        event.target.parentElement.parentElement.childNodes[7].style.left ="-550px";
        event.target.parentElement.parentElement.childNodes[8].style.marginLeft ="-65vw";
        event.target.parentElement.parentElement.childNodes[0].style.left ="5%";
        event.target.parentElement.parentElement.childNodes[3].firstElementChild.style.marginLeft ="-550px";
        event.target.parentElement.parentElement.childNodes[2].lastElementChild.style.left ="750px";
        event.target.parentElement.parentElement.childNodes[2].lastElementChild.style.marginTop ="14vw";
        event.target.parentElement.parentElement.childNodes[0].lastElementChild.style.marginTop = "10%";
        event.target.parentElement.parentElement.childNodes[0].lastElementChild.style.marginLeft = "20%";
      }

      handleleft = (e) => {
        e.preventDefault();
        console.log(e.target.parentElement.parentElement);
        e.target.parentElement.style.left = "100%";
        e.target.parentElement.parentElement.childNodes[2].style.left ="10%";
        e.target.parentElement.parentElement.childNodes[3].style.left ="72%";
        e.target.parentElement.parentElement.childNodes[4].style.left ="42%";
        e.target.parentElement.parentElement.childNodes[5].style.left ="58%";
        e.target.parentElement.parentElement.childNodes[6].style.left ="65%";
        e.target.parentElement.parentElement.childNodes[7].style.left ="78%";
        e.target.parentElement.parentElement.childNodes[8].style.marginLeft ="0px";
        e.target.parentElement.parentElement.childNodes[2].lastElementChild.style.left ="0%";
        e.target.parentElement.parentElement.childNodes[2].lastElementChild.style.marginTop ="0";
        e.target.parentElement.parentElement.childNodes[3].style.width ="50vw";
      }

    render() { 
        return <div>
           <SecondPage handleleft={this.handleleft}/> 
            <div className="position-absolute col-10">
                      <img src={logo1} alt="#" className="float-start col-2 mt-3"/>
                      <div className="float-start text-white col-10 mt-4">
                        <ul className="d-flex flex-direction-row list-unstyled">
                          <li><a className="fuck" href="http://www.markosbahgat.com" rel="noreferrer" target="_blank">BIKES</a></li>
                          <li><a className="fuck" href="http://www.markosbahgat.com" rel="noreferrer"  target="_blank">SERVICES</a></li>
                          <li><a className="fuck" href="/about">ABOUT</a></li>
                        </ul>
                      </div>
                </div>
                <div className="header-body">
                  <span>odyssey</span>
                  <h1>ONE</h1>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                  <button>Buy ONE</button>
                </div>
                <div className="footer-body">
                    <img src={logo2} alt="#"/>
                </div>
                <div className="ico" onClick={(event) => this.changepage(event)}>
                  <img src={logo4} alt="#"/>
                  <p className="ourpara">
                  <span style={{color: "#918F8F"}}>Motor</span><br/>
                  <span>Yamaha PW-X2</span>
                  </p>
                </div>
                <div className="ico1" onClick={(event) => this.changepage(event)}>
                  <img src={logo4} alt="#"/>
                  <p className="ourpara">
                  <span style={{color: "#918F8F"}}>Battery</span><br/>
                  <span>Juiced 52V Battery Pack</span>
                  </p>
                </div>
                <div className="ico2" onClick={(event) => this.changepage(event)}>
                  <img src={logo4} alt="#"/>
                  <p className="ourpara">
                  <span style={{color: "#918F8F"}}>Brakes</span><br/>
                  <span>SRAM Code R</span>
                  </p>
                </div>
                <div className="ico3" onClick={(event) => this.changepage(event)}>
                  <img src={logo4} alt="#"/>
                  <p className="ourpara">
                  <span style={{color: "#918F8F"}}>Wheels</span><br/>
                  <span>DT Swiss Mission Hybrid</span>
                  </p>
                </div>
                <img src={logo} alt="#" className="bg-image" style={{height:"100vh"}}/>
                
        </div>;
    }
}
 
export default FirstPage;