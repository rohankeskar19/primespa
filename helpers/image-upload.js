var fs = require("fs");
var path = require("path");
const { v4: uuidv4 } = require('uuid');


module.exports = async (images) => {
    return new Promise((resolve, reject) => {
        try {
            console.log(images.length);
            if(images.length) {
                let filesArr = [];
                const filePath = path.resolve(__dirname, '../public/uploads');
                if (!fs.existsSync(filePath)) {
                    console.log('filepath => ', filePath);
                    fs.mkdirSync(filePath);
                }
                for(let i=0; i < images.length; i++) {
                    var matches = images[i].match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
                    console.log("matches --> ",matches);
                    if(!matches) {
                        filesArr = [...filesArr, images[i]];
                        continue;
                    }
                    var saved_file_name = uuidv4();
                    let ext = images[i].substring(images[i].indexOf('/') + 1, images[i].indexOf(';base64'));
                    let strImage = Buffer.from(matches[2], 'base64');
                    let fileName = filePath + "/" + saved_file_name + "." + ext;
                    fs.writeFileSync(fileName , strImage);
                    let fileNameDB = "/uploads" + "/" + saved_file_name + "." + ext;
                    filesArr = [...filesArr, fileNameDB];
                }
                resolve(filesArr);
            } else {
                reject("err");
            }
        } catch(err) {
            reject(err);
        }
    }).catch(err => {
        console.log('Error in image upload ->', err);
        throw err;
    })
    
}