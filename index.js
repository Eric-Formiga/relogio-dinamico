function carregar(){
var msg = document.getElementById("msg")
var img = document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()


msg.innerHTML = `Agora são ${hora} Horas e ${minutos} minutos `


if(hora >= 6 && hora <= 11){
    img.src = "./images/manha.jpg"
}else if(hora >= 12 && hora <= 18 ){
    img.src = "./images/tarde.jpg"
}else{
    img.src = "./images/noite.jpg"
}
}