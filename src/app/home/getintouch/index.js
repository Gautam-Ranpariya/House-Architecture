import React from 'react';
import './getintouch.scss';
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import SubmitButton from '../../../shared/components/submitbutton';

export default function GetInTouch() {
  return (
    <div className='getintouch'>
      <div className="container">
        <div className="innergetintouch">
          <h2>Get In Touch!</h2>
          <div className="vector"></div>
          <h3>WE ARE LOOKING FORWARD TO START A PROJECT WITH YOU! </h3>
          <p>Morbi convallis metus eros, semper efficitur auctor. Etiam sit amet convallis erat. Class aptent taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus nec dolor suscipit faucibus.</p>
          <div className='contactus'>
            <div className="address">
              <div className="subAddress">
                <span className="icons">
                  <IoLocationSharp className='icon' />
                </span>
                <h4>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</h4>
              </div>
              <div className="subAddress">
                <span className="icons">
                  <BsFillTelephoneFill className='icon' />
                </span>
                <h4>1 (234) 567-891</h4>
                <h4>1 (234) 987-654</h4>
              </div>
              <div className="subAddress">
                <span className="icons">
                  <MdOutlineAccessTimeFilled className='icon' />
                </span>
                <h4>Mon – Fri …… 10 am – 8 pm</h4>
                <h4>Sat, Sun …… Closed</h4>
              </div>
            </div>
            <div className="innerForms">
              <div className="input-text-email">
                <div className="input">
                  <input type="text" name="name" id="name" placeholder='Enter your Name' />
                </div>
                <div className="input">
                  <input type="email" name="email" id="email" placeholder='Enter a valid email address' />
                </div>
              </div>
              <div className="input">
                <textarea name="name" id="message" placeholder='Enter your message' rows="5"></textarea>
              </div>
              <div className="submitButton">
                <SubmitButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
