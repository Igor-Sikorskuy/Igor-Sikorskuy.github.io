function applyImageSliderEvents() {
    function moveright() {
        currentImg += 1;
        if(currentImg >= imgPathArr.length){
            currentImg = 0;
        }
        
        updateCurrentImage("right");
    }
    
    function moveleft() {
        currentImg -= 1;
        if(currentImg < 0){
            currentImg = imgPathArr.length - 1;
        }
        
        updateCurrentImage("left");
        
    }
    
    function updateCurrentImage(str)
    {
        var fakeimgs = document.getElementsByClassName("fake-img");
        var realimgs = document.getElementsByClassName("main-img");
        
        for (var imgg of realimgs){
            imgg.style.transition = "transform 0.7s linear";
            
            if(str == "left"){
                imgg.style.transform = 'translateX(-250%)';    
            }else{
                imgg.style.transform = 'translateX(250%)';
            }
            imgg.className="fake-img";
        }
        
        for (var gmi of fakeimgs) {
            gmi.style.transition = "transform 0s linear";
            gmi.src = imgPathArr[currentImg];
            if(str == "left") {
                gmi.style.transform = 'translateX(250%)';
                
                gmi.className = "main-img";
                gmi.style.transition = "transform 0.7s linear";
                
                gmi.style.transform = 'translateX(0%)';
            } else {
                gmi.style.transform = 'translateX(-250%)';
                gmi.className = "main-img";
                gmi.style.transition = "transform 0.7s linear";
                
                gmi.style.transform = 'translateX(0%)';
            }
            
            gmi.className="main-img";
        }
        
        document.getElementById("main-img-text").innerHTML = imgDescArr[currentImg];
    }
    var galleries = document.getElementsByClassName("cross_");
        for(gallery of galleries) {
            
            var imgs = gallery.childNodes;
            
            for(img of imgs) {
                if(img.tagName == "IMG") {
                    img.onclick = onclick_upperimage;
                }
            }
        }
         function onclick_upperimage(ev) {
            
            var div_img = document.createElement("div");
            div_img.id = "popup";
    
            var x_text = document.createElement("p");
    
            x_text.innerHTML = "X";
            x_text.id = "X_Close";
    
    
            div_img.onclick = function(ev)
            {
                if(ev.target.tagName != "IMG")
                {
                    document.body.removeChild(document.getElementById("popup"));
                }
            }
    
            var img = document.createElement("img");
            img.src = ev.target.src;
            
            document.body.appendChild(div_img).appendChild(img);
            div_img.appendChild(x_text);
        }
    
    }