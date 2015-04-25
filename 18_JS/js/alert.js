console.log('juhejj');

var haromszogek = document.querySelectorAll('.haromszog');
var sebessegek = [0.5, 0.3, 0.7];
var kezdoertekek = [];

for (var i = 0; i < haromszogek.length; i++) {
  kezdoertekek[i] = haromszogek[i].getBoundingClientRect().top;
}


function scrolloztak() {
  for (var i = 0; i < haromszogek.length; i++) {
    haromszogek[i].style.top = kezdoertekek[i] + document.body.scrollTop * sebessegek[i] + 'px';
  }
}

document.addEventListener('scroll', scrolloztak);
