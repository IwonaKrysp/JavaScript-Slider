    let images = [
      "masuria1.png",
      "masuria2.jpeg",
      "masuria3.jpeg",
      "masuria4.jpeg",
      "masuria5.jpeg",
      "masuria6.jpeg",
    ];

    let count = 0;
    let next = document.getElementById("nextBtn");
    let back = document.getElementById("backBtn");
    let slide = document.getElementById("slide");
    slide.src = images[count];

    let autoPlay = document.getElementById("autoPlay");
    let stop = document.getElementById("stop");
    let autoBack = document.getElementById("autoBack");

    //___________next button___________________________

    next.addEventListener("click", function goNext() {
      if (count < images.length - 1) {
        count++;
      } else {
        count = 0;
      }

      slide.src = images[count];
    });

    //____________back button__________________________

    back.addEventListener("click", function goBack() {
      if (count > 0) {
        count--;
      } else {
        count = images.length - 1;
      }

      slide.src = images[count];
    });

    //____________play button_______________________

    let forward;
    autoPlay.addEventListener("click", function play() {
      if (count < images.length - 1) {
        count++;
      } else {
        count = 0;
      }

      slide.src = images[count];
      forward = setTimeout(play, 1000);

      
    });


     stop.addEventListener("click", function stop() {
       clearTimeout(forward);
       clearTimeout(backward);
     });


    //_____________play back button______________________

    let backward;
    autoBack.addEventListener("click", function playBack() {
      if (count > 0) {
        count--;
      } else {
        count = images.length - 1;
      }

      slide.src = images[count];
      backward = setTimeout(playBack, 1000);
    });

   
