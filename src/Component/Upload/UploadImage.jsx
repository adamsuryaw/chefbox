import React, {useState} from 'react'
import imageLogo from '../../Asset/XMLID 306.svg'
import './UploadImage.css'
import { connect } from 'formik';
import { useEffect } from "react";

const fileToImage = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    // console.log(reader)
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    reader.readAsDataURL(file);
    // console.log(file, "file")
    })

function UploadImage(props) {
    // console.log(props.value, "props")
    const [image, setImage] = useState("")
    console.log(image, "gambar1")
    const [isUploaded, setIsUploaded] = useState(false)
    const {formik} = props
    const {setFieldValue} = formik

    useEffect(() => {
        if(props.value && !isUploaded) {
            setImage(props.value)
            setIsUploaded(true)
        }
    }, [isUploaded, props.value])

    const handleImageChange = (file) => {
        // const fileReader = new FileReader();
        // fileReader.onload = () => {
        //     if (fileReader.readyState === 2) {
        //         setIsUploaded('avatar', fileReader.result);
        //         setImage(fileReader.result);
        //     }
        //   };
        // fileReader.readAsDataURL(e.target.files[0]);
        console.log(file, "file")
        if(!file) {
            // setImage('');
            return;
          }
      
        fileToImage(file)
            .then(dataUri => {
                // console.log(dataUri, "dataUri")
                setImage(dataUri)
                setFieldValue(props.name, file)
            })
    }
    // console.log("ini foto")
    // console.log(image, "ini pilih foto")
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
                            <img id="uploaded-image" src={image} alt="uploaded.img" value={image} />
                         </div>
                    </label>
                )
            }
        </div>
    )
}

export default connect(UploadImage)
