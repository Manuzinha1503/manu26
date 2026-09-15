let contador = 1;
function tempo(){
 const intervalo =setInterval(()=> {
    
    console.log(contador);
    contador = contador + 1;
    if(contador > 5){
        clearInterval(intervalo);
    }
    
},1000);
}
tempo();