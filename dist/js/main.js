const D = document;

let topOfStory = D.querySelector(".story");
let body = D.querySelector("body");
let main = D.querySelector('.main');
let bluescreen = D.querySelector('.bluescreen');
let errorTitle = D.querySelector('.main-title');
let btnNext = D.querySelector('.main-link')

//Create random math
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }


//Scroll off
body.classList.add("body-hidden");
setInterval(() => {
    bluescreen.classList.add('open')
    bluescreen.classList.add('rainbowscreen')
    setTimeout(() => {
        bluescreen.classList.remove('open')
        bluescreen.classList.remove('rainbowscreen')
    },150)
},getRandomIntInclusive(10000,40000))

//Let scroll story
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= window.innerHeight) {
    topOfStory.classList.add("story-getstart");
  } else {
    topOfStory.classList.remove("story-getstart");
  }
});

//Button effect
let mainbtn = D.querySelector(".main-button");
let errorContainer = D.querySelector(".error-container");

mainbtn.addEventListener("click", () => {
  //Delete btn from scerme
  mainbtn.classList.add("main-button-transition");

  // Error screen
  for (let i = 0; i < 1; i++) {
    let error = D.querySelectorAll(".error");


    const delayError = setInterval(() => {
      //create new error

      error[i].classList.add('open')
      let newError = error[i].cloneNode(true);
      //add new error
      errorContainer.appendChild(newError);

      //change top
      error[i].style.top = getRandomIntInclusive(0, 100) + "%";
      //change left
      error[i].style.left = getRandomIntInclusive(0, 100) + "%";
    }, 30);

    setTimeout(() => {
        let arrOfErrors = D.querySelectorAll('.error')
        clearInterval(delayError);
        arrOfErrors.forEach((removeEror) => {
            removeEror.remove()
        })
        bluescreen.classList.add('open')
        
    }, 2000);
   

  }

    setTimeout(() => {
        bluescreen.classList.remove('open')
        main.classList.add('main-theme')
        // errorTitle glitch layers
        errorTitle.style.color = '#fff'
        errorTitle.innerText = 'MENTAL DISORDER?'
        errorTitle.classList.add('hero')
        errorTitle.classList.add('glitch')
        errorTitle.classList.add('layers')
    },4000)

    setTimeout(() => {
        main.classList.add('tic-tak')
    },4500)

    setTimeout(() => {
        main.classList.remove('tic-tak')
        // bluescreen.classList.remove('open')
        main.classList.remove('main-theme')
        main.classList.add('main-darkness')
        // errorTitle glitch layers
        errorTitle.style.color = '#fff'
        errorTitle.innerText = 'Peace of Мind'
        errorTitle.classList.remove('hero')
        errorTitle.classList.remove('glitch')
        errorTitle.classList.remove('layers')
        // btnNext.classList.add('open')
        mainbtn.style.display = 'none'

    },8000)

    setTimeout(() => {
        bluescreen.classList.add('open')
        bluescreen.classList.add('rainbowscreen')
    },8300)
    setTimeout(() => {
        bluescreen.classList.remove('open')
        bluescreen.classList.remove('rainbowscreen');
        body.classList.remove("body-hidden");

    },8500)

});


window.addEventListener('scroll', () => {
    console.log(window.pageYOffset)
    if(window.pageYOffset >= 200) {
        errorTitle.style.transform = `rotate3d(1,1,-13,180deg)`
    } else {
        errorTitle.style.transform = `rotate3d(1,1,1,0deg)`

    }
    
})


// window.scrollBy(-1000, -1000)

//First slide 

