import React from 'react'
import './Foot.css'
import logoWhite from '../../Asset/Group 2-1.svg'
import facebookLogo from '../../Asset/Facebook-1.svg'
import twitterLogo from '../../Asset/Twitter.svg'
import linkedinLogo from '../../Asset/Linked In.svg'

function Foot() {
    return (
        <div className="foot-section">
            <div className="foot-right">
                <img src={logoWhite} alt="" />
                <h5>
                    ©2021 ChefBox. All right reserved 
                </h5>
            </div>
            <div className="foot-about">
                <h4>
                    About Us
                </h4>
                <h6>About ChefBox</h6>
                <h6>Contact Us</h6>
                <h6>Features</h6>
                <h6>Careers</h6>
            </div>
            <div className="foot-resources">
                <h4>
                    Resources
                </h4>
                <h6>Help center</h6>
                <h6>Privacy Policy</h6>
                <h6>Term of Service</h6>
            </div>
            <div className="foot-get">
                <h4>
                    Get in touch
                </h4>
                <h6>Questions or feedback?</h6>
                <h6>We’d love to hear from you</h6>
                <div className="sosmed-foot">
                    <img src={facebookLogo} alt="" style={{marginRight: '13px'}}/>
                    <img src={twitterLogo} alt="" style={{marginRight: '13px'}}/>
                    <img src={linkedinLogo} alt="" style={{marginRight: '13px'}}/>
                </div>
            </div>
        </div>
    )
}

export default Foot
