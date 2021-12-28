import React, {useState} from 'react'
import imageLogo from '../../Asset/XMLID 306.svg'
import './UploadImage.css'
import { connect } from 'formik';
import Swal from "sweetalert2"

const fileToImage = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    // console.log(reader)
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    reader.readAsDataURL(file);
    // console.log(file, "file")
    })

function UploadSignup(props) {
    // console.log(props.value, "props")
    const [image, setImage] = useState(props.value)
    // const [isUploaded, setIsUploaded] = useState(false)
    const {formik} = props
    const {setFieldValue} = formik
    const handleImageChange = (file) => {
        console.log(file, "file")
        if(!file) {
            // setImage('');
            return;
          } else if (file.size > 2000000) {
            Swal.fire(
                "Error",
                "Image Maximum Size is 2 MB",
                "error"
            )
          } else {
            fileToImage(file)
            .then(dataUri => {
                console.log(dataUri, "dataUri")
                setImage(dataUri)
                setFieldValue(props.name, file)
            })
          }
      
        
    }
    // console.log("ini foto")
    // console.log(setImage, "ini pilih foto")

    return (
        <div className="upload-section">
            {image === "" || image === null ? (
                <>
                    <label htmlFor="upload-image">
                        <div>
                            <input 
                            id="upload-image" 
                            type="file" 
                            accept=".jpg,.jpeg,.gif,.png,.mov,.mp4" 
                            onChange={(event) => 
                                // console.log(event.target.files[0], "event")
                                handleImageChange(event.target.files[0] || null)
                            }
                            />
                            <img className="upload-icon-image" src={imageLogo} alt="logo" />
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

export default connect(UploadSignup)
