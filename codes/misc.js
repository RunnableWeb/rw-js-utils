 // TODO move to rw-js-utils module
 module.exports =  {
    getVerifyCodeOf5Digits: getVerifyCodeOf5Digits
 }
 function getVerifyCodeOf5Digits() {
    // get reandom number with 5 digits 
    const code = Math.floor(Math.random()*90000) + 10000;
    return code;
}