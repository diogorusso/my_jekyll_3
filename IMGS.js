var sizeOf = require('image-size');
const fs = require('fs');
var srcPath ="_dev/_assets/imgs/";
var srcFolder ="_dev/_assets/imgs/";


 // delete .DS_store from srcPath before process PSD
  if (fs.existsSync(srcPath+'.DS_store')) {
      fs.unlinkSync(srcPath+'.DS_store');
      console.log('successfully DELETED ---' + srcPath+'.DS_store');
  }


fs.readdir(srcPath, (err, srcPath) => {
	//console.log(srcPath);
  	//console.log("Senta QUE LA VEM HISTORIA!!!! --- Iniciando PSD CONVERT");
  

  srcPath.forEach(img => {
  	imgPath = srcFolder+img;
  	console.log("----------------- "+imgPath);

  	//sizeOf(imgPath, function (err, dimensions) {
  		//console.log(dimensions.width, dimensions.height);
  		//var mundo= dimensions.width;
  		//console.log(mundo);
	//});
    
  });

})


