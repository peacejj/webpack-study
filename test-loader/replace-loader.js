const loaderUtils = require('loader-utils');

module.exports = function(source) {

    // let callback  = this.async();
    //
    // setTimeout(() => {
    //     let options = loaderUtils.getOptions(this)
    //     callback(null, source.replace(/World/g, options.text));
    // }, 10000);

    let options = loaderUtils.getOptions(this);
    return source.replace(/World/g, options.text);
};
