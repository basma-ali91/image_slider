/**
 * 1- lma ados 3ala ay sora el fixedBox yban
 *
 * 2-el sora eli dost 3liha hya eli tban
 *
 * 3- lma ados 3al close el div y5tfy
 *
 * 4-lma ados 3ala ay mkan fe el div el kber y5tfy
 *
 * 5-a2lb bl ashom ymen we shmal
 *
 * 6- n2lb bl keyboard
 *
 *
 *
 *
 */

var imgs = document.getElementsByClassName("img-fluid");
var fixedBox = document.getElementById("fixedBox");
var smallBox = document.getElementById("smallBox");
var closeBtn = document.getElementById("closeBtn");
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var index;
var imgArray = [];


for (var i = 0; i < imgs.length; i++) {
    imgArray.push(imgs[i]);
}

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function (e) {
        fixedBox.classList.replace('d-none', 'd-flex')
        var clickImg = e.target;
        index = imgArray.indexOf(clickImg);
        var imgSrc = clickImg.getAttribute('src');
        smallBox.style.backgroundImage = `url(${imgSrc})`;
    });

}

closeBtn.addEventListener('click', function () {
    fixedBox.classList.replace('d-flex', 'd-none')
});

fixedBox.addEventListener('click', function () {
    fixedBox.classList.replace('d-flex', 'd-none')

});


smallBox.addEventListener('click', function (e) {
    e.stopPropagation();
});

nextBtn.addEventListener('click', function () {

    index++;

    if (index == imgArray.length) {
        index = 0;
    }


    var x = imgArray[index];
    var imgSrc = x.getAttribute('src');
    smallBox.style.backgroundImage = `url(${imgSrc})`;

});

prevBtn.addEventListener('click', function () {

    index--;
    if (index < 0) {
        index = imgArray.length - 1;
    }
    var x = imgArray[index];
    var imgSrc = x.getAttribute('src');
    smallBox.style.backgroundImage = `url(${imgSrc})`;

});



document.addEventListener('keydown', function (e){

    var keyName = e.key;

    if(keyName === "ArrowRight"){
        
        index++;

        if (index == imgArray.length) {
            index = 0;
        }
        var x = imgArray[index];
        var imgSrc = x.getAttribute('src');
        smallBox.style.backgroundImage = `url(${imgSrc})`;
    }

      else if(keyName === "ArrowLeft"){
       
        index--;
        if (index < 0) {
            index = imgArray.length - 1;
        }
        var x = imgArray[index];
        var imgSrc = x.getAttribute('src');
        smallBox.style.backgroundImage = `url(${imgSrc})`;
    }

    else if(keyName === " " || keyName === "Escape"){
        fixedBox.classList.replace('d-flex', 'd-none')
    }

});
