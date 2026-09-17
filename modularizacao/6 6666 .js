const prompt = require("prompt-sync")();
function notas(a, b, c){
    media = (a + b + c)/3;
    console.log(media);
    return media
}
module.exports = {
    notas,
    prompt
}