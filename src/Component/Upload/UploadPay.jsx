import React, {useState} from 'react'
import imageLogo from '../../Asset/XMLID 306.svg'
import './UploadPay.css'
import { connect, getIn } from 'formik';
import Button from "@mui/material/Button";

const fileToImage = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    // console.log(reader)
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    reader.readAsDataURL(file);
    // console.log(file, "file")
    })

function UploadPay(props) {
    // console.log(props.value, "props")
    const [image, setImage] = useState(props.value)
    const [isUploaded, setIsUploaded] = useState(false)
    const {formik} = props
    const {setFieldValue} = formik
    const handleImageChange = (file) => {
        // const fileReader = new FileReader();
        // fileReader.onload = () => {
        //     if (fileReader.readyState === 2) {
        //         setIsUploaded('avatar', fileReader.result);
        //         setImage(fileReader.result);
        //     }
        //   };
        // fileReader.readAsDataURL(e.target.files[0]);
        console.log(file)
        if(!file) {
            // setImage('');
            return;
          }
      
        fileToImage(file)
            .then(dataUri => {
                console.log(dataUri, "dataUri")
                setImage(dataUri)
                setFieldValue(props.name, file)
            })
    }
    // console.log("ini foto")
    // console.log(setImage, "ini pilih foto")

    return (
        <div className="upload-pay">
            {image == "" || image == null ? (
                <>
                    <label htmlFor="upload-pay">
                        <div>
                            <input 
                            id="upload-pay" 
                            type="file" 
                            accept=".jpg,.jpeg,.gif,.png,.mov,.mp4" 
                            onChange={(event) => 
                                // console.log(event.target.files[0], "event")
                                handleImageChange(event.target.files[0] || null)
                            }
                            />
                            <div className="upload-payment">
                                <h6>
                                Upload Receipt
                                </h6>
                            </div>
                        </div>
                    </label>
                </>
                )
            :
                (
                    <img src={image} alt="uploaded.img" value={image} />
                )
            }
        </div>
    )
}

export default connect(UploadPay)
