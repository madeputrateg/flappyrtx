let jlngame=false
let start=true
let jarak=50
let kebrapa=0
let tinggi=0
let charY=50
let kecgrav=0
let pergrav=-2
let loader=0
let dilewati=0
const iddiv = document.getElementById("cobak")
const idchar = document.getElementById("char")
const idscore =document.getElementById("score")
tiangtiang=[]
function tiang(posisi,tinggi){
    this.posisi=posisi
    this.tinggi=tinggi
}
var mulai
var game
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        if(jlngame==true){charjump()}
        else if (jlngame===false){
        jlngame=true
        iddiv.innerHTML=""
        idchar.innerHTML=""
        idscore.textContent=""
        mulai = setInterval(mapper,70)
        game = setInterval(render,70)
        charY=50
        kecgrav=0
        dilewati=0
        tiangtiang=[]
        loader=0
        kebrapa=0
        jarak=50
        }
    }
}



function render(){
    for(let i =loader;i<tiangtiang.length-1;i+=1){
    
    
    let f = `ke${i}`
    tiangtiang[i].posisi+=1;
    document.getElementById(f).innerHTML=`
    <img src="./gambar/tiang.jpg" style="bottom:0%;position: absolute;height: ${tiangtiang[i].tinggi}%;width:4em;right:${tiangtiang[i].posisi}%">
    <img src="./gambar/tiang.jpg" style="top:0%;position: absolute;height: ${100-tiangtiang[i].tinggi-40}%;width:4em;right:${tiangtiang[i].posisi}%">
    ` 
    if(tiangtiang[i].posisi>=110){loader+=1}
    
    }
}


function mapper(){
    if(jlngame==true){
        if(jarak===50){
            tinggi=Math.floor(Math.random()*55+1)
            iddiv.innerHTML+=`<div id="ke${kebrapa}">c</div>`
            
            tiangtiang.push(new tiang(0,tinggi))
            jarak=0
            kebrapa+=1
        }
        kecgrav+=pergrav
        charY+=kecgrav
        idchar.innerHTML=`<img src="./gambar/images.jpg" style="bottom:${charY}%;right:45%;position:absolute;width:3em;height:3em;">`
        idscore.textContent=dilewati
        jarak++
        losecon()
    }
}

function charjump(){
    charY+=10
    kecgrav=8
}
function lose(){
        jlngame=false
        clearInterval(mulai)
        clearInterval(game)
}
function losecon(){
    if(charY<=0){lose()}
    if(charY<=tiangtiang[dilewati].tinggi && tiangtiang[dilewati].posisi==40){lose()}
    if(charY>=tiangtiang[dilewati].tinggi+40+3 && tiangtiang[dilewati].posisi==40){lose()}
    if(tiangtiang[dilewati].posisi==40){dilewati+=1}
}
