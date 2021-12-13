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

function UploadImage() {
    const [image, setImage] = useState('')
    const [isUploaded, setIsUploaded] = useState(false)
    const handleImageChange = (file) => {
        // if(e.target.files && e.target.files[0]) {
        //     let reader = new FileReader();
            
        //     reader.onload = function (e) {
        //         console.log(e)
        //         setImage(e.target.result)
        //         setIsUploaded(true)
        //     }
        //     reader.readAsDataURL(e.target.files[0])
        // }
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
                            <img className="upload-image" src={imageLogo} alt="logo image" />
                            <h6 className="upload-text">Upload Profile Photo</h6>
                        </div>
                    </label>
                    {/* <input 
                        id="upload-image" 
                        type="file" 
                        accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                        onChange={(event) => 
                            console.log("bisa")
                            handleImageChange(event.target.files[0] || null)
                        }
                    /> */}
                </>
                )
            :
                (
                    <img id="uploaded-image" src={image} alt="uploaded.img" />
                )
            }
            
        </div>
        
    )
}

export default UploadImage
