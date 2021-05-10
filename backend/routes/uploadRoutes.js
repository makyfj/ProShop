import path from "path";
import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const checkFileType = (file, cb) => {
  const fileTypes = /jpg|jpeg|png/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mineType = fileTypes.test(file.mineType);

  if (extName && mineType) {
    return cb(null, true);
  } else {
    cb("Images only!");
  }
};

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    // Checks only for jpg, jpeg, png
    checkFileType();
  },
});

// endpoint
router.post("/", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default router;
