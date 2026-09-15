const prompt = require("prompt-sync")();
function notas(a, b, c){
    media = (a + b + c)/3;
    return media
}
module.exports = {
    notas,
    prompt
}