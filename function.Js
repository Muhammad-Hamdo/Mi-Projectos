var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src ="imagesforwebsite/images/Sun.PNG";
    }else{
        icon.src="imagesforwebsite/images/moon.PNG";
    }
}