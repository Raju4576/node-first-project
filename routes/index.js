var express = require('express');
var router = express.Router();
var usercontroller = require('../controller/usercontroller')
var onlycontroller = require('../controller/onlycontroller')
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })
router.post('/', upload.single('image'), usercontroller.insert);
router.post('/cart', usercontroller.cart_insert);
router.get('/', usercontroller.select)
router.post('/upload', upload.single('image'), onlycontroller.insert)

module.exports = router;
