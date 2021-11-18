function toggle(imgElem, divId) {
      if(document.getElementById) {
        var divElem = document.getElementById(divId);
        if(divElem.className == "closed") {
            divElem.className = "opened";
            document.getElementById("future").InnerText = 'Открыть';
        } 
        else {
            divElem.className = "closed";
            document.getElementById("future").InnerText = 'Закрыть';
        }
    }
}

    