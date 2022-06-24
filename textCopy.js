function copyToClipboard(itemNumber) {
  const paragraph = document.getElementsByTagName("hex")[itemNumber];
  
  if(paragraph.innerText != "Color") {
    const cb = navigator.clipboard;
    cb.writeText(paragraph.innerText);

    var hexText = paragraph.innerHTML;
    paragraph.innerHTML = "Copied!";
    setTimeout(() => { paragraph.innerHTML = hexText }, 1000);
  }  
}