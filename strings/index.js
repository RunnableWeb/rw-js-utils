/**
 * 
 * @param {string} str string
 * @param {number} idx index
 * @param {string} strToSet string to be set
 * @return {string} updated string
 */
function replaceAt(str, idx, strToSet) {
    return str.substring(0, idx) + strToSet + str.substring(idx+1);
}

module.exports = {
    replaceAt
}


