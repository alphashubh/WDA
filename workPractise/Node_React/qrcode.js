var qrCode = require('qrcode');

var qr = qrCode.qrcode(4, 'M');
qr.addData(text);
qr.make();

qr.createImgTag(4);    // creates an <img> tag as text
qr.createTableTag(4);  // creates a <table> tag as text

