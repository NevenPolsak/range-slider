let slider= document.getElementById("rangeValue")
let btn = document.getElementById("result")
btn.innerHTML=slider.value 
slider.oninput=function(){
    btn.innerHTML=this.value 
}
