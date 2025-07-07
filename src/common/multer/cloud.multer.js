import multer from "multer";

const storage = multer.memoryStorage();
const uploadCloud = multer({ storage: storage });

export default uploadCloud;
