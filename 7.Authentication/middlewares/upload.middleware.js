import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination: (req, fild, cd) => {
    cd(null, "uploads/");
  },
  filename: (req, file, cd) => {
    cd(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const checkFileFilter = (req, file, cd) => {
  if (file.mimetype.startsWith("image")) {
    cd(null, true);
  } else {
    cd(new Error("Not an image!please upload only images"));
  }
};
export default multer({
  fileFilter: checkFileFilter,
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
