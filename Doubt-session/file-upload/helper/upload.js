import multer from "multer";

// Multer config
const fileUpload = multer({ dest: "uploads/" });

export default fileUpload;
