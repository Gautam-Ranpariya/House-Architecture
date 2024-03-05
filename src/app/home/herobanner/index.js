import React from 'react';
import './herobanner.scss';
import InputEmail from '../../../shared/components/inputemail';
import SubmitButton from '../../../shared/components/submitbutton';

export default function HeroBanner() {
    return (
        <div className='mainHeroBanner'>
            <div className="layer"></div>
            <div className="layer2">
            <div className="data">
                <h1 className='heroBannerHeadingText'>Building a House?</h1>
                <h4 className='heroBannerSubHeadingText'>You'll get to personalize the details of your house when you're building a house from the ground up—from the layout</h4>
                <div className="herobannerFlex">
                    <div className='inputemail'>
                        <InputEmail />
                    </div>
                    <div className="submitButton">
                        <SubmitButton />
                    </div>
                </div>
                <div className='imagelinks'>
                    <p>image from <a href="abc">freepik</a></p>
                </div>
            </div>
            </div>
        </div>
    )
}
