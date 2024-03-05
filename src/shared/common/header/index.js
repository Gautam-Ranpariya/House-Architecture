import React from 'react';
import './header.scss';
import logo from '../../../assets/images/logo192.png';
import { AiOutlineMenu } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

export default function Header() {
  return (
    <div className='mainHeader'>
        <div className="innerHeader">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="menu">
                <span className="menuIcon"><AiOutlineMenu className='icon ' /></span>
                <span className="feshbookIcon"><FaFacebookF className='icon' /></span>
                <span className="twitterIcon"><FaTwitter className='icon' /></span>
                <span className="instagramIcon"><FaInstagram className='icon' /></span>
            </div>
        </div>
      </div>
  )
}
