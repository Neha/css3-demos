var buttonElm = document.getElementsByTagName('button'),
    imgElm = document.getElementById('image');

for (var i = 0; i < buttonElm.length; i++) {
    buttonElm[i].addEventListener('click', function(e) {

        if (imgElm.hasAttribute('class') === true) {
            imgElm.removeAttribute('class');
        }
        var filter = this.getAttribute('data-filter');
        imgElm.classList.add(filter);
    });

}