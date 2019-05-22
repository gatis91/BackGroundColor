function changeBG1(){
    sliders=document.getElementsByClassName("slide");
    colorsValauePlace=document.getElementsByClassName("colorvalue");   
    var colors=[];
    for (var i = 0; i < sliders.length; i++) {
        colors.push(sliders[i].value)
        colorsValauePlace[i].innerHTML=sliders[i].value;        
    }
    var firstColor="rgba("+colors[0]+", "+colors[1]+", "+colors[2]+", "+colors[3]+")";
    document.getElementById("box1").style.backgroundColor = firstColor;
    document.getElementById("box1").innerHTML=firstColor;
    var secondColor="rgba("+colors[4]+", "+colors[5]+", "+colors[6]+", "+colors[7]+")";
    document.getElementById("box2").style.backgroundColor = secondColor;
    document.getElementById("box2").innerHTML=secondColor;
    var angle=colors[8]+"deg";
    var gradient="linear-gradient(" + angle+ ", "+firstColor+ ", " +secondColor+")";

    document.body.style.backgroundImage=gradient;
    document.getElementById("results").innerHTML="background-image: "+gradient+ ";"
 }



