import React, {useState} from 'react'
import imageLogo from '../../Asset/XMLID 306.svg'
import './UploadRecipe.css'
import { connect } from 'formik';

const fileToImage = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    // console.log(reader)
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    reader.readAsDataURL(file);
    // console.log(file, "file")
    })

function UploadRecipe(props) {
    // console.log(props.value, "props")
    const [image, setImage] = useState(props.value)
    // const [isUploaded, setIsUploaded] = useState(false)
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
        // console.log(file)
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
    // console.log(setImage, "ini pilih foto")

    return (
        <div className="upload-recipe">
            {image === "" || image === null ? (
                <>
                    <label htmlFor="upload-pict">
                        <div>
                            <input 
                            id="upload-pict" 
                            type="file" 
                            accept=".jpg,.jpeg,.gif,.png,.mov,.mp4" 
                            onChange={(event) => 
                                // console.log(event.target.files[0], "event")
                                handleImageChange(event.target.files[0] || null)
                            }
                            />
                            <img className="logo-pict" src={imageLogo} alt="logo" />
                            <h6 className="text-pict" >Upload Profile Photo</h6>
                        </div>
                    </label>
                </>
                )
            :
                (
                    <img id="uploaded-pict" src={image} alt="uploaded.img" value={image} />
                )
            }
        </div>
    )
}

export default connect(UploadRecipe)
