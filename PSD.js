var PSD 	= require('psd');
const fs = require('fs');
var destPath = '_dev/_assets/imgs/';
var srcPath = '_design/links/';
//path for PSD editting
var psdFolder = process.argv[2] ||'_design/links/';


function PSDconvert (value,name){
  
  PSD.open(value).then(function (value) {
        console.log("Satarting  PSD CONVERT --- "+ name);
        return value.image.saveAsPng('_dev/_assets/imgs/'+name+'.jpg');
      }).then(function () {
        console.log("Finished   PSD CONVERT --- "+ name);
    });
}

fs.readdir(psdFolder, (err, psdFolder) => {
 

  // delete destPath folder

  if (fs.existsSync(destPath)) {
    var files = fs.readdirSync(destPath);
      if (files.length > 0){
        for (var i = 0; i < files.length; i++) {
          var filePath = destPath + '/' + files[i];
          if (fs.statSync(filePath).isFile())
            fs.unlinkSync(filePath);
          else
            rmDir(filePath);
        }
      fs.rmdirSync(destPath);
    };
    console.log('successfully DELETED OLD ---' + destPath);
  }

  // create new destPath

  if (!fs.existsSync(destPath)) {
    fs.mkdir(destPath);
    console.log("successfully CREATED NEW ---" + destPath);
  }

  // delete .DS_store from srcPath before process PSD
  if (fs.existsSync(srcPath+'.DS_store')) {
      fs.unlinkSync(srcPath+'.DS_store');
      console.log('successfully DELETED ---' + srcPath+'.DS_store');
  }





  console.log(psdFolder);
  console.log("Senta QUE LA VEM HISTORIA!!!! --- Iniciando PSD CONVERT");

  psdFolder.forEach(psd => {
    psdUrl = process.argv[2] ||srcPath+psd;
    psdName = psd.substring(0, psd.lastIndexOf(".psd"));
    PSDconvert(psdUrl,psdName);
  });
})

