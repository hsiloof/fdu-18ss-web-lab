window.onload=function(){
    var featured=document.getElementById("featured");
    var featuredImg=featured.getElementsByTagName("img")[0];
    var featuredFigcaption=featured.getElementsByTagName("figcaption")[0];
    var thumbNails=document.getElementById("thumbnails");
    var thumbNailsImg=thumbNails.getElementsByTagName("img");

    thumbNailsImg[0].onclick=function(){
        featuredImg.src="images/medium/5855774224.jpg";
        featuredImg.title="Battle";
        featuredFigcaption.innerHTML=Battle;
    }
    thumbNailsImg[1].onclick=function(){
        featuredImg.src="images/medium/5856697109.jpg";
        featuredImg.title="Luneburg";
        featuredFigcaption.innerHTML="Luneburg";
    }
    thumbNailsImg[2].onclick=function(){
        featuredImg.src="images/medium/6119130918.jpg";
        featuredImg.title="Bermuda";
        featuredFigcaption.innerHTML="Bermuda";
    }
    thumbNailsImg[3].onclick=function(){
        featuredImg.src="images/medium/8711645510.jpg";
        featuredImg.title="Athens";
        featuredFigcaption.innerHTML="Athens";
    }
    thumbNailsImg[4].onclick=function(){
        featuredImg.src="images/medium/9504449928.jpg";
        featuredImg.title="Florence";
        featuredFigcaption.innerHTML="Florence";
    }
   
    
    featuredFigcaption.onmousemove = function () {
        startMove(80);
    }
    featuredFigcaption.onmouseout = function () {
        startMove(0);
    }
    var timer = null;
    var alpha = 0;
    
    function startMove(iTarget) {
        clearInterval(timer);
        var iSpeed = 0;
        timer = setInterval(function(){
    
            if(alpha>iTarget){
                iSpeed = -4;
            }else{
                iSpeed = 4;
            }
            if(alpha == iTarget){
                clearInterval(timer);
            }else{
                alpha += iSpeed;
                featuredFigcaption.style.opacity = alpha/100;
                featuredFigcaption.style.filter = 'alpha(opacity:'+alpha+')';
            }
        },50);

}
}

