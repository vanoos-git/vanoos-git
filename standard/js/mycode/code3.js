document.addEventListener('DOMContentLoaded', function() {
  console.log('document is ready. I can sleep now');

  var Menu = document.getElementById('dmenu');
  var Bar = document.getElementById('menu');
  var dpop = document.getElementById('download');
  var spop = document.getElementById('psubmit');
  var fpop = document.getElementById('pforget');
  var right = document.getElementById('right');
  var left = document.getElementById('left');
  var myHeader = document.getElementById('myHeader');
  Menu.style.cursor = 'pointer';
  Menu.onclick = function() {
    var computedStyle = getComputedStyle(Bar);
    if (computedStyle.right < "0") {
      Bar.style.right = +5 + '%';
    } else {
      Bar.style.right = -80 + '%';
    }
  };

  fpop.onclick = function() {
    var el = document.getElementById("pop1");
    el.style.opacity = 0;
    el.style.background = "#58b2b7";
  };

  dpop.onclick = function() {
    var el = document.getElementById("pop1");
    var computedStyle = getComputedStyle(el);
    if (computedStyle.opacity === '1') {
      el.style.opacity = 0;
      el.style.background = "#58b2b7";
    } else {
      el.style.opacity = 1;
      el.style.background = "#58b2b7";
    }
  };

  spop.onclick = function() {
    inpErr = "";
    var Name = document.getElementById("inpName");
    var inpEmail = document.getElementById("inpEmail");
    if (Name.value === '') {
      inpErr += "Nothing typed in name field<br>";
    } else if (!allLetter(Name)) {
      inpErr += "Wrong name input<br>";
    }
    if (inpEmail.value === '') {
      inpErr += "Nothing typed in E-mail field<br>";
    } else if (!validateEmail(inpEmail.value)) {
      inpErr += "Wrong E-mail input<br>";
    }
    if (inpErr != '') {
      document.getElementById('txtf').innerHTML = inpErr;
    } else {
      document.getElementById('txtf').outerHTML = "Thanks";
      document.getElementById('pop1').style.opacity = 0;
    }
  }

  var pics = ['Road_s', 'Cat_s', 'Bird_s'];
  var it = 0;
  right.onclick = function() {
    if (it === pics.length-1) {
      it = -1;
    }
    it++;
    myHeader.style.backgroundImage = 'url(images/'+pics[it]+'.jpg)';
  }

left.onclick = function() {
  if (it === 0) {
    it = pics.length;
  }
  it--;
  myHeader.style.backgroundImage = 'url(images/'+pics[it]+'.jpg)';
}
});
