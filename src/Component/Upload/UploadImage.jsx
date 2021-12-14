import React, {useState} from 'react'
import imageLogo from '../../Asset/XMLID 306.svg'
import './UploadImage.css'

const fileToImage = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    console.log(reader)
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    reader.readAsDataURL(file);
    })

function UploadImage(props) {
    console.log(props)
    const [image, setImage] = useState('')
    const [isUploaded, setIsUploaded] = useState(false)
    const handleImageChange = (file) => {
        console.log("bisa")
        if(!file) {
            setImage('');
            return;
          }
      
        fileToImage(file)
            .then(dataUri => {
                console.log(dataUri)
              setImage(dataUri)
            })
    }
    console.log(image, "ini foto")
    console.log(setImage, "ini pilih foto")

    return (
        <div className="upload-section">
            {image == "" || image == null ? (
                <>
                    <label htmlFor="upload-image">
                        <div>
                            <input 
                            id="upload-image" 
                            type="file" 
                            accept=".jpg,.jpeg,.gif,.png,.mov,.mp4" 
                            onChange={(event) => 
                                handleImageChange(event.target.files[0] || null)
                            }
                            />
                            <img className="upload-icon-image" src={imageLogo} alt="logo image" />
                            <h6 className="upload-text">Upload Profile Photo</h6>
                        </div>
                    </label>
                </>
                )
            :
                (
                    <img id="uploaded-image" src={image} alt="uploaded.img" value={image} />
                )
            }
            
        </div>
        
    )
}

export default UploadImage
