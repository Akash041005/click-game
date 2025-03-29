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
              f=1

              diffi.style.display = 'none';

              });
              mid.addEventListener('click',function(){
                f=2;

                diffi.style.display = 'none';
                });
                hard.addEventListener('click',function(){
                  f=3
                
                diffi.style.display = 'none';

                  });


let l=0
let m=0
let d=0


 


if(f==3){d=400}
else if(f==2){d=600}
else if(f==1){d=900}

else if(f==0 || f==null || f==undefined){

  errr.innerHTML='enter difficulty properly '
}
if(conf=1){
  diffi.style.display = 'none';
}



setInterval(function(){
  l=Math.floor(Math.random()*80)
  m= Math.floor(Math.random()*90)

  elem.style.marginLeft = `${l}%`;
    elem.style.marginTop = `${m}%`;

  
},d)
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