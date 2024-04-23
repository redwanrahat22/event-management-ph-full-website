import { useContext } from "react";
import{ AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const {user} = useContext(AuthContext)

  const nav = useNavigate()

    return (
        <div>
            <footer className="footer mt-32 py-32 p-10 bg-base-200 text-base-content">

  <aside>
      <img className="w-12" src="https://i.postimg.cc/tTqLxxT2/event-logo-EDITED.png" alt="" />
    <p>STAR Industries Ltd.<br/>Providing reliable service since 2017</p>
  </aside> 
  <nav className="text-[12px] md:text-sm">
    <h6 className="footer-title">Services</h6> 
    <a onClick={()=>{user? nav('/events') : nav('/login')}} className="link link-hover">Logistics Management</a>
    <a onClick={()=>{user? nav('/events') : nav('/login')}} className="link link-hover">Professional Vendor Coordination</a>
    <a onClick={()=>{user? nav('/events') : nav('/login')}} className="link link-hover">Comprehensive Event Planning</a>
    <a onClick={()=>{user? nav('/events') : nav('/login')}} className="link link-hover">Communication Management</a>
    <a onClick={()=>{user? nav('/events') : nav('/login')}} className="link link-hover">On-site Coordination</a>
    <a onClick={()=>{user? nav('/events') : nav('/login')}} className="link link-hover">Post-event Evaluation and Analysis</a>

  </nav> 
  <nav  className="text-[12px] md:text-sm">
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav  className="text-[12px] md:text-sm">
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
 
</footer>

        </div>
    );
};

export default Footer;