import multer from "multer";
import path from "path";

// Definimos el almacenamiento
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join("public", "pets-photos")); 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname); 
    cb(null, uniqueSuffix + ext); 
  },
});

// Creamos el middleware de multer
export const uploadMJC = multer({ storage });
