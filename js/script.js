let p1price=document.getElementById('product1price')
let pqtn=document.getElementById('product-qtn')
let total=document.getElementById('total')
let part1=document.getElementById('part1')

let p1price2=document.getElementById('product1price2')
let pqtn2=document.getElementById('product-qtn2')
let part2=document.getElementById('part2')

let p1price3=document.getElementById('product1price3')
let pqtn3=document.getElementById('product-qtn3')
let part3=document.getElementById('part3')


let heart=document.getElementById('heart')

function heart1(){
  if(hearth1.style.color=='red'){
    hearth1.style.color='black'
  }
  else{
    hearth1.style.color='red'
  }
}
function inc(){

  pqtn.innerHTML=+pqtn.innerHTML+1
  p1price.innerHTML=+p1price.innerHTML+20;
  total.innerHTML=+total.innerHTML+20
}

function dec(){
  if(pqtn.innerHTML==0){
    pqtn.innerHTML=pqtn.innerHTML
    total.innerHTML=+total.innerHTML
    p1price.innerHTML=p1price.innerHTML
  }
  else{  pqtn.innerHTML=+pqtn.innerHTML-1
    total.innerHTML=+total.innerHTML-20
    p1price.innerHTML=+p1price.innerHTML-20}

}
function remove(){
part1.style.display='none'
total.innerHTML=+total.innerHTML-p1price.innerHTML
}
function heart2(){
  if(hearth2.style.color=='red'){
    hearth2.style.color='black'
  }
  else{
    hearth2.style.color='red'
  }
}
function inc2(){
  pqtn2.innerHTML=+pqtn2.innerHTML+1
  p1price2.innerHTML=+p1price2.innerHTML+30;
  total.innerHTML=+total.innerHTML+30
}
function dec2(){
  if(pqtn2.innerHTML==0){
    pqtn2.innerHTML=pqtn2.innerHTML
    total.innerHTML=+total.innerHTML
    p1price2.innerHTML=p1price2.innerHTML
  }
  else{  pqtn2.innerHTML=+pqtn2.innerHTML-1
    total.innerHTML=+total.innerHTML-30
    p1price2.innerHTML=+p1price2.innerHTML-30}
}
function remove2 (){
part2.style.display='none'
total.innerHTML=total.innerHTML-p1price2.innerHTML
}


function heart3(){
  if(heart.style.color=='red'){
    heart.style.color='black'
  }
  else{
    heart.style.color='red'
  }
}
function inc3(){
  pqtn3.innerHTML=+pqtn3.innerHTML+1
  p1price3.innerHTML=+p1price3.innerHTML+25;
  total.innerHTML=+total.innerHTML+25
}

function dec3(){
  if(pqtn3.innerHTML==0){
    pqtn3.innerHTML=pqtn3.innerHTML
    total.innerHTML=+total.innerHTML
    p1price3.innerHTML=p1price3.innerHTML
  }
  else{  pqtn3.innerHTML=+pqtn3.innerHTML-1
    total.innerHTML=+total.innerHTML-25
    p1price3.innerHTML=+p1price3.innerHTML-25}
    

}
function remove3(){
part3.style.display='none'
total.innerHTML=total.innerHTML-p1price3.innerHTML
}
function remise()

{
  s=parseInt(p1price.innerHTML)+parseInt (p1price2.innerHTML)+parseInt (p1price3.innerHTML) 
  console.log(s)
  if (total.innerHTML>=100) {
total.innerHTML=s-((s/100)*10)
}   
}
 