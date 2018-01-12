const express= require('express');
const router= express.Router();

var qrcode= {};
router.post('/generateQr', (req,res) => {
    console.log(req.body.form);
    qrcode=req.body.form;
    res.send(qrcode);
})

router.get('/generateQr', (req,res) => {

    res.send(qrcode);
})

module.exports = router;