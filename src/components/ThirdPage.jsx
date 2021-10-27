import React from 'react';
import mylogo from '../Images/Content (2).png';
import '../App.css';
import divider from '../Images/divider.png';


class Thirdpage extends React.Component {
    

    render() { 
        return <div style={{position:"absolute",top:"150vh",left:"33%",width:"70%",display:"flex",flexDirection:"row",transition:"ease-in-out 1s"}}>
            <div className="content-container">
                <span style={{fontSize:"3vw"}} onClick={(e) => this.props.handledown(e)}><img src={divider} alt="#"/> Rear brakes</span>
                <p style={{fontSize:"1.3vw",width:"75%",fontWeight:"600"}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                <span style={{fontSize:"2vw"}} onClick={(e) => this.props.handledown(e)}>Features</span>
                <ul>
                    <li>4-Piston Caliper</li>
                    <li>All-new Code design based on Guide architecture</li>
                    <li>Designed specifically to handle heavy-duty demands</li>
                </ul>
            </div>
            <img src={mylogo} alt="#" style={{width:"50%",marginLeft:"-100px"}}/>
        </div>;
    }
}
 
export default Thirdpage;