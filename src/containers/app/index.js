import React from 'react';
import {Route, Link} from 'react-router-dom';
import Home from '../home';
import Favourite from '../favourite';
import Logo from "../../images/logo.png";
import Notification from "../../images/notification.png";
import Gmail from "../../images/gmail.png";

const App = () => (
    <div>
        <div id="mySidenav" className="sidenav">
            <div  className="closebtn" onClick={closeNav}>&times;</div>
            {/* <Link to="./" onClick={closeNav}>Placeholder</Link>
            <Link to="./" onClick={closeNav}>Placeholder</Link>
            <Link to="./" onClick={closeNav}>Placeholder</Link> */}
        </div>

        <main id="main">
        <div className="rightpanel">
        <img className="notification" src={Notification} onClick= {openNav} />
        <Link to="/">
        <img className="cubelogo" src={Logo} />
        </Link>
            <span className='pushMenu' onClick={openNav}>search</span>
            </div>
            <Route exact  path="/" component={Home}/>
            <Route exact path="/favourite" component={Favourite}/>
        </main>
    </div>
);


// I Know its dirty but for quick demo i thing i can do this
let openNav = () => {
    document.getElementById("mySidenav").style.width = "400px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("main").style.marginRight = "0px";


};

let closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.marginRight = "0";
};


export default App