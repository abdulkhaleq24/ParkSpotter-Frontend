import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer style={{}}>
      <div style={{ margin: '56px 0', padding: '0px 82px', display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h2>ParkSpotter</h2>
          <div>
            <ul style={{ listStyle: 'none', display: 'flex', margin: '20px 0' }}>
              <li> <a style={{ color: '#000', fontSize: '26px', marginRight: '18px' }} href="#"><FaInstagramSquare /></a> </li>
              <li> <a style={{ color: '#000', fontSize: '26px', marginRight: '18px' }} href="#"><FaFacebookSquare /></a> </li>
              <li> <a style={{ color: '#000', fontSize: '26px', marginRight: '18px' }} href="#"><AiFillTwitterCircle /></a> </li>
              <li> <a style={{ color: '#000', fontSize: '26px', marginRight: '18px' }} href="#"> <FaYoutube /> </a> </li>
              <li> <a style={{ color: '#000', fontSize: '26px', marginRight: '18px' }} href="#"><FaLinkedin /></a> </li>
            </ul>
            <img style={{ width: '200px', marginRight: '10px' }} src="./Google_Play_Badge_001eb0f465.webp" alt="" />
            <img style={{ width: '200px' }} src="./App_Store_Badge_f39b9659af.webp" alt="" />
          </div>
        </div>
        <div>
          <h4 style={{ marginBottom: '20px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', lineHeight: '26px' }}>
            <li><a style={{ textDecoration: 'none', color: '#000' }} href="#">Contact Us</a></li>
            <li><a style={{ textDecoration: 'none', color: '#000' }} href="#">Blogs</a></li>
            <li><a style={{ textDecoration: 'none', color: '#000' }} href="#">SBI FASTag Recharge</a></li>
            <li><a style={{ textDecoration: 'none', color: '#000' }} href="#">Telangana Challan</a></li>
            <li><a style={{ textDecoration: 'none', color: '#000' }} href="#">Discover</a></li>
            <li><a style={{ textDecoration: 'none', color: '#000' }} href="#">Valet parking</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: '20px' }}>Products</h4>
          <ul style={{ listStyle: 'none', lineHeight: '26px' }}>
            <li><a style={{ textDecoration: 'none', color: '#000' }} href="#">Cars</a></li>
            <li><a style={{ textDecoration: 'none', color: '#000' }} href="#">Challan Information</a></li>
            <li><a style={{ textDecoration: 'none', color: '#000' }} href="#">FASTag</a></li>
            <li><a style={{ textDecoration: 'none', color: '#000' }} href="#">Parking Solutions</a></li>
            <li><a style={{ textDecoration: 'none', color: '#000' }} href="#">Fuel Price</a></li>
            <li><a style={{ textDecoration: 'none', color: '#000' }} href="#">RTO</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: '20px' }}>Reach us</h4>
          <ul style={{ listStyle: 'none', lineHeight: '26px' }}>
            <li><a style={{ textDecoration: 'none', color: '#000' }} href="#"> <MdEmail style={{ marginRight: '10px', marginBottom: '-2px' }} /> support@myparkplus.com</a></li>
            <li><a style={{ textDecoration: 'none', color: '#000' }} href="#"> <MdEmail style={{ marginRight: '10px', marginBottom: '-2px' }} /> sales@myparkplus.com</a></li>
            <li><a style={{ textDecoration: 'none', color: '#000', display: 'flex' }} href="#"><FaLocationDot style={{ marginRight: '10px', marginBottom: '-2px' }} /> <span>Unitech Cyber Park, 5th Floor, <br /> Tower A, Sec-39, Gurugram, <br /> Haryana 122022</span></a></li>

          </ul>
        </div>
      </div>
      <div style={{ backgroundColor: '#331f6c', padding: '33px 82px 43px 82px', display: 'flex', justifyContent: 'space-between', color: '#ffff' }}>
        <p>© 2020 Park+. All rights reserved</p>
        <p>Terms & Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
