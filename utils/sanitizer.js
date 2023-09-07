const md5 = require('md5')
const renameFile = (url)=>{
    const filename = url.split('/').pop();
    const hash = md5(url);
    const ext = filename.substr(filename.lastIndexOf('.'))

    return{
        filename: `${md5(url)}${ext}`,
        hash
    };
};

exports.renameFile = renameFile
