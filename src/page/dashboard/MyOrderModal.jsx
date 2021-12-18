// import React from "react";
// import styles from "./MyOrder.module.scss";
// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";

// export default function MyOrderModal(props) {
//   if (!props.open) {
//     return null;
//   }

//   const style = {
//     display: "flex",
//     justifyContent: "space-around",
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 400,
//     bgcolor: "#fffaef",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 4,
//   };

//   return (
//     <div>
//       <Modal
//         // open={open}
//         // onClose={handleClose}
//         aria-labelledby='modal-modal-title'
//         aria-describedby='modal-modal-description'>
//         <Box sx={style}>
//           <Typography id='modal-modal-title' variant='h6' component='h2'>
//             <div className={styles.ProductContent}>
//               <h4>Product content</h4>
//               <div className={styles.ProductList}>
//                 <ul>
//                   <li style={{ listStyleType: "disc" }}>
//                     1 kg package egg noodles
//                   </li>
//                   <li style={{ listStyleType: "disc" }}>50 gr butter</li>
//                   <li style={{ listStyleType: "disc" }}>
//                     50 gr minced parsley
//                   </li>
//                   <li style={{ listStyleType: "disc" }}>50 gr salt</li>
//                   <li style={{ listStyleType: "disc" }}>10 gr black pepper</li>
//                   <li style={{ listStyleType: "disc" }}>100 ml olive oil</li>
//                 </ul>
//               </div>
//             </div>
//           </Typography>
//           <Typography id='modal-modal-description' sx={{ mt: 2 }}></Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

import styles from "./MyOrderModal.module.scss";

export default function MyOrderModal(props) {
  if (!props.open) {
    return null;
  }

  return (
    <div className={styles.modalShare}>
      <div className={styles.shareContainer}>
        <div className={styles.shareTitle}>
          <h2>Help by sharing</h2>
          <div onClick={props.onClose} className={styles.modalIcon}>
          </div>
        </div>
        <div className={styles.shareContent}>
          <div className={styles.shareInput}>
            <input type='text'/>
          </div>
          <div className={styles.shareButton}>
            <button>COPY LINK</button>
          </div>
        </div>
      </div>
    </div>
  );
}
