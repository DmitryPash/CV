// // 3d

const D = document;

let topOfStory = D.querySelector(".story");
let body = D.querySelector("body");
let main = D.querySelector(".main");
let bluescreen = D.querySelector(".bluescreen");
let errorTitle = D.querySelector(".main-title");
let btnNext = D.querySelector(".main-link");
let embed = D.querySelector('audio')
let sound2 = D.querySelector('.sounditem2')
let psw = D.querySelector('.password');
let stopper = D.querySelector('.stopper');
let gallery = D.querySelector('.gallery');
let thirdpart = D.querySelector('.thirdpart')


//? Text change

let textChange1 = D.querySelector('.frame-text-change1'),
textChange2 = D.querySelector('.frame-text-change2');



//Create random math
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

// Create random password
let passwordArr = [];

for(let i = 0; i <= 3; i++) {
  let num = getRandomIntInclusive(1,9)
  passwordArr.push(num);
}
let password = passwordArr.join('')
psw.innerHTML = password





//Scroll off
body.classList.add("body-hidden");
setInterval(() => {
  bluescreen.classList.add("open");
  bluescreen.classList.add("rainbowscreen");
  setTimeout(() => {
    bluescreen.classList.remove("open");
    bluescreen.classList.remove("rainbowscreen");
  }, 150);
}, getRandomIntInclusive(10000, 40000));

//Let scroll story
// window.addEventListener("scroll", () => {
//   if (window.pageYOffset >= window.innerHeight) {
//     topOfStory.classList.add("story-getstart");
//   } else {
//     topOfStory.classList.remove("story-getstart");
//   }
// });

//Button effect
let mainbtn = D.querySelector(".main-button");
let errorContainer = D.querySelector(".error-container");

mainbtn.addEventListener("click", () => {
  //Delete btn from scerme
// embed.play()

  mainbtn.classList.add("main-button-transition");
  main.classList.add('main-error')
  // Error screen
  for (let i = 0; i < 1; i++) {
    let error = D.querySelectorAll(".error");

    const delayError = setInterval(() => {
      //create new error

      error[i].classList.add("open");
      let newError = error[i].cloneNode(true);
      //add new error
      errorContainer.appendChild(newError);

      //change top
      error[i].style.top = getRandomIntInclusive(0, 100) + "%";
      //change left
      error[i].style.left = getRandomIntInclusive(0, 100) + "%";
    }, 30);

    setTimeout(() => {
      // sound2.play()
      let arrOfErrors = D.querySelectorAll(".error");
      clearInterval(delayError);
      arrOfErrors.forEach((removeEror) => {
        removeEror.remove();
      });
      bluescreen.classList.add("open");
    }, 2000);
  }

  setTimeout(() => {
    // sound2.pause()
    bluescreen.classList.remove("open");
    main.classList.remove('main-error')
    main.classList.add("main-theme");
    // errorTitle glitch layers
    errorTitle.style.color = "#fff";
    errorTitle.innerText = "MENTAL DISORDER?";
    errorTitle.classList.add("hero");
    errorTitle.classList.add("glitch");
    errorTitle.classList.add("layers");
  }, 4000);

  setTimeout(() => {
    main.classList.add("tic-tak");
  }, 4500);

  setTimeout(() => {
    main.classList.remove("tic-tak");
    // bluescreen.classList.remove('open')
    main.classList.remove("main-theme");
    main.classList.add("main-darkness");
    // errorTitle glitch layers
    errorTitle.style.color = "#fff";
    errorTitle.innerText = "Peace of Мind";
    errorTitle.classList.remove("hero");
    errorTitle.classList.remove("glitch");
    errorTitle.classList.remove("layers");
    // btnNext.classList.add('open')
    mainbtn.style.display = "none";
  }, 8000);

  setTimeout(() => {
    bluescreen.classList.add("open");
    bluescreen.classList.add("rainbowscreen");
  }, 8300);
  setTimeout(() => {
    bluescreen.classList.remove("open");
    bluescreen.classList.remove("rainbowscreen");
    body.classList.remove("body-hidden");
    body.classList.add("body-z");
    document.querySelector(".container-z").classList.add("open");
    main.remove();
    window.scrollTo(0, 1);
  }, 8500);
});

let zSpacing = -1000,
  lastPos = zSpacing / 10,
  $frames = document.getElementsByClassName("frame"),
  frames = Array.from($frames),
  zVals = [];

window.onscroll = function () {
  let top = document.documentElement.scrollTop,
    delta = lastPos - top;

  lastPos = top;

  frames.forEach(function (n, i) {
    zVals.push(i * zSpacing + zSpacing);
    zVals[i] += delta * -5;

    let frame = frames[i],
      transform = `translateZ(${zVals[i]}px)`;

    opacity = zVals[i] < Math.abs(zSpacing) / 1.5 ? 1 : 0;
    frame.setAttribute("style", `transform:${transform}; opacity: ${opacity}`);

   

  });
  
//   if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
//     console.log('end')
//     // stopper.style.transform = 
    
//  }
 
};

// console.log(stopper)
gallery.addEventListener('click', () => {
  inputPassword.focus()
})

let inputPassword = D.querySelector('.input-password')

inputPassword.addEventListener('keyup', () => {
  console.log(password)
  if(inputPassword.value == password) {
    document.querySelector(".container-z").classList.remove("open");
    body.classList.remove('body-z')
    thirdpart.classList.add('open')
  }
})



//Part 3
let red = 3;
let green = 8;
let blue = 1;

function isEquile() {
  if (red == green && red == blue) {
    console.log('asd')
  }
}


let timerRed = D.querySelector('.timer-red');
let timerBlue = D.querySelector('.timer-blue');
let timerGreen = D.querySelector('.timer-green');
let timerReset = D.querySelector('.timer-reset');

timerRed.innerHTML = red
timerGreen.innerHTML = green
timerBlue.innerHTML = blue

timerRed.addEventListener('click', () => {
  red = red - 1;
  blue = blue + 1;
  green = green + 1;
  console.log(green)
  timerRed.innerHTML = red
  timerGreen.innerHTML = green
  timerBlue.innerHTML = blue
  isEquile()
})
timerGreen.addEventListener('click', () => {
  red = red - 1;
  blue = blue + 1;
  green = green - 1;
  timerRed.innerHTML = red
  timerGreen.innerHTML = green
  timerBlue.innerHTML = blue
  isEquile()
})
timerBlue.addEventListener('click', () => {
  red = red + 1;
  blue = blue - 1;
  green = green - 1;
  timerRed.innerHTML = red
  timerGreen.innerHTML = green
  timerBlue.innerHTML = blue
  isEquile()
})

timerReset.addEventListener('click', () => {
  red = 5;
  green = 3;
  blue = 1
  timerRed.innerHTML = red
  timerGreen.innerHTML = green
  timerBlue.innerHTML = blue
})






