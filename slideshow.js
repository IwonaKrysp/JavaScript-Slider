let images = [
  "masuria1.png",
  "masuria2.jpeg",
  "masuria3.jpeg",
  "masuria4.jpeg",
  "masuria5.jpeg",
  "masuria6.jpeg",
];

let count = 0;
let nextButton = document.getElementById("nextBtn");
let backButton = document.getElementById("backBtn");
let imgBox = document.getElementById("img");
imgBox.src = images[count];

let autoPlayButton = document.getElementById("autoPlay");
let stopButton = document.getElementById("stop");
let autoBackButton = document.getElementById("autoBack");

//___________next button___________________________

nextButton.addEventListener("click", function goNext() {
  if (count < images.length - 1) {
    count++;
  } else {
    count = 0;
  }
  imgBox.src = images[count];
});

//____________back button__________________________

backButton.addEventListener("click", function goBack() {
  if (count > 0) {
    count--;
  } else {
    count = images.length - 1;
  }
  imgBox.src = images[count];
});

//____________play button_______________________

function play() {
  if (count < images.length - 1) {
    count++;
  } else {
    count = 0;
  }
  imgBox.src = images[count];
}

//check if there is already one set and use clearInterval
let forward;
autoPlayButton.addEventListener("click", function () {
  //if theres not setInterval
  if (forward === undefined) {
    forward = setInterval(play, 1000);
  }
});

stopButton.addEventListener("click", function stop() {
  clearInterval(forward);
  forward = undefined;
  clearInterval(backward);
  backward = undefined;
});

//_____________play back button______________________

function playBack() {
  if (count > 0) {
    count--;
  } else {
    count = images.length - 1;
  }
  imgBox.src = images[count];
}

let backward;
autoBackButton.addEventListener("click", function () {
  if (backward === undefined) {
    backward = setInterval(playBack, 1000);
  }
});
