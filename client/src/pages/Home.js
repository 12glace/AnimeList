import Navigation from "../components/Navigation";
import Popup from '../components/Popup';
import { useState } from 'react';
import Footer from "../components/Footer";
import Card from "../components/Card";
import { Link, useNavigate } from "react-router-dom";
import { BsWifi, BsCurrencyEuro, BsFillHouseDoorFill } from "react-icons/bs";
const Home = () =>{
    const [buttonPopup, setButtonPopup]= useState(false);
    const cards = [{
        title: "Accessible on any platform",
        desc: "Any device, any browser, any operating system",
        icon: <BsWifi size={120}/>
    },{
        title: "Stay at home",
        desc: "No need to go outside just stay at home like a weaboo",
        icon: <BsFillHouseDoorFill size={120}/>
     },{
        title: "It's Free",
        desc: "I know right! Crazy! Money actually grows on trees",
        icon: <BsCurrencyEuro size={120}/>
    },];
return(
    <div className="home" >
        <Navigation/>        
        <section className="hero is-large center">
            <div className="hero-head intro">
                <div className='width'>
                    <h1 className="is-size-2 title has-text-light">
                    Sign up today and make your own anime list!
                    </h1>
                    <h2 className="is-size-4 subtitle has-text-light">
                    For free!
                    </h2>
                </div>   
                <br/>
                <button className="button is-outlined is-medium about" onClick={() => setButtonPopup(true)}>Click Here!</button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
                <h3></h3>
            </div>
        </section>
        <div className="home-info">
            <div className="title is-2 is-uppercase has-text-centered">
                <h1>This is the best anime list website out there</h1>
            </div>
            <div className="columns center" >
                {cards.map((card, index) => {
                    return <Card key={index} title={card.title} desc={card.desc} icon={card.icon}/>
                })}
            </div>
        </div>
        <div className="uneQuestion has-text-centered ">
                <h3>Want to help us develop the website?</h3>
                <h4>Send us a message! or contact us via instagram</h4>
                <Link to="/contact" className="button is-outlined is-large">Contact us</Link>
        </div>
        <div className="infoSite has-text-centered">
                <h1>Searching for an anime to watch?</h1>
                <a href="/search"><button className="button is-outlined is-large">Click here to search for an anime</button></a>
        </div>
        <Footer/>
    </div>
)
}
export default Home;