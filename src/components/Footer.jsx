import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationCrosshairs,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="bg-gray-900 text-white h-60 flex items-center justify-around">
        <div className="footer-left flex flex-col justify-center gap-3 h-[100%]">
          <h1>Stay Connected:</h1>
          <div className="flex items-center gap-2">
            <FaLocationCrosshairs />
            <p>Location: Patna</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <p>Contact: 0123456789</p>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail />
            <p>Email: lifesaver@gmail.com</p>
          </div>
        </div>
        <div className="footer-middle flex flex-col gap-3">
          <h1>Quick Links:</h1>
          <ul>
            <li className="flex flex-col">
              <a href="">About Us</a>
              <a href="">Why Donate?</a>
              <a href="">Become a Donor</a>
              <a href="">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="footer-right flex flex-col gap-2">
          <h1>Follow Us:</h1>
          <div className="flex items-center gap-2">
            <FaGithub />
            <a href="https://github.com/Ajaykr01">GitHub</a>
          </div>
          <div className="flex items-center gap-2">
            <FaTwitter />
            <a href="https://x.com/dev_ajay_87">Twitter</a>
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/ajay-kumar-a921a624b/">
              Linkedin
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaInstagram />
            <a href="https://www.instagram.com/mr_ajay_3472/">Instagram</a>
          </div>
        </div>
      </div>
      <hr />
      <div className="bg-gray-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} LifeSaver. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
