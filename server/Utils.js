var utils = {};
utils.aws_bytes_to_img = function (data) {
    var str = data.reduce(function(a,b){ return a+String.fromCharCode(b) },'');
    return Buffer.from(str).toString('base64').replace(/.{76}(?=.)/g,'$&\n');
}

module.exports = utils