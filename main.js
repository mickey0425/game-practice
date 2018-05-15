var array1 = ['win','lose'] ;

function getRandom(x) {
  return Math.floor(Math.random() * x);
}


winlose();

function winlose() {

  var WL = getRandom(2);
  var winorlose = document.getElementById('winorlose');


  if (WL == 0) {
    winorlose.innerHTml = array1[0];
  } else {
    winorlose.innerHTml = array1[0];
  }

}
