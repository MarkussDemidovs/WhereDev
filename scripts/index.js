function copyShareButton() {
    var copiedText = window.location.href;

    console.log(copiedText);
    navigator.clipboard.writeText(copiedText);
}