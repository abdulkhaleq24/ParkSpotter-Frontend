import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="w-10/12 m-auto grid grid-cols-4">
        <div>
          <h2 className="text-sky-400/100">ParkSpotter</h2>
          <br />
          <div>
            <ul className="flex space-x-4">
              <li> <a className="text-2xl" href="#"><FaInstagramSquare /></a> </li>
              <li> <a className="text-2xl" href="#"><FaFacebookSquare /></a> </li>
              <li> <a className="text-2xl" href="#"><AiFillTwitterCircle /></a> </li>
              <li> <a className="text-2xl" href="#"> <FaYoutube /> </a> </li>
              <li> <a className="text-2xl" href="#"><FaLinkedin /></a> </li>
            </ul> <br />
            <div className="flex space-x-4">
              <img className="w-32" src="./Google_Play_Badge_001eb0f465.webp" alt="" />
              <img className="w-32" src="./App_Store_Badge_f39b9659af.webp" alt="" />
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-medium py-3">Quick Links</h4>
          <ul className="leading-loose">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">SBI FASTag Recharge</a></li>
            <li><a href="#">Telangana Challan</a></li>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Valet parking</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-medium py-3">Products</h4>
          <ul className="leading-loose">
            <li><a href="#">Cars</a></li>
            <li><a href="#">Challan Information</a></li>
            <li><a href="#">FASTag</a></li>
            <li><a href="#">Parking Solutions</a></li>
            <li><a href="#">Fuel Price</a></li>
            <li><a href="#">RTO</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-medium py-3">Reach us</h4>
          <ul className="leading-loose">
            <li><a className="flex" href="#"> <MdEmail /> <span>support@myparkspotter.com</span></a></li>
            <li><a href="#"> <MdEmail /> sales@myparkspotter.com</a></li>
            <li><a href="#"><FaLocationDot /> <span>Unitech Cyber Park, 5th Floor, <br /> Tower A, Sec-39, Gurugram, <br /> Haryana 122022</span></a></li>

          </ul>
        </div>
      </div>
      <br />
      <div className="bg-[#331f6c] py-8">
        <div className="w-10/12 m-auto flex justify-between text-white">
          <p>© 2024 ParkSpotter. All rights reserved</p>
          <p>Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
