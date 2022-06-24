function getHex(){
    var letters = "0123456789ABCDEF";
    var color = '#';

    for (var i = 0; i < 6; i++){
        color += letters[(Math.floor(Math.random() * 16))];
    }

    return color;
}

function changeColor(itemNumber){
    var hex = getHex();
    document.getElementsByTagName("hex")[itemNumber].innerHTML = hex;
    document.getElementsByTagName("BOX")[itemNumber].style.backgroundColor = hex;
}

function changeAllColors(){
    for (var i = 0; i < 5; i++) {
        var hex = getHex();
        document.getElementsByTagName("hex")[i].innerHTML = hex;
        document.getElementsByTagName("BOX")[i].style.backgroundColor = hex;
    }
}