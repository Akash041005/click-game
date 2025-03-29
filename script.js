let elem = document.querySelector('.elem')
elem.innerHTML='<h1>click me</h1>'
let f=0
let scoru = document.querySelector('#scoru')
let jeet = document.querySelector('#jeet')
let errr =  document.querySelector('#error')
let easy =  document.querySelector('#easy')
let mid=  document.querySelector('#mid')
let hard =  document.querySelector('#hard')
let diffi =  document.querySelector('.diffi')
let score = 0;
let change=0;


              easy.addEventListener('click',function(){
              f=1000

              diffi.style.display = 'none';

              });
              mid.addEventListener('click',function(){
                f=800;

                diffi.style.display = 'none';
                });
                hard.addEventListener('click',function(){
                  f=600
                
                diffi.style.display = 'none';

                  });


let l=0
let m=0
let d=0


 


let conf = 0;

if (conf === 1) {
  diffi.style.display = 'none';
}




let intervalId;

function startGame() {

  if (intervalId) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(function () {
    l = Math.floor(Math.random() * 100);
    m = Math.floor(Math.random() * 180);

    elem.style.marginLeft = `${l}%`;
    elem.style.marginTop = `${m}%`;
  }, f);
}

easy.addEventListener('click', startGame);
mid.addEventListener('click', startGame);
hard.addEventListener('click', startGame);
console.log(l,m);

elem.addEventListener('click',function(){
  
  
  
  
  let c1 =Math.floor(Math.random()*256)
  let c2 =Math.floor(Math.random()*256)
  let c3 =Math.floor(Math.random()*256)
    
   


    
    
if(change==0){

  elem.style.backgroundColor = `rgb(${c1},${c2},${c3})`
  

}

      score++;

      scoru.innerHTML=` Score : ${score} `

      if(score==100){

        jeet.innerHTML=`bas bhai JEET gaya refresh kar`

         scoru.innerHTML=` `
         elem.innerHTML=` `

         elem.style.height=`0%`;
         elem.style.width=`0%`;
         elem.style.border=`0px`




      }
              

    
    console.log(l,m);




})