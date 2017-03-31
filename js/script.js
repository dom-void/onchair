document.addEventListener('DOMContentLoaded', function() {

var menu = document.querySelectorAll('nav>ul>li');
var submenu = document.querySelectorAll('.submenu');
var picture = document.querySelectorAll('div.picture-in-picturebox');
var pictureName = document.querySelectorAll('div.picture-in-picturebox>div');

menu[0].addEventListener('mouseover', function() {
    submenu[0].classList.remove('hide');
    submenu[0].classList.add('show');
})
menu[0].addEventListener('mouseout', function() {
    submenu[0].classList.remove('show');
    submenu[0].classList.add('hide');
})

for (var i = 0; i < picture.length; i++) {
    picture[i].addEventListener('mouseover', function() {
        this.firstElementChild.classList.remove('show');
        this.firstElementChild.classList.add('hide');
    })
    picture[i].addEventListener('mouseout', function() {
        this.firstElementChild.classList.remove('hide');
        this.firstElementChild.classList.add('show');
    })   
}

})