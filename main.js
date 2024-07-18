function rolldie(){
    var numrandom1=Math.floor((Math.random() *6)+1);
    const onedieimage='dice'+numrandom1+'.jpg';
    document.querySelectorAll('img')[0].setAttribute('src',onedieimage);
    var numrandom2=Math.floor((Math.random() *6)+1);
    const seconddieimage='dice'+numrandom2+'.jpg';
    document.querySelectorAll('img')[1].setAttribute('src',seconddieimage);
  if(numrandom1 >numrandom2){
    document.querySelector('h1').innerHTML="the player1 wins!";

  }else if(numrandom1 <numrandom2){
    document.querySelector('h1').innerHTML="the player2 wins!";


  }else{
    document.querySelector('h1').innerHTML="draw!";

  }
}
window.onload=rolldie();
   