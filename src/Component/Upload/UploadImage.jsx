import React from 'react'
import imageLogo from '../../Asset/XMLID 306.svg'
import './UploadImage.css'

function UploadImage() {
    return (
        <div className="upload-section">
            {/* <input type="file" accept="image/*" /> */}
            <img className="upload-image" src={imageLogo} alt="logo image" />
            <h6 className="upload-text">Upload Profile Photo</h6>
            
            
        </div>
    )
}

export default UploadImage
