let menuDiv = document.getElementById('menuDiv');
let header = document.getElementById('header');
const styles = window.getComputedStyle(header);

let krest = '../marshall/img/cross_mr3w4khsljuu.svg';
let menuSvg = document.getElementById('menuSvg');
let isTuggle = false;
let menu = '../marshall/img/bars_6ormopu6nwii.svg';
let logo = document.getElementById('logo');
let wel = document.getElementById('wel');
let productss = document.getElementById('productss');
let marshHis = document.getElementById('marshHis');
let sub = document.getElementById('sub');
let left = document.getElementById('left');
let right = document.getElementById('right');
let count = document.getElementById('count');
let otz = document.getElementById('otz');
let counter = 1;
let revName = document.getElementById('revName');
let rightArrowDiv = document.getElementById('rightArrowDiv');
let subInp = document.getElementById('subInp');
let upArrowDiv = document.getElementById('upArrowDiv');


menuDiv.addEventListener('click', () => {
   if (isTuggle == false) {
    isTuggle = true;
    // Переключаем класс active у header
    header.classList.toggle('active');
    menuSvg.src = krest;
    logo.innerHTML = `
    <div class="about" id="about">ABOUT</div>
            <div class="about" id="prod">PRODUCTS</div>
            <div class="about" id="history">HISTORY</div>
            <div class="about" id="neww">NEW</div>
            <a href="./sign/signIndex.html"><div class="about" id="sing">SING UP</div></a>`;
    logo.className = 'activeMenu';
    if (document.documentElement.clientWidth > 768) {
        header.style.alignItems = 'center';
        header.style.justifyContent = 'space-between';
        header.style.padding = '0px 60px';
    }
    else if (document.documentElement.clientWidth <= 767) {
      menuDiv.style.position = 'absolute';
      menuDiv.style.top = '4vh';
      menuDiv.style.right = '30px';
    }
    

    let about = document.getElementById('about');
    let prod = document.getElementById('prod');
    let history = document.getElementById('history');
    let neww = document.getElementById('neww');
    let sign = document.getElementById('sign');


    about.addEventListener('click', function() {
        wel.scrollIntoView({ behavior: 'smooth' });
      });

    prod.addEventListener('click', function() {
        productss.scrollIntoView({ behavior: 'smooth' });
    });
    history.addEventListener('click', function() {
        marshHis.scrollIntoView({ behavior: 'smooth' });
      });
    neww.addEventListener('click', function() {
        sub.scrollIntoView({ behavior: 'smooth' });
      });
   }
   else if (isTuggle == true) {
    isTuggle = false;
    // Переключаем класс active у header
    header.classList.toggle('active');
    menuSvg.src = menu;
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'space-between';
    header.style.padding = styles.padding;
    logo.innerHTML = `
    <img class="marshLogo" src="img/untitled.svg">`;
    logo.className = 'logo';

   }
});

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.hisPhoto1Div');

for (let elm of elements) {
  observer.observe(elm);
}

let elements1 = document.querySelectorAll('.block1');

for (let elm1 of elements1) {
  observer.observe(elm1);
}

let elements2 = document.querySelectorAll('.block2');

for (let elm2 of elements2) {
  observer.observe(elm2);
}

let elements3 = document.querySelectorAll('.hisphoto6Div');

for (let elm3 of elements3) {
  observer.observe(elm3);
}

let elements4 = document.querySelectorAll('.block3');

for (let elm4 of elements4) {
  observer.observe(elm4);
}

let elements5 = document.querySelectorAll('.hisphoto9Div');

for (let elm5 of elements5) {
  observer.observe(elm5);
}

right.onclick  = function() {
  if (counter < 5) {
    counter += 1;
    count.textContent = counter + '/5';
    aye();
  }
}

left.onclick = function() {
  if (counter > 1) {
    counter -= 1;
    count.textContent = counter + '/5';
    aye();
  }
}

function aye(){
if (counter == 1) {
  otz.textContent = `I've been using my Marshall speaker for a few months now, and I am absolutely blown away by the sound quality! The bass is deep, the highs are crisp, and it fills the room beautifully. It's perfect for both casual listening and parties. Highly recommend for any music lover!`;
  revName.textContent = `GARY W.`;
} else if (counter == 2) {
  otz.textContent = `I recently purchased a Marshall headphone, and I couldn't be happier. Not only do they look fantastic with that classic Marshall design, but the comfort and sound performance are top-notch. `;
  revName.textContent = `JOHN D.`;
} else if (counter == 3) {
  otz.textContent = `I've had my Marshall amp for over a year now, and it has never let me down. It’s built like a tank and delivers incredible sound every time I plug in. Whether I’m practicing at home or performing live, it always impresses. A must-have for any guitarist!`;
  revName.textContent = `MARY S.`;
} else if (counter == 4) {
  otz.textContent = `The Marshall portable speaker is a game-changer! It’s compact, lightweight, and the battery life is impressive. I take it everywhere, from beach outings to backyard barbecues. The sound quality is fantastic for its size, making it a great travel companion.`;
  revName.textContent = `KATE S.`;
} else if ( counter == 5) {
  otz.textContent = `As a long-time fan of Marshall, I finally decided to invest in their new line of wireless speakers. The sound is classic Marshall—rich and powerful. The wireless connectivity is seamless, and the vintage design adds a touch of elegance to my living room. I’m thrilled with my purchase!`;
  revName.textContent = `ALEX N.`;
}
}

rightArrowDiv.onclick = function() {
  subInp.value = 'Thank you for your subscription!';
}


window.addEventListener('scroll', function() {
  if (this.scrollY > 1100) {
    upArrowDiv.style.display = 'flex';
    upArrowDiv.style.justifyContent = 'end';
  }
  else if (this.scrollY < 1100) {
    upArrowDiv.style.display = 'none';
  }
  
});

upArrowDiv.onclick = function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

