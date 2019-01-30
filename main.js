var slika = document.getElementsByClassName('slika')[0];

var x = 1;
var pos = 0;
var box = document.getElementsByClassName('bx')[0];
var taster = document.getElementsByClassName('s1')[0];
var zavesa = document.getElementsByClassName('zavesa')[0];
slika.innerHTML = '<img src="images/' + x + '.gif">';
slika.style.position = "relative";
setInterval(run, 50);

function run() {
  slika.style.left = pos + "px";
  pos += 5;
  if (pos > 350) {
    pos = 350;
    slika.className = 'slika1';
    setTimeout(run1, 3000);
    setTimeout(zavesax, 3500);
    setTimeout(nne, 6500);

    console.log();
  }

  function run1() {
    taster.style.float = "right";
    setInterval(function() {
      taster.innerHTML = "OFF";
    }, 400);
    taster.className = 's2';
  }

  function zavesax() {
    zavesa.className = 'zavesa1';


  }

  function nne() {
    zavesa.style.display = 'none';
    box.style.display = 'none';
  }

}
