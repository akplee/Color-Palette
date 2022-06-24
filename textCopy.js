function copyToClipboard(itemNumber) {
    const cb = navigator.clipboard;
    const paragraph = document.getElementsByTagName("hex")[itemNumber];
    cb.writeText(paragraph.innerText);
  }