function getHex(){
    var letters = "0123456789ABCDEF";
    var color = '#';

    for (var i = 0; i < 6; i++){
        color += letters[(Math.floor(Math.random() * 16))];
    }

    return color;
}

function lockBox(itemNumber){
     var box = document.getElementsByTagName("box")[itemNumber];
     var lock = document.getElementsByTagName("lock")[itemNumber];

     if(lock.innerHTML == "Lock"){
        box.classList.toggle('locked');
        lock.innerHTML = "Locked";
     }
     else{
        box.classList.toggle('locked');
        lock.innerHTML = "Lock";
     }
}

function changeColor(itemNumber){
    var hex = getHex();

    if (document.getElementsByTagName("lock")[itemNumber].innerHTML == "Lock"){
        document.getElementsByTagName("hex")[itemNumber].innerHTML = hex;
        document.getElementsByTagName("box")[itemNumber].style.backgroundColor = hex;
    }
    
}

function changeAllColors(){
    for (var i = 0; i < 5; i++) {
        var hex = getHex();
        if (document.getElementsByTagName("lock")[i].innerHTML == "Lock"){
            document.getElementsByTagName("hex")[i].innerHTML = hex;
            document.getElementsByTagName("box")[i].style.backgroundColor = hex;
        }
    }
}


